// import { Cloudinary } from "cloudinary-core";
// new Cloudinary({ cloud_name: "dq5nc6lbr" });

// const UploadImage = async (file) => {
//     try {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("upload_preset", "Emmanuel");
//         formData.append("folder", "DevSync");

//         const response = await fetch(
//             `https://api.cloudinary.com/v1_1/dq5nc6lbr/image/upload`,
//             {
//                 method: "POST",
//                 body: formData,
//             }
//         );

//         const data = await response.json();

//         return data.secure_url; // This is the URL of the uploaded image
//     } catch (error) {
//         console.error("Error uploading image:", error);
//     }
// };


const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
        return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
        return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
        return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
        return "Password must contain at least one Digit.";
    }
    const isContainsSymbol = /(?=.*[!@#$%^&*])/
    if (!isContainsSymbol.test(value)) {
        return "Password must contain at least one Special Symbol.";
    }

    //   const isValidLength = /^.{6}$/;
    //   if (!isValidLength.test(value)) {
    //     return "Password must be atleast 6 Characters Long.";
    //   }

    return null;
}


const TimeConverter = (timestamp) => {
    const date = new Date(timestamp);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

    // Extracting date components
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // const seconds = date.getSeconds();

    // Creating a formatted date string
    const formattedDate = `${month} ${day}, ${year} - ${hours}:${minutes}`;

    return formattedDate;
}


const DateConverter = (timestamp) => {
    const date = new Date(timestamp);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

    // Extracting date components
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    // const seconds = date.getSeconds();

    // Creating a formatted date string
    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
}

const Check =()=>{
    const Check = localStorage.getItem('userLoggedIn');
    return Check
}

export { checkPasswordValidity, TimeConverter, DateConverter, Check }