import React, { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import SomeComeponent from "./view/SomeComponent";

const DndComponent = () => {
  const [winReady, setWinReady] = useState(false);
  useEffect(() => {
    setWinReady(true);
  }, []);
  return (
    <div>
      <h1>DndComponent Area</h1>

      <div className="items-area">
        <div className="first-column">
          Col-1
          {winReady && <SomeComeponent />}
        </div>
        <div className="sec-column">
          Col-2
          {/* {winReady && <SomeComeponent />} */}
        </div>
      </div>
    </div>
  );
};
export default DndComponent;
