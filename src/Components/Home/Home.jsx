import React from "react";
import photo from "./../../assets/Home_avatar.svg";
import style from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={`container-fluid ${style.container} p-5`}>
        <img src={photo} alt="" className="w-25 d-block mx-auto" />
        <h2 className="text-white FS-1 fw-bold my-2">START FRAMEWORK</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className={`line me-3 bg-white ${style.line}`}></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className={`line ms-3 bg-white ${style.line}`}></div>
        </div>
        <p className="text-white my-2">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
