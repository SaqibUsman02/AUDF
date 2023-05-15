import React, { useState } from "react";
import Img from "../images/saqib.jpeg";

const ImagePrac = () => {
  const [postImage, setPostImage] = useState('');
 const Title ="chec";
 const newImage=" ";
  const createPost = async (e) => {
    try {
      const res = await fetch("/Upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postImage,
            Title
        }),
      });

      const data = await res.json();

      if (res.status === 409 || !res) {
        window.alert("Invalid Credentials");
      } else if (res.status === 403 || !res) {
        window.alert("an email send to your account please verify");
      } else if (res.status === 201) {
        window.alert("ho gya na");
      } else {
        // console.log(ress);
        window.alert("else wala");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    createPost(postImage);
    console.log("Uploaded");
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log("Base64 ha yeh ======= " + base64);
    setPostImage(base64);
    // newImage = base64;
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="custom-file-upload">
          <img src={postImage } alt="" />
        </label>

        <input
          type="file"
          lable="Image"
          name="myFile"
          id="file-upload"
          // value={value}
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />

        <h3>Doris Wilder</h3>
        <span>Designer</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImagePrac;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
