import React, { useEffect } from "react";
import { fetchList } from "../redux/listAction";
import { connect } from "react-redux";
import Banners from "./Banners";
import Restaurants from "./Restaurants";

function ListRestaurant({ fetchlistData, listData }) {
  useEffect(() => {
    fetchlistData();
  }, [fetchlistData]);
  return (
    <div>
      <Banners listData={listData} />
      <Restaurants listData={listData} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    listData: state.list.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchlistData: () => dispatch(fetchList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRestaurant);
