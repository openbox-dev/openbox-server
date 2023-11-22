import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div className="AuthLayout">
      <Outlet />
      <div className="infinite-boxes-container">other side</div>
    </div>
  );
}
