import React from "react";
import FlipToFrontOutlinedIcon from "@mui/icons-material/FlipToFrontOutlined";
interface ReferenceButtonProps {
  userReference: string;
}
const ReferenceButton: React.FC<ReferenceButtonProps> = ({ userReference }) => {
  return (
    <div
      style={{
        height: "40px",
        border: "3px solid #b7b5b5",
        fontWeight: "bolder",
        fontSize: "1.1rem",
        borderRadius: "20px",
        backgroundColor: "rgb(250, 253, 254)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 10px",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "0px 10px 0px 0px",
      }}
    >
      <div>{userReference}</div>
      <div>
        <FlipToFrontOutlinedIcon />
      </div>
    </div>
  );
};

export default ReferenceButton;
