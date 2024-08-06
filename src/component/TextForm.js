import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function TextForm(props) {
  const { speak } = useSpeechSynthesis();

  function toProperCase(text) {
    return text
      .toLowerCase() // Convert the entire string to lowercase
      .split(" ") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the array back into a single string
  }

  // function for change event
  let handleonchange = (event) => {
    console.log("you are change the text ");
    settext(event.target.value); // jab tak ham value ko target nahi karenge tab tak ham text area ke ander change nahi kar payenge
  };

  //    function to click event for uppercase
  const handleUpClick = () => {
    // console.log("you are clicked ")
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Uppercase Enable", "success");
  };

  //    function to click event for lower case
  let handlelowerClick = () => {
    // console.log("you are clicked ")
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Lowercase Enable", "success");
  };
  //    function to click event for capitalize case
  let handleCapitalizeClick = () => {
    // console.log("you are clicked ")
    let newtext = toProperCase(text);
    settext(newtext);
    props.showalert("Capitalize Case Enable", "success");
  };

  //    remove the text function
  let handleclearClick = () => {
    let newtext = "";
    settext(newtext);
    props.showalert("clear the text", "success");
  };

  //    download function
  let downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("mybox").value], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    props.showalert("download the text", "success");
  };

  //   copy  function
  let handletocopytext = () => {
    console.log("copy function ");
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("copy the text", "success");
  };

  //   function for remove the extra space
  let handletoextraspace = () => {
    console.log("remove function for extra space ");
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showalert("remove extra space the text", "success");
  };

  //function for text to speech
  let handletoSpeech = () => {
    speak({ text: text });
  };

  //   states create here
  const [text, settext] = useState("");
  return (
    <>
      <div>
        <h2
          className={`my-2 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          {props.heading}
        </h2>
        <textarea
          className={`form-control  text-${
            props.mode === "light" ? "dark" : "light"
          } `}
          style={{
            backgroundColor: props.mode === "dark" ? "#1E1E1E" : "white",
            color: props.mode === "light" ? "dark" : "light",
          }}
          value={text}
          id="mybox"
          onChange={handleonchange}
          placeholder="Enter the text here"
          rows="10"
        ></textarea>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success mx-1 my-1"
          onClick={handlelowerClick}
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleCapitalizeClick}
        >
          Capitalize
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-danger mx-1 my-1"
          onClick={handleclearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-warning mx-1 my-1"
          onClick={downloadTxtFile}
        >
          Download
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-info mx-1 my-1"
          onClick={handletocopytext}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-secondary mx-1 my-1"
          onClick={handletoextraspace}
        >
          Remove Space
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-danger mx-1 my-1"
          onClick={handletoSpeech}
        >
          Text to Speech
        </button>
      </div>

      <div className="container">
        <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          The Text Summary
        </h2>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text.length === 0 ? 0 : text.split(" ").length} words and{" "}
          {text.length} character
        </p>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text.length === 0 ? 0 : 0.008 * text.split(" ").length} minutes{" "}
        </p>
        <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Preview
        </h2>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text.length > 0 ? text : "Nothing to preview "}
        </p>
      </div>
    </>
  );
}
