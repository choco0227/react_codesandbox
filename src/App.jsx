import React, { useState } from "react";
import Colorful from "./components/colorful";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShoeFlg] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlg = () => {
    setFaceShoeFlg(!faceShowFlg);
  };
  if (num % 3 === 0) {
    faceShowFlg || setFaceShoeFlg(true);
  } else {
    faceShowFlg && setFaceShoeFlg(false);
  }

  return (
    <>
      <h1 style={{ color: "red" }}>Hello CodeSandbox</h1>
      <Colorful color="pink">お元気ですか？</Colorful>
      <Colorful color="blue">お元気です</Colorful>
      <button onClick={onClickCountUp}>UP</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlg}>切り替え</button>

      {faceShowFlg && <p>('ω')ノ</p>}
    </>
  );
};
export default App;
