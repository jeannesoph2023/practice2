import React from "react";
import ibricMini from "../images/ibric.avif";

const Imag = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", marginRight: "35px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0px 30px 0px 0px",
        }}
      >
        <img src={ibricMini} style={{ height: "80px", width: "80px" }} />
        <img src={ibricMini} style={{ height: "80px", width: "80px" }} />
        <img src={ibricMini} style={{ height: "80px", width: "80px" }} />
        <img src={ibricMini} style={{ height: "80px", width: "80px" }} />
      </div>
      <div>
        <img src={ibricMini} style={{ height: "320px", width: "320px" }} />
      </div>
    </div>
  );
};

export default Imag;
