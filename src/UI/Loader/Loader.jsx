import React from "react";
import  './Loader.scss'

const Loader = ({...props}) => {
  return (
    <div {...props} className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
