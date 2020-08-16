import React from "react";
import SignInPage from "../../pages/SignIn";
import SignUpPage from "../../pages/SignUp";

const SlidingDrawer = ({ type, show }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={drawerClasses}>
      {type === "signIn" ? <SignInPage /> : <SignUpPage />}
    </div>
  );
};

export default SlidingDrawer;
