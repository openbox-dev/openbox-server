import { Outlet } from "@remix-run/react";
import Footer from "~/ui/common/Footer/Footer";
import Header from "~/ui/common/Header/Header";

export default function () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
