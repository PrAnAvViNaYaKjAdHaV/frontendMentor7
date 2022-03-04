import React from "react";
import Nav from "./Nav";
import MainContent from "./MainContent";
import Footer  from "./Footer";
export default function app() {
  return (
    <div>
      <Nav />
      <MainContent />
      <Footer/>
    </div>
  );
}
