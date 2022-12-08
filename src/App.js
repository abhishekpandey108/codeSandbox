import "./styles.css";
import { ThemeProvider } from "./ThemeContext";
import React from "react";
import Compo from "./Compo";
export default function App() {
  return (
    <ThemeProvider>
      <Compo />
    </ThemeProvider>
  );
}
