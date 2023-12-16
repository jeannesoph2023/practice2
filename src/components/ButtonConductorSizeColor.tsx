import React from "react";

interface PropsConductorSizeColor {
  conductorSize: string;
  activeButton: string[];
  setIsActiveButton: React.Dispatch<React.SetStateAction<string[]>>;
  id: number;
}

const ButtonConductorSizeColor: React.FC<PropsConductorSizeColor> = ({
  conductorSize,
  activeButton,
  setIsActiveButton,
  id,
}) => {
  const changeBorderButtonConductorSize = () => {
    setIsActiveButton((prev) => [...prev, id.toString()]);
  };
  return (
    <div
      style={{
        height: "40px",
        border: activeButton.includes(id.toString())
          ? "3px solid #000"
          : "3px solid #b7b5b5",
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
      onClick={changeBorderButtonConductorSize}
    >
      {conductorSize}
    </div>
  );
};

export default ButtonConductorSizeColor;
