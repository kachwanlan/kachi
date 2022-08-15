import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <Loader
        type="Bars"
        color="blue"
        height={100}
        width={100}
      />
    </div>
  );
}

export default Preloader;
