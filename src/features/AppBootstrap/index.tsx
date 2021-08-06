import React, { Suspense, lazy } from "react";
import { useAppSelector } from "../../app/hooks";
import { isAuthSelector } from "./selectors";
import Sign from "./components/Sign";

const RenderAuthorize = lazy(() => import("./components/RenderAuthorized"));

const AppBootstrap: React.VFC = () => {
  const isAuth = useAppSelector(isAuthSelector);

  if (!isAuth) {
    return <Sign />;
  }

  return (
    <Suspense fallback={null}>
      <RenderAuthorize />
    </Suspense>
  );
};

export default AppBootstrap;
