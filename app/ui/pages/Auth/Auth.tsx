import { Outlet } from "@remix-run/react";

export default function Auth() {
  return (
    <div>
      auth
      <Outlet />
    </div>
  );
}
