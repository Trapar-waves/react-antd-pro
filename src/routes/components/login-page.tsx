import { ProForm, ProFormText } from "@ant-design/pro-components";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Alert } from "antd";
import { Login } from "../../api/auth/index.ts";
import { useAuthStore } from "../../store/auth.store.ts";

const staticDemo = import.meta.env.PUBLIC_STATIC_API === "true";

export function LoginPage() {
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
      {staticDemo
        ? (
            <div className="absolute top-6 left-1/2 w-full max-w-md -translate-x-1/2 px-4">
              <Alert
                type="info"
                showIcon
                message="静态演示模式"
                description="登录与表格数据在浏览器内模拟，账号与密码均为 test。"
              />
            </div>
          )
        : null}
      <ProForm<{ username: string; password: string }>
        onFinish={mutate}
        loading={isPending}
        initialValues={{ username: "test", password: "test" }}
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
