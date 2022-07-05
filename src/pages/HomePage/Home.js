import React, { Suspense } from "react";

const MainCrousel = React.lazy(() => import("../../components/MainCrousel"));
const Services = React.lazy(() => import("../../components/Services"));
const ReviewCard = React.lazy(() =>
  import("../../components/ReviewCard/ReviewCard")
);

function App() {
  return (
    <Suspense>
      <MainCrousel />
      <Services />
      <ReviewCard />
    </Suspense>
  );
}

export default App;
