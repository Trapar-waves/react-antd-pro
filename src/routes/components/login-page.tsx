import { ProForm, ProFormText } from "@ant-design/pro-components";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Alert } from "antd";
import { Login } from "../../api/auth/index.ts";
import { useAuthStore } from "../../store/auth.store.ts";

const isStaticDemo = import.meta.env.PUBLIC_STATIC_API === "true";

export function LoginPage() {
  const navigate = useNavigate();
  const { updateToken } = useAuthStore();
  const { isPending, mutate } = useMutation({
    gcTime: 10,
    mutationFn: Login,
    mutationKey: ["login"],
    onSuccess: (data) => {
      if (!data) {
        return;
      }

      updateToken(data);
      void navigate({ to: "/layout/welcome" });
    },
  });

  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen">
      {isStaticDemo
        ? (
            <div className="absolute top-6 left-1/2 w-full max-w-md -translate-x-1/2 px-4">
              <Alert
                description="登录与表格数据在浏览器内模拟，账号与密码均为 test。"
                message="静态演示模式"
                showIcon
                type="info"
              />
            </div>
          )
        : null}
      <ProForm<{ password: string; username: string }>
        initialValues={{ password: "test", username: "test" }}
        loading={isPending}
        onFinish={mutate}
      >
        <ProFormText
          label="Username"
          name="username"
          placeholder="Please enter username"
          required
          rules={[{ message: "username required", required: true }]}
          width="md"
        />
        <ProFormText.Password
          label="Password"
          name="password"
          placeholder="Please enter password"
          rules={[{ message: "passwords required", required: true }]}
          width="md"
        />
      </ProForm>
    </div>
  );
}
