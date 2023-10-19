import { useState } from "react";
import Button from "../Button/Button";
import './ShortLink.css'
export default function ShortLink({ isShortUrl, text }) {
  const saveClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
       console.log('got it!')
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
   
  };

  return (
    <div className={`box ${isShortUrl ? "active" : "hide"}`}>
      <div className="content">
        <div className="text">{text}</div>
        <Button  onClick={saveClipboard} value={'Копировать'}/>
      </div>
    </div>
  );
};
