import { Outlet, useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_catalog";
import Footer from "~/ui/common/Footer/Footer";
import Header from "~/ui/common/Header/Header";

export default function () {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Header user={data.user} />
      <Outlet />
      <Footer />
    </>
  );
}
