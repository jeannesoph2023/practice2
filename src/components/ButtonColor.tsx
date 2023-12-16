import React, { useState } from "react";
interface ProposButtonColor {
  color: string;
}
const ButtonColor: React.FC<ProposButtonColor> = ({ color }) => {
  const [isClicked, setIsCliked] = useState<boolean>(false);
  const handleColorBorder = () => {
    setIsCliked(!isClicked);
  };
  return (
    <div>
      <div
        style={{
          height: "40px",
          border: isClicked ? "3px solid #000" : "3px solid #b7b5b5",
          fontWeight: "bolder",
          fontSize: "1.1rem",
          borderRadius: "20px",
          backgroundColor: "rgb(250, 253, 254)",
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px",
          alignItems: "center",
          justifyContent: "start",
          margin: "5px 10px 0px 0px",
        }}
        onClick={handleColorBorder}
      >
        {color}
      </div>
    </div>
  );
};

export default ButtonColor;
