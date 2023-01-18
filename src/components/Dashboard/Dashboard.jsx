/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

import { Charts } from "../Charts/Charts";
import { DataTable } from "../DataTable/DataTable";

const baseURL = "https://dweet.io:443/get/dweets/for/2249ctemp";

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isShowChart, setIsShowChart] = useState(true);

  function showChart() {
    setIsShowChart(!isShowChart);
  }
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            IOT Project
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div className="container">
        <div className="row ">
          <div className="col-12 dash-heading">Dashboard</div>
          <div className="dataShowContainer">
            <button className="btn btn-outline-secondary" onClick={showChart}>
              {isShowChart ? "Show Table" : "Show Graph"}
            </button>
          </div>
        </div>
        <div className="charts-table-data">
          {isShowChart ? <Charts /> : <DataTable />}
        </div>
      </div>
    </div>
  );
};
