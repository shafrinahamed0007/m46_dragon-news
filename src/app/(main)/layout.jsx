import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      <Navbar />
    </>
  );
};

export default MainLayout;
