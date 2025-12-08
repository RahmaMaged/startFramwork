import React, { useEffect } from "react";
import style from "./Contact.module.css";

export default function Contact() {
  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      const label = input.previousElementSibling;

      const toggleLabel = () => {
        if (input.value) {
          label.classList.remove("d-none");
        } else {
          label.classList.add("d-none");
        }
      };

      input.addEventListener("input", toggleLabel);

      return () => input.removeEventListener("input", toggleLabel);
    });
  }, []);

  return (
    <>
      <div className="container-fluid p-5">
        <h1 className={`${style}`}>CONTACT SECTION</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className={`line me-3 ${style.line}`}></div>
          <i className={`fa-solid fa-star ${style}`}></i>
          <div className={`line ms-3 ${style.line}`}></div>
        </div>
        <div className="container d-flex flex-column p-5">
          <label className="align-self-start my-2 d-none" htmlFor="userName">
            userName:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className={`form-control py-2 my-2 rounded border-0 border-bottom w-100`}
            placeholder="userName"
          />

          <label className="align-self-start my-2 d-none" htmlFor="userAge">
            userAge:
          </label>
          <input
            type="number"
            id="userAge"
            name="userAge"
            className={`form-control py-2 my-2 rounded border-0 border-bottom w-100`}
            placeholder="userAge"
          />

          <label className="align-self-start my-2 d-none" htmlFor="userEmail">
            userEmail:
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            className={`form-control py-2 my-2 rounded border-0 border-bottom w-100`}
            placeholder="userEmail"
          />

          <label
            className=" align-self-start my-2 d-none"
            htmlFor="userPassword"
          >
            userPassword:
          </label>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            className={`form-control py-2 my-2 rounded border-0 border-bottom w-100`}
            placeholder="userPassword"
          />

          <button className="rounded border-0 p-2 text-white">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}
