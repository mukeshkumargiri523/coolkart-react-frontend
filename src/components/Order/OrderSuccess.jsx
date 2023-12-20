import React, { useEffect, useState } from "react";
import "./OrderSuccess.scss";

import { fetchDataFromApi } from "../../utils/api";
function OrderSuccess() {
  const [orders, setOrders] = useState();
  useEffect(() => {
    getOrders();
  }, []);
  const getOrders = () => {
    fetchDataFromApi("/api/orders?populate=*").then((res) => {
      let orIndex = res?.data?.length - 1;

      setOrders(res?.data[orIndex]);
    });
  };
  return (
    <>
      <div className="order-success">
        <div className="order-heading">Order Successfull</div>
        <div className="order-container">
          <div className="order-item">
            <div className="order-id">
              ORDER ID : {orders?.attributes?.stripeid}
            </div>
            {orders?.attributes.products.map((item) => {
              return (
                <div className="order-name">
                  <span>Item Name:</span> {item?.attributes.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSuccess;
