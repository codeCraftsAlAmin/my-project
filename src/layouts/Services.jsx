import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import {
  MdOutlineFireTruck,
  MdOutlinePayment,
  MdOutlineSecurity,
} from "react-icons/md";

const Services = () => {
  return (
    <div className="container">
      <div className="grid gird_three_col">
        {/* service -1 */}
        <div className="serv_1">
          <MdOutlineFireTruck className="icon" />
          <h3>super fast and free delivery</h3>
        </div>

        {/* service-2 */}
        <div className="serv_2">
          <div className="serv_col_2">
            <div>
              <MdOutlineSecurity className="icon" />
              <h3>Non-contact Shipping</h3>
            </div>
          </div>

          <div className="serv_col_2">
            <div>
              <GiReceiveMoney className="icon" />
              <h3>Money-back Guaranteed</h3>
            </div>
          </div>
        </div>

        {/* service -3 */}
        <div className="serv_3">
          <div>
            <MdOutlinePayment className="icon" />
            <h3>Super Secure Payment System</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
