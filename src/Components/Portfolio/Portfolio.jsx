import React, { useState } from "react";
import style from "./Portfolio.module.css";
import photo1 from "./../../assets/poert1.png";
import photo2 from "./../../assets/port2.png";
import photo3 from "./../../assets/port3.png";

export default function Portfolio() {
  const photos = [photo1, photo2, photo3, photo1, photo2, photo3];
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  return (
    <div className="container-fluid p-5">
      <h1 className={`${style} fw-bold`}>PORTFOLIO COMPONENT</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className={`line me-3 ${style.line}`}></div>
        <i className={`fa-solid fa-star ${style}`}></i>
        <div className={`line ms-3 ${style.line}`}></div>
      </div>
      <div className="row">
        {photos.map((photo, idx) => (
          <div className="col-lg-4 p-4" key={idx}>
            <div className={style.innerContent}>
              <img
                src={photo}
                className="w-100 d-block rounded"
                alt=""
                onClick={() => setSelectedPhoto(photo)}
              />
              <div className={style.overlay}>
                <i className="fa-solid fa-plus text-white fs-1"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className={`lightbox position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center ${style.lightBox}`}
          onClick={() => setSelectedPhoto(null)}
        >
          <img
            src={selectedPhoto}
            alt=""
            className={`${style.image} w-50`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
