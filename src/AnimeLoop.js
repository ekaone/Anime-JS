import React, { useRef } from "react";
import anime from "animejs";

export default function AnimeLoop() {
  const box1 = useRef();
  const box2 = useRef();

  const moveBox = () => {
    anime({
      targets: box1.current,
      translateX: 270,
      loop: 3,
      easing: "easeInOutSine"
    });

    anime({
      targets: box2.current,
      translateX: 270,
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine"
    });
  };

  return (
    <>
      <button onClick={() => moveBox()}>Move Box</button>
      <p ref={box1} className="box"></p>
      <p ref={box2} className="box"></p>
    </>
  );
}
