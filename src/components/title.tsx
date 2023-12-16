import React from "react";
import TextureIcon from "@mui/icons-material/Texture";
const Title = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{ display: "flex", flexDirection: "row" }}
        className="titleProductDetails"
      >
        <button className="buttonsProjectNew blue ">
          <div>
            <TextureIcon />
          </div>
          <div className="titleButton ">
            <b>Project</b>
          </div>
        </button>
        <button className="buttonsProjectNew yellow">
          <div>
            <TextureIcon />
          </div>
          <div className="titleButton ">
            <b>New</b>
          </div>
        </button>
      </div>
      <div className="title titleProductDetails">
        Wago Contact- 221 - 421 - Terminal WAGO 221 Mini 2x4mm2 a |
      </div>
      <div className="secondaryTitle titleProductDetails">WAGO</div>
    </div>
  );
};

export default Title;
