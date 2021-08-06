import React, { useState, useCallback } from "react";
import cn from "classnames";
import Header from "./components/Header";
import RequestHistory from "./components/RequestHistory";

const Console: React.VFC = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  const toggleScreen = useCallback(
    () => setFullScreen((prevState) => !prevState),
    []
  );

  return (
    <div className={cn("console", { fullScreen })}>
      <Header fullScreen={fullScreen} toggleScreen={toggleScreen} />
      <RequestHistory />
    </div>
  );
};

export default Console;
