import styled from "@emotion/styled";
import { createRef, useEffect, useRef, useState } from "react";
import TheLayout from "../theLayout/TheLayout";
import { isMobile } from "react-device-detect";
import { Grid, GridItems } from "../ui";

const Testcomponent = () => {
  const [isLock, unLock] = useState(false);

  const clickToggle = () => {
    unLock(!isLock);
  };

  return (
    <TheLayout>
      <Styled
        id="slider1"
        data-lock-text="Hello!!"
        data-unlock-text="YaY!!"
        onClick={() => {
          clickToggle();
        }}
        className="slideToUnlock locked"
      >
        <div className="unlocked" />
        <div className="text">Hello!!</div>
        <div className="drag locked_handle" />
      </Styled>
    </TheLayout>
  );
};
export default Testcomponent;

interface Props {
  isLock?: boolean;
}

const Styled = styled.div<Props>`
  &.slideToUnlock {
    position: relative;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    max-width: 700px;

    &.locked {
      color: #692003;
      font-size: 18px;
      font-family: "Microsoft Yahei", serif;
      background-color: #eff3ea;
    }
  }

  .progressBar {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    border-radius: 25px;
  }
  .text {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: transparent;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  }

  .drag {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 100%;
    transition: all 1s;
    /* transform: translateX(0%); */
    display: inline-block;
    line-height: 50px;
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid #cccccc;
    background: #fff;
    color: #692003;
    text-align: center;
  }
`;
