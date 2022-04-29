import React from "react";

export default function Home() {
  return (
    <div>
      <h1>One With Heaven and Earth</h1>
      <img
        src={require("../../Images/vb2.jpg")}
        alt={"Man overlooking cloudly mountains"}
        className="hero"
      />
      {/* <div className="imgcaption">One With Heaven and Earth</div> */}
    </div>
  );
}
