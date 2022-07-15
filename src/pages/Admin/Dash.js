import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import Collapsible from "react-collapsible";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { TbLogout } from "react-icons/tb";
import { MultiSelect } from "react-multi-select-component";
import ReactPlayer from "react-player";

const RoomTable = React.lazy(() =>
  import("../../components/DataTable/RoomTable")
);
const BlogEditor = React.lazy(() =>
  import("../../components/BlogEditor/BlogEditor")
);

const options = [
  { label: "Internet 🌐", value: "Internet" },
  { label: "Television 📺", value: "Television" },
  { label: "Air Conditioner ❄", value: "AC", disabled: true },
  { label: "Refrigerator 🧊", value: "Refrigerator" },
];

export default function Dash() {
  const [selected, setSelected] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [blogImage, setBlogImage] = useState(null);
  const [videos, setVideos] = useState();
  const [fetchedVideo, setFetchedVideo] = useState("");

  const [sliderImages, setSliderImages] = useState([]);
  const [getSliderImages, setGetSliderImages] = useState([]);

  const navigate = useNavigate("");

  useEffect(() => {
    let loginCheck = localStorage.getItem("login");
    if (!loginCheck) {
      navigate("/login");
    }

    // FETCHING VIDEO FROM SERVER
    axios
      .get("https://dejaniresort.herokuapp.com/video", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        // handle success
        setFetchedVideo(response.data);
        //  console.log(fetchedVideo)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    //FETCH SLIDER IMAGES
    axios
      .get("https://dejaniresort.herokuapp.com/sliderImages")
      .then(function (response) {
        // handle success
        setGetSliderImages(response.data);
        // console.log(getSliderImages);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    // fetchVideo();
  }, [fetchedVideo, getSliderImages]);

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  // ROOM FORM VALUES
  function handleSubmit(event) {
    event.preventDefault();
    var s = [];
    selected.forEach((element) => {
      s.push(element.value);
      // console.log(element.value)
    });
    console.log(s);
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("class", event.target[0].value);
    formData.append("beds", event.target[1].value);
    formData.append("capacity", event.target[2].value);
    formData.append("services", s);
    formData.append("fare", event.target[4].value);
    formData.append("description", event.target[5].value);

    insertRoom(formData);
  }

  // POST ROOM data to DATABASE
  async function insertRoom(values) {
    console.log(values);
    await fetch("https://dejaniresort.herokuapp.com/roomInesrt", {
      method: "POST",
      mode: "no-cors",
      body: values,
    })
      .then((response) => {
        // console.log(response)
        alert("Record Stored");
        // window.location.reload(true)
        // var resp = response.json()
      })
      .catch((error) => console.log(error));
  }

  async function submitVideo() {
    const formData = new FormData();

    formData.append("video", videos);

    await fetch("https://dejaniresort.herokuapp.com/videoUpload", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then((response) => {
        console.log(response.status);
        alert("Record Stored");
        window.location.reload(true);
        // var resp = response.json()
      })
      .catch((error) => console.log(error));
    // console.log(videos);
  }

  // function uploadSLiderImages() {
  //   sliderImages.forEach(async (element) => {
  //     const formData = new FormData();
  //     formData.append("image", element.file);
  //     formData.append("id", element.id);

  //     await fetch("http://localhost:8081/ImageUpload", {
  //       method: "POST",
  //       mode: "no-cors",
  //       body: formData,
  //     })
  //       .then((response) => {
  //         // console.log(response)
  //         console.log("Record Stored");
  //         // window.location.reload(true)
  //         // var resp = response.json()
  //       })
  //       .catch((error) => console.log(error));

  //     // console.log(element.file)
  //   });
  // }

  return (
    <Suspense>
      <Tabs>
        <TabList>
          <Tab>Room</Tab>
          <Tab>Blogs</Tab>
          <Tab>Videos</Tab>
          {/* <Tab>Sliders</Tab> */}
          <Button
            variant="danger"
            className="float-right"
            style={{ marginRight: "1.5%" }}
            onClick={logout}
          >
            <TbLogout size={40} color={"#15C4B4"} />
          </Button>
        </TabList>

        <TabPanel style={{ padding: "2%" }}>
          <Card
            align="center"
            className="col-md-12"
            style={{ backgroundColor: "#15C4B4" }}
          >
            <Card.Title>Room Details</Card.Title>
            <form className="col-md-12 row" onSubmit={handleSubmit}>
              <div className="form-group col-md-3">
                <label className="form-control-label">Room Class</label>
                <select className="form-control">
                  <option value="Economy">Economy</option>
                  <option value="Standard">Standard</option>
                  <option value="Family">Family</option>
                </select>
              </div>

              <div className="form-group col-md-3">
                <label className="form-control-label">No of Beds</label>
                <select className="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label className="form-control-label">
                  Capacity (No. of Persons)
                </label>
                <select className="form-control">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-control-label">Services</label>
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                />
              </div>

              <div className="col-md-3">
                <label className="form-control-label">Fare (Per Night)</label>
                <br />
                <input
                  className="form-control"
                  style={{ marginTop: "1%" }}
                  type="text"
                  placeholder="7000 Pkr"
                />
              </div>

              <div className="col-md-6" style={{ marginBottom: "1%" }}>
                <label className="form-control-label">Description</label>
                <br />
                <textarea
                  style={{ width: "100%", height: "100px" }}
                  placeholder="..."
                />
              </div>

              <div className="col-md-3">
                <label className="form-control-label">Image Upload</label>
                {/* <br />
                            {selectedImage && (
                                <div>
                                <img alt="not fount" width={"200px"} src={URL.createObjectURL(selectedImage)} />
                                <br />
                                <button onClick={()=>setSelectedImage(null)}>Remove</button>
                                </div>
                            )}
                            <br /> */}

                <br />
                <input
                  type="file"
                  name="myImage"
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </div>

              <div
                className="col-lg-12 login-btm"
                style={{ marginTop: "3%", marginBottom: "2%" }}
              >
                <center>
                  <button
                    type="submit"
                    className="roberto-btn w-50 btn-outline-primary"
                  >
                    Insert
                  </button>
                </center>
              </div>
            </form>
          </Card>

          <Card>
            <RoomTable />
          </Card>
        </TabPanel>

        <TabPanel style={{ padding: "2%" }}>
          <Card
            align="center"
            className="col-md-12"
            style={{ backgroundColor: "#15C4B4" }}
          >
            <Card.Title>Blog Post</Card.Title>
            <Card.Body>
              <form className="col-md-12 row">
                <div className="col-md-7">
                  <label className="form-control-label">Title of Post</label>
                  <br />
                  <input
                    className="form-control"
                    style={{ marginTop: "1%" }}
                    type="text"
                    placeholder="Top 10 Hotels in ..."
                  />
                </div>

                <div className="col-md-5">
                  <label className="form-control-label">
                    Upload Blog Image
                  </label>
                  <br />
                  <input
                    style={{ marginTop: "1%" }}
                    className="form-control"
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setBlogImage(event.target.files[0]);
                    }}
                  />
                </div>

                <div className="col-md-12">
                  <BlogEditor />
                </div>
              </form>
            </Card.Body>
          </Card>
        </TabPanel>

        <TabPanel align="center" style={{ padding: "2%" }}>
          <Card className="col-md-10" style={{ backgroundColor: "#15C4B4" }}>
            <Card.Title align="center">Main Page Video</Card.Title>
            <Card.Body align="center" className="row">
              {fetchedVideo &&
                fetchedVideo.map((item) => {
                  var link = item.imageLink;
                  link = link.split("/");
                  var img = "https://dejaniresort.herokuapp.com/vid/" + link[3];
                  // console.log(img)
                  return (
                    <div className="col-md-6">
                      <h6>Current Video</h6>
                      <ReactPlayer
                        url={img}
                        controls={true}
                        playing={true}
                        width="100%"
                        volume={5}
                        muted
                      />
                    </div>
                  );
                })}
              <div className="col-md-6">
                <div style={{ marginTop: "20%", border: "1px solid #12ac9e" }}>
                  <p>
                    The current video will be removed and replaced by new
                    uploaded one.
                  </p>
                </div>
                <Card style={{ backgroundColor: "#15C4B4", marginTop: "5%" }}>
                  <div className="col-md-5">
                    <label className="form-control-label">Video Upload</label>
                    {/* <br />
                                        {selectedImage && (
                                            <div>
                                            <img alt="not fount" width={"200px"} src={URL.createObjectURL(selectedImage)} />
                                            <br />
                                            <button onClick={()=>setSelectedImage(null)}>Remove</button>
                                            </div>
                                        )}
                                        <br /> */}

                    <br />
                    <input
                      type="file"
                      name="myImage"
                      onChange={(event) => {
                        console.log(event.target.files[0]);
                        setVideos(event.target.files[0]);
                      }}
                    />
                  </div>
                  <button className="roberto-btn mt-50" onClick={submitVideo}>
                    Upload
                  </button>
                </Card>
              </div>
            </Card.Body>
          </Card>
        </TabPanel>

        {/* <TabPanel style={{ padding: "2%" }}>
          <Card className="col-md-12" style={{ backgroundColor: "#15C4B4" }}>
            <Collapsible trigger="Slider Images">
              <Card.Body align="center" className="row">
                {getSliderImages &&
                  getSliderImages.map((item) => {
                    var s = item.imageLink.split("/");
                    // console.log(s[3])
                    return (
                      <div className="col-md-3">
                        <Card style={{ backgroundColor: "#15C4B4" }}>
                          <img
                            src={"http://localhost:8081/img/" + s[3]}
                            style={{ width: "365px", height: "250px" }}
                          />
                        </Card>
                        <input
                          type="file"
                          name="myImage"
                          onChange={(event) => {
                            console.log(event.target.files[0]);
                            var obj = {
                              id: "62bc0ea523c16c7e493d75a7",
                              file: event.target.files[0],
                            };
                            setSliderImages([...sliderImages, obj]);
                          }}
                        />
                      </div>
                    );
                  })}
                <div className="col-md-3">
                  <p style={{ fontStyle: "italic", marginTop: "5%" }}>
                    Replace Images and then Press Upload
                  </p>
                  <Button
                    variant="success"
                    style={{ marginTop: "15%" }}
                    onClick={uploadSLiderImages}
                  >
                    Upload
                  </Button>
                </div>
              </Card.Body>
            </Collapsible>
          </Card>
        </TabPanel> */}
      </Tabs>
    </Suspense>
  );
}
