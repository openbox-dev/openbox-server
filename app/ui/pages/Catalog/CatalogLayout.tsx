import { Outlet } from "@remix-run/react";
import Header from "~/ui/common/Header/Header";

export default function () {
  return (
    <div>
      <Outlet />
    </div>
  );
}
