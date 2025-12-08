import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import style from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className={`outletStyle text-center w-100 ${style.outletStyle}`}>
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
