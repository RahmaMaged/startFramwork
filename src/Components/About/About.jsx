import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={`container-fluid ${style.container} text-white p-5 mt-4`}>
        <h1 className="text-white">ABOUT COMPONENT</h1>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className={`line me-3 bg-white ${style.line}`}></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className={`line ms-3 bg-white ${style.line}`}></div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="p-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="p-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
