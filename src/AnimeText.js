import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function AnimeText(props) {
  // const { translateX, translateY } = props;
  const refBox = useRef();
  const [state, setState] = useState({
    translateX: 0,
    translateY: 0
  });
  useEffect(() => {
    console.log("X: ", state.translateY);
    console.log("Y: ", state.translateY);
  }, [state.translateY, state.translateX]);

  useEffect(() => {
    _anime();
  });

  const _anime = () => {
    anime({
      targets: refBox.current,
      translateX: { value: state.translateX },
      translateY: { value: state.translateY },
      duration: 2000
    });
  };

  return (
    <>
      <button
        onClick={() =>
          setState({
            translateX: state.translateX + 10,
            translateY: state.translateY + 10
          })
        }
      >
        Increase X | Y {state.translateX}
      </button>{" "}
      <button
        onClick={() =>
          setState({
            translateX: state.translateX - 10,
            translateY: state.translateY - 10
          })
        }
      >
        Decrease X | Y {state.translateX}
      </button>
      <div ref={refBox}>
        <h2>Press button to move this text</h2>
      </div>
    </>
  );
}
