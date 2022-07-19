import React from "react";
import "./gallery.css";

import img1 from "../../assets/mess/290025528_549721940040718_4580081167536944955_n.jpg";
import img2 from "../../assets/mess/241735525_368587178154196_7524858711600615546_n.jpg";
import img3 from "../../assets/mess/240521876_356179966061584_1506085220205009667_n.jpg";
import img4 from "../../assets/mess/239341691_352475226432058_2334215250593439008_n.jpg";
import img5 from "../../assets/mess/239368918_352475296432051_1258332795925526247_n.jpg";
import img7 from "../../assets/mess/241752588_368587118154202_3150070996364842603_n.jpg";

export default function Gallery() {
  return (
    <center>
      <div>
        <div class="container1">
          <div class="box1">
            <img src={img1} />
            {/* <span>CSS</span> */}SlideShow
          </div>
          <div class="box1">
            <img src={img2} />
            {/* <span>Image</span> */}
          </div>
          <div class="box1">
            <img src={img3} />
            {/* <span>Hover</span> */}
          </div>
          <div class="box1">
            <img src={img4} />
            {/* <span>Effect</span> */}
          </div>
          <div class="box1">
            <img src={img5} />
            {/* <span>Image</span> */}
          </div>
          {/* <div class="box1">
          <img src={img6} />
        </div> */}
          <div class="box1">
            <img src={img7} />
            {/* <span>Effect</span> */}
          </div>
        </div>
      </div>
    </center>
  );
}
