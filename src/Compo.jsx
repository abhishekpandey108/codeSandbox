import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";
export default function Compo() {
  let darkTheme = useTheme();
  let toggle = useThemeUpdate();
  const stl = {
    margin: "2rem",
    padding: "2rem",
    background: darkTheme ? "black" : "gray",
    color: darkTheme ? "white" : "black"
  };

  return (
    <>
      <div style={stl}>Here is your Text</div>
      <button onClick={toggle}>{darkTheme ? "Light Mode" : "Dark Mode"}</button>
    </>
  );
}
