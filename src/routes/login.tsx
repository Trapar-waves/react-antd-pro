import { ProForm, ProFormText } from "@ant-design/pro-components";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Login } from "../api/auth";
import { useAuthStore } from "../store/auth.store";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { updateToken } = useAuthStore();
  const { mutate, isPending } = useMutation({
    mutationFn: Login,
    mutationKey: ["login"],
    gcTime: 10,
    onSuccess: (data) => {
      if (data) {
        updateToken(data);
        navigate({ to: "/layout/welcome" }).then();
      }
    },
  });

  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen">
      <ProForm<{ username: string; password: string }>
        onFinish={mutate}
        loading={isPending}
      >
        <ProFormText
          required
          width="md"
          name="username"
          label="Username"
          placeholder="Please enter username"
          rules={[{ required: true, message: "username required" }]}
        />
        <ProFormText.Password
          width="md"
          name="password"
          label="Password"
          placeholder="Please enter password"
          rules={[{ required: true, message: "passwords required" }]}
        />
      </ProForm>
    </div>
  );
}
