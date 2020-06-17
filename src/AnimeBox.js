import React, { useRef } from "react";
import anime from "animejs";

export default function AnimeBox() {
  const box = useRef();

  const moveBox = () => {
    anime({
      targets: box.current,
      translateX: 250,
      rotateZ: 360,
      scale: 2,
      duration: 3000
      // loop: true
    });
  };

  return (
    <>
      <button onClick={() => moveBox()}>Move Box</button>
      <p ref={box} className="box"></p>
    </>
  );
}
