import MUIDataTable from "mui-datatables";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

function RoomTable() {
  // console.log(data)
  const [responsive, setResponsive] = useState("horizontal");
  const [tableBodyHeight, setTableBodyHeight] = useState("275px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(false);
  const [filterBtn, setFilterBtn] = useState(false);
  var counter = 1;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/roomList")
      .then(function (response) {
        // handle success
        setData(response.data);
        // console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const columns = [
    "Sr.",
    "Class",
    "Beds",
    "Capacity",
    "Services",
    "Fare",
    "Description",
    { name: "Id", options: { display: false } },
  ];

  const deleteRoom = async (val) => {
    // let doc = localStorage.getItem('user');
    const myObj = {
      Id: val,
    };
    // console.log({ val });
    const response = await axios.post(
      "http://localhost:8081/deleteRoom",
      myObj,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status == 200) {
      //   toast("Record Deleted!")
    }
    console.log(response);
  };

  const options = {
    rowHover: true,
    search: false,
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      // console.log(action);
      // console.dir(state);
    },
    onRowsDelete: (index) => {
      index.data.forEach((element) => {
        // console.log(data[element.dataIndex]._id)
        deleteRoom(data[element.dataIndex]._id);
      });
    },
    onRowClick: (rowData) => {
      // console.log(rowData)
      navigate("/patientRecord", {
        state: rowData,
      });
    },
    elevation: 4,
    pagination: false,
  };

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={""}
          data={data.map((item) => {
            // console.log(item.dateTime)
            var date = dateFormat(item.dateTime, "dd-mmmm-yyyy");
            // console.log(data)
            return [
              counter++,
              item.class,
              item.beds,
              item.capacity,
              item.services,
              item.fare,
              item.description,
              item._id,
            ];
          })}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
      {/* <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      /> */}
    </CacheProvider>
  );
}

export default RoomTable;
