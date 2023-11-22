import { Outlet } from "@remix-run/react";
import InfiniteSlider from "./components/InfiniteBox";

export default function AuthLayout() {
  return (
    <div className="AuthLayout">
      <Outlet />
      <InfiniteSlider />
    </div>
  );
}
