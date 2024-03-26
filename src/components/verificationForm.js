import React, { useEffect, useRef, useState } from 'react'
import { LOCAL_AUTH_BASE_URL } from '../Datas/data';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SuccessIcon from '../img/icon/Illustration.png'

export default function VerificationForm({ onNextStep }) {
  const successRef = useRef(null);
  const [email, setEmail] = useState("")
  const [click, setClick] = useState(false);
  const [spin, setSpin] = useState(false);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [className, setClassName] = useState("");

  const [codeBox, setCodeBox] = useState(new Array(6).fill(""));
  console.log(codeBox)

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  }

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem('userEmail'));
    setEmail(email)
  }, []);

  const navigate = useNavigate();

  const Clearer = () => {
    const timerId = setTimeout(() => {
      setClick(false)
      setMessage("")
    }, 5000);

    return () => clearTimeout(timerId);
  }


  async function HandleVerify(e) {
    e.preventDefault();

    const isCodeValid = codeBox.every((value) => value.trim() !== "");

    const code = codeBox.join("");

    if (!email || !isCodeValid) {
      setClick(true)
      setClassName("alert__message error")
      setMessage("Please enter the verification code")
      Clearer()
    } else {
      setSpin(true)
      const body = {
        email,
        code
      }
      console.log(body)
      axios.post(`${LOCAL_AUTH_BASE_URL}/password/reset/verify`, body, axiosConfig)
        .then(response => {
          const data = response.data
          console.log(data)

          if (data.status === true) {
            setClick(false)
            setClassName("")
            successRef.current.click()
            setSuccessMessage(data.message)
            const timerId = setTimeout(() => {
              navigate('/auth/change');
              window.location.reload();

            }, 4000);

            return () => clearTimeout(timerId);

          } else if (data.status === false) {
            setClick(true)
            setClassName("alert__message error")
            setMessage(data.message)
            setSpin(false)
            Clearer()
          }

        })
        .catch(err => console.log(err))
    }
  }

  const HandleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setCodeBox([
      ...codeBox.map((d, idx) => (idx === index ? element.value : d)),
    ]);
    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  function HandleDelete(e, index) {
    if (e.key === "Backspace" && e.target.previousSibling) {
      e.preventDefault();
      e.target.previousSibling.focus();

      setCodeBox([...codeBox.map((data, i) => (i !== index ? data : ""))]);
    } else if (
      e.key === "Backspace" &&
      !e.target.previousSibling &&
      e.target.nextSibling
    ) {
      e.preventDefault();
      setCodeBox([...codeBox.map((data, i) => (i !== index ? data : ""))]);
    } else if (e.key === "Enter") {
      onNextStep();
    }
  }

  function HandlePaste(e) {
    const value = e.clipboardData.getData("text");
    if (isNaN(value)) return false;
    const updatedValue = value.toString().split("").slice(0, codeBox.length);
    setCodeBox(updatedValue);
    console.log(codeBox)

    const focusedInput = e.target.parentNode.querySelector("input:focus");
    if (focusedInput) {
      focusedInput.blur();
    }

    const lastInput = e.target.parentNode.querySelector(
      'input[type="password"]:last-child'
    );
    if (lastInput) {
      lastInput.focus();
    }
  }

  return (
    <div className="">
      <div className=''>
        <div class="modal fade" id="loginSuccess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body AlertModal p-3">
                <center>
                  <img src={SuccessIcon} alt="" />
                  <p>{successMessage}</p>

                </center>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="" data-bs-toggle="modal" data-bs-target="#loginSuccess" ref={successRef} style={{ display: 'none' }}>
        </button>
      </div>
      <form className="authForm">
        {click ? <div className={className}>
          <p>{message}</p>
        </div> : ""}
        <div className="verifyInput_Container">
          {codeBox.map((value, i) => (
            <input
              type="text"
              key={i}
              className="text-center"
              value={value}
              maxLength={1}
              onChange={(e) => HandleChange(e.target, i)}
              onFocus={(e) => e.target.select()}
              onKeyDown={(e) => {
                if (e.keyCode === 8 || e.key === "Backspace") {
                  HandleDelete(e, i);
                } else if (e.key === "ArrowLeft" && e.target.previousSibling) {
                  e.target.previousSibling.focus();
                } else if (e.key === "ArrowRight" && e.target.nextSibling) {
                  e.target.nextSibling.focus();
                }
              }}
              onPaste={(e) => {
                HandlePaste(e);
              }}
            />
          ))}
        </div>
        <div className="margin30"></div>
        <button
          // fn={handleNext}
          // text={
          //   isLoading ? <ScaleLoader height={15} color="#ffffff" /> : "Continue"
          // }
          onClick={HandleVerify}
          className="btnLight w-100 mb-3 ms-0 "
        >
          {spin ? <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> : <span></span>}
          Verify account</button>
      </form>
    </div>

  );
}
