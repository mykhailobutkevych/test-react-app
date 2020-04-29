import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";

import Sidebar from "./Sidebar/Sidebar";

const Main = props => {
  const { children } = props;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  return (
    <div style={{ paddingLeft: 160 }}>
      <Sidebar open variant={isDesktop ? "persistent" : "temporary"} />
      <main>{children}</main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
