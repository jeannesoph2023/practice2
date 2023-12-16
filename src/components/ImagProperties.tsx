import React from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ConductorSizeAndColor from "./ConductorSizeAndColor";

const ImagProperties = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "#959696",
        }}
      >
        <div>
          <InsertDriveFileIcon />
        </div>
        <div>
          <b>See documentation</b>
        </div>
      </div>
      <div
        style={{ fontSize: "1.4rem", marginTop: "60px", marginBottom: "40px" }}
      >
        <b>Variant</b>
      </div>
      <ConductorSizeAndColor />
    </div>
  );
};

export default ImagProperties;
