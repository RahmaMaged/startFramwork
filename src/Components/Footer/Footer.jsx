import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={`w-100 text-center text-white ${style.contentBody} p-5`}>
        <div className="row">
          <div className="col-lg-4 p-4">
            <div className="innerContent">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-lg-4 p-4">
            <div className="innerContent">
              <h3>AROUND THE WEB</h3>
              <ul className="d-flex justify-content-center align-items-center flex-wrap list-unstyled">
                <li>
                  <i className="fa-brands fa-facebook text-white px-3 py-2 rounded-circle mx-2 border border-1 border-white d-flex justify-content-center align-items-center"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter text-white  px-3 py-2 rounded-circle mx-2 border border-1 border-white d-flex justify-content-center align-items-center"></i>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin text-white  px-3 py-2 rounded-circle mx-2 border border-1 border-white d-flex justify-content-center align-items-center"></i>
                </li>
                <li>
                  <i className="fa-solid fa-globe text-white px-3 py-2 rounded-circle mx-2 border border-1 border-white d-flex justify-content-center align-items-center"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 p-4">
            <div className="innerContent">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`w-100 text-center text-white p-3 ${style.copyRight}`}>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
