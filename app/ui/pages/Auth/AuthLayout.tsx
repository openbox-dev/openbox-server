import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div className="AuthLayout">
      <Outlet />
      <div>other side</div>
    </div>
  );
}
