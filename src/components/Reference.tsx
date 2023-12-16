import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ReferenceButton from "./referenceButton";
import { BorderBottom } from "@mui/icons-material";

const Reference = () => {
  const [isClickedAddReference, setIsClikedAddReference] =
    useState<Boolean>(false);
  const [reference, setReference] = useState<string>("");
  const [isReference, setisReference] = useState<boolean>(false);
  const [references, setReferences] = useState<string[]>([]);
  const addReference = () => {
    setIsClikedAddReference(true);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const handleAddButton = () => {
    setIsClikedAddReference(false);
    setReferences((prevReferences) => [...prevReferences, reference]);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="inputReferences productDetails">
        <div className="inputReferences referencesList">
          {references.slice(0, 3).map((userReference, index) => (
            <div key={index}>
              <ReferenceButton userReference={userReference} />
            </div>
          ))}
        </div>
        <div>
          <button
            style={{
              width: "260px",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              border: "3px solid #b7b5b5",
              fontWeight: "bolder",
              fontSize: "1.1rem",
              borderRadius: "20px",
              backgroundColor: "rgb(250, 253, 254)",
            }}
          >
            <div onClick={addReference}>
              <AddIcon />
            </div>
            <div>Add your own reference</div>
          </button>
          <div>
            {isClickedAddReference && (
              <form onSubmit={handleSubmit}>
                <textarea
                  value={reference}
                  onChange={(e: any) => {
                    return setReference(e.target.value), setisReference(true);
                  }}
                  placeholder="Write reference..."
                />
                <div>
                  {isReference && (
                    <button onClick={handleAddButton}>Add</button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="productDetails">
        <b>
          <p
            style={{
              paddingBottom: "2px",
              textDecoration: "underline",
            }}
          >
            See all references ({references.length})
          </p>
        </b>
      </div>
    </div>
  );
};

export default Reference;
