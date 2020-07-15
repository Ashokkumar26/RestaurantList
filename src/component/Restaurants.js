import React, { useState } from "react";
function Outlet({ outlet }) {
  const [expand, setExpand] = useState(false);
  const showOutletList = () => {
    setExpand(true);
  };
  return (
    <div>
      {outlet.length > 1 && !expand && (
        <span onClick={showOutletList}>
          <small style={{ color: "red" }}>for More here</small>
        </span>
      )}
      {outlet.length <= 1
        ? outlet.map((datum) => (
            <>
              <li>{datum.outletName}</li>
            </>
          ))
        : outlet.map((moreData) => (
            <div>{expand && <li>{moreData.outletName}</li>}</div>
          ))}
    </div>
  );
}
function Restaurants({ listData }) {
  return (
    <div>
      {listData.listRestaurants &&
        listData.listRestaurants.length !== 0 &&
        listData.listRestaurants.map((data) => (
          <div>
            <h3>{data.restaurantName}</h3>
            <img
              src={data.restaurantImage}
              style={{ width: "350px", height: "200px" }}
              alt=""
            />
            <Outlet outlet={data.outlet} />
          </div>
        ))}
    </div>
  );
}

export default Restaurants;
