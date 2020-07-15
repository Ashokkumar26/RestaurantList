import React from "react";

function Banners({ listData }) {
  return (
    <div style={{ display: "flex" }}>
      {listData.banners &&
        listData.banners.length !== 0 &&
        listData.banners.map((id) => (
          <div style={{ marginLeft: "220px" }}>
            <img src={id.bannerImage} style={{ width: "150px" }} alt="" />
            {id.outlets.map((name) => (
              <h4>{name.outletName}</h4>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Banners;
