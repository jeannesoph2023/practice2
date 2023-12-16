import React from "react";
import ButtonConductorSizeColor from "./ButtonConductorSizeColor";
import ButtonColor from "./ButtonColor";
import { useState } from "react";

const ConductorSizeAndColor = () => {
  const [color, setColor] = useState<string>("");

  const [isClickedConductor, setIsClikedConductor] = useState<boolean>(false);
  const [conductorSizeSelected, setconductorSizeSelected] =
    useState<string>("");
  const [activeButton, setActiveButton] = useState<string[]>([]);
  const conductorSize = [
    "#14",
    "#12",
    "#10",
    "#8",
    "#6",
    "#4",
    "2/0",
    "3/0",
    "4/0",
    "250 kcmil",
    "300 kcmil",
    "400 kcmil",
    "500kcmil",
  ];
  const colors = ["Black", "Blue", "Brown", "Orange", "Pink"];
  const handleColor = (color: string) => {
    setColor(color);
  };
  const handleConductorSize = (conductorsize: string) => {
    setconductorSizeSelected(conductorsize);
    setIsClikedConductor(!isClickedConductor);
  };
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <b>Conductor size :</b> <b>{conductorSizeSelected}</b>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "500px",
          height: "120px",
        }}
      >
        {conductorSize.map((conductorSize, index) => (
          <div key={index} onClick={() => handleConductorSize(conductorSize)}>
            <ButtonConductorSizeColor
              conductorSize={conductorSize}
              activeButton={activeButton}
              setIsActiveButton={setActiveButton}
              id={index}
            />
          </div>
        ))}
      </div>
      <div style={{ marginBottom: "20px", marginTop: "40px" }}>
        <b>Color: {color}</b>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "500px",
          height: "120px",
        }}
      >
        {colors.map((color, index) => (
          <div key={index} onClick={() => handleColor(color)}>
            <ButtonColor color={color} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConductorSizeAndColor;
