import React from "react";
import Imag from "../components/Imag";
import ImagProperties from "./ImagProperties";

const ImageDetails = () => {
  return (
    <div style={{ display: "flex", marginTop: "20px" }}>
      <Imag />
      <ImagProperties />
    </div>
  );
};

export default ImageDetails;
