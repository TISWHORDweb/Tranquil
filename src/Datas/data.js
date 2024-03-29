
const AUTH_BASE_URL = "https://devsync-server-beta.onrender.com/api/v1/auth"
const USER_BASE_URL = "http://localhost:5000/api/v1"

const LOCAL_AUTH_BASE_URL = "http://localhost:5000/api/v1/auth"
// const LOCAL_USER_BASE_URL = "https://devsync-server-beta.onrender.com/api/v1/user"

const AxiosConfig = () => {
    const data = JSON.parse(localStorage.getItem('userData'));
    console.log(data);
    const token = data.token

    return {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "t-token": token
        }
    }
}


export { LOCAL_AUTH_BASE_URL, AUTH_BASE_URL, USER_BASE_URL, AxiosConfig }

