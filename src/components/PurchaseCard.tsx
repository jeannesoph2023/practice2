import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardCommandKeyOutlinedIcon from "@mui/icons-material/KeyboardCommandKeyOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
const PurchaseCard = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="purchaseCard">
      <div className="card">
        <div style={{ margin: "20px 40px" }}>
          <div style={{ marginBottom: "40px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
              }}
            >
              <button
                style={{
                  border: "3px solid #b7b5b5",
                  width: "160px",
                  height: "40px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  fontWeight: "bolder",
                  fontSize: "1.1rem",
                  borderRadius: "20px",
                  backgroundColor: "rgb(250, 253, 254)",
                  marginRight: "10px",
                }}
              >
                <div>
                  <ContentCopyOutlinedIcon />
                </div>
                <div>
                  <b>Compare</b>
                </div>
              </button>
              <div
                style={{
                  border: "3px solid #b7b5b5",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",

                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={handleLike}
              >
                <FavoriteBorderOutlinedIcon
                  style={{ color: isLiked ? "red" : "#000" }}
                />
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ color: "gray", fontWeight: "bolder" }}>
              00.000,00 €
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <div style={{ fontSize: "1.9rem", fontWeight: "bolder" }}>
                00.000,00 €
              </div>
              <div style={{ marginLeft: "15px" }}>
                <InfoOutlinedIcon />
              </div>
            </div>
          </div>
          <div
            style={{
              color: "gray",
              fontWeight: "bolder",
              marginBottom: "20px",
            }}
          >
            {" "}
            by X unit • XX €/unit{" "}
          </div>
          <button
            style={{
              border: "3px solid #000",
              width: "520px",
              height: "70px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "0px 10px",
              alignItems: "center",
              fontWeight: "bolder",
              fontSize: "1.1rem",
              borderRadius: "40px",
              backgroundColor: "rgb(250, 253, 254)",
              marginRight: "10px",
              marginBottom: "10px",
            }}
          >
            <div style={{ color: "grey" }}>
              <KeyboardCommandKeyOutlinedIcon />
            </div>
            <div>
              <div style={{ fontSize: "1.8rem" }}>
                <b>X</b>
              </div>
              <div style={{ color: "grey" }}>XX,XX €</div>
            </div>
            <div>
              <KeyboardCommandKeyOutlinedIcon />
            </div>
          </button>
          <button
            style={{
              width: "520px",
              height: "70px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "0px 10px",
              alignItems: "center",
              fontWeight: "bolder",
              fontSize: "1.1rem",
              borderRadius: "40px",
              backgroundColor: "#138BF2",
              marginRight: "10px",
              marginBottom: "25px",
            }}
          >
            <div style={{ paddingRight: "5px" }}>
              <ShoppingCartOutlinedIcon />
            </div>
            <div>
              <b>Add to cart</b>
            </div>
          </button>
          <div
            style={{
              width: "520px",
              border: "1px solid #ebebeb",
              marginBottom: "40px",
            }}
          ></div>
          <div style={{ marginBottom: "20px" }}>
            <b>Delivery at [Zip code]</b>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                paddingRight: "10px",
                color: "grey",
              }}
            >
              <LocalShippingOutlinedIcon />
            </div>
            <div
              style={{
                // paddingRight: "10px",
                height: "30px",
                width: "40px",

                paddingBottom: "5px",
                borderRadius: "40px",
                backgroundColor: "#b0f7c3",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <b>25</b>
              </div>
            </div>
            <div
              style={{
                paddingRight: "10px",
                paddingBottom: "5px",
                paddingLeft: "10px",
              }}
            >
              <b>tomorrow</b>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: "36px",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                // paddingRight: "10px",
                height: "30px",
                width: "60px",

                paddingBottom: "5px",
                borderRadius: "40px",
                backgroundColor: "#b0f7c3",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
              }}
            >
              <b>+123 </b>{" "}
            </div>
            <div>
              <b>2-3 days</b>
            </div>
          </div>
          <div style={{ marginBottom: "15px" }}>
            {" "}
            <b>Pickup at [ Store name ]</b>{" "}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                paddingRight: "10px",
                color: "grey",
              }}
            >
              <StoreOutlinedIcon style={{ color: "grey" }} />
            </div>
            <div
              style={{
                // paddingRight: "10px",
                height: "30px",
                width: "40px",

                paddingBottom: "5px",
                borderRadius: "40px",
                backgroundColor: "#b0f7c3",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <b>10</b>
              </div>
            </div>
            <div
              style={{
                paddingRight: "10px",
                paddingBottom: "5px",
                paddingLeft: "10px",
              }}
            >
              <b>today</b>
            </div>
          </div>
          <div style={{ textDecoration: "underline" }}>
            <b>Check availability in other stores</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
