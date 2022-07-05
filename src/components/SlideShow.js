import React from "react";
import { Carousel } from "react-carousel-minimal";
import bg1 from "../assets/mess/239341691_352475226432058_2334215250593439008_n.jpg";
import bg2 from "../assets/bg-img/49.jpg";
import bg3 from "../assets/mess/233732192_347614050251509_9197189036710540032_n.jpg";

export default function SlideShow() {
  const data = [
    {
      image: bg1,
      caption: `<div>
                      Welcome To
                      <br>
                      Dejani Resort
                    </div>`,
    },
    {
      image: bg2,
      // caption: `<div>
      //             Welcome To
      //             <br>
      //             Hotel Reservation
      //         </div>`
    },
    {
      image: bg3,
      caption: `<div>
                        Peaceful
                        <br>
                        Atmosphere
                    </div>`,
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    fontFamily: "classy-fonts",
    fontStyle: "italic",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            data={data}
            time={1500}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="5px"
            // slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="center"
            automatic={true}
            dots={false}
            // pauseIconColor="white"
            // pauseIconSize="40px"
            // slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              //   maxWidth: "1500px",
              maxHeight: "500px",
              //   margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
