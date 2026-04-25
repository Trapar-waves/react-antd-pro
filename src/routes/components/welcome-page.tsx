import { useNavigate } from "@tanstack/react-router";
import { Button } from "antd";
import { useAuthStore } from "../../store/auth.store.ts";

export function WelcomePage() {
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
