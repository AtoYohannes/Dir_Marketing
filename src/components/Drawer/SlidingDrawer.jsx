import React from "react";
// import SignInPage from "../../Pages/SignIn";
// import SignUpPage from "../../Pages/SignUp";

const SlidingDrawer = ({ type, show }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={drawerClasses}>
      {/* {type === "signIn" ? <SignInPage /> : <SignUpPage />} */}
      <h1>
        Sliding Drawer
      </h1>
    </div>
  );
};

export default SlidingDrawer;
