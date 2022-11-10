import React from "react";
import DataTable from "../../Pages/DataTable";
import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

const AdminsTable = () => {
  const columns = [
    { field: "administrator_id", headerName: "Administrator ID" },
    { field: "username", headerName: "Username" },
    { field: "first_name", headerName: "First Name" },
    { field: "last_name", headerName: "Last Name" },
    { field: "company_id", headerName: "Comapny Id" },
    { field: "phone_number", headerName: "Phone number" },
    { field: "email", headerName: "Email" },
  ];

  const [admins, setAdmins] = useState([]);

  const adminTableStyles = {
    height: "400px",
    width: "100%",
  };

  useEffect(() => {
    getAdmins();
  }, []);

  const getAdmins = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/" + "administrators",
        {
          // headers: {
          //   "Content-Type": "application/json",
          //   "Access-Control-Allow-Origin": "*",
          //   "Authorization" : "*f"
          // },
        }
      );
      if (res.status === 200) {
        setAdmins(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Row>
        <Col></Col>
        <Col>
          <DataTable
            rows={admins}
            columns={columns}
            loading={!admins.length}
            getRowId={(row) => row.administrator_id}
            sx={adminTableStyles}
          />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default AdminsTable;
