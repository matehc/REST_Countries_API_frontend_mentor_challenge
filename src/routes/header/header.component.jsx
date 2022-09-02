import React from "react";

import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <h1>Where in the world?</h1>

        <Outlet />
        {/* dark mode switch goes here */}
      </div>
    </>
  );
};

export default Header;
