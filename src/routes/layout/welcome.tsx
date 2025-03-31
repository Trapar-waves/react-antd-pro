import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "antd";
import { useAuthStore } from "../../store/auth.store.ts";

export const Route = createFileRoute("/layout/welcome")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { updateToken } = useAuthStore();
  function handleLogout() {
    updateToken("");
    navigate({ to: "/login" }).then();
  }
  return (
    <div>
      <p>Hello "/admin/welcome"!</p>
      <Button onClick={handleLogout}>退出</Button>
    </div>
  );
}
