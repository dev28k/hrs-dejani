import SimpleImageSlider from "react-simple-image-slider";

import img1 from "../../assets/mess/290025528_549721940040718_4580081167536944955_n.jpg";
import img2 from "../../assets/mess/241735525_368587178154196_7524858711600615546_n.jpg";
import img3 from "../../assets/mess/240521876_356179966061584_1506085220205009667_n.jpg";
import img5 from "../../assets/mess/239368918_352475296432051_1258332795925526247_n.jpg";
import img7 from "../../assets/mess/241752588_368587118154202_3150070996364842603_n.jpg";

export default function MobileGallery() {
  const images = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img5 },
    { url: img7 },
  ];

  return (
    <div col style={{ marginTop: "-15%", marginBottom: "-20%" }}>
      <SimpleImageSlider
        autoPlay={true}
        showNavs="true"
        navStyle={1}
        navSize={30}
        width={'100%'}
        height={500}
        images={images}
        slideDuration={0.5}
        loop={true}
      />
    </div>
  );
}
