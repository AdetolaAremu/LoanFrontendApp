import React from "react";
import "./loader.css";

export const Loader = () => {
  return (
    <div className="loader__container col-md-6">
      <div className="loader"></div>
    </div>
  );
};


export const SpinnerGrow = () => {
    return (
        <>
        <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
        ></span>
        <span className="ml-2">Loading...</span>
        </>
    );
    
    };

export const RollerLoader = () => {
  return (
    <div className="lds-roller" style={{margin:"auto"}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}
export const RectSpinner = () => {
  return (
    <div className="lds-spinner" style={{margin:"auto"}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}
