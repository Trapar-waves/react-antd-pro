import {
  DrawerForm,
  LightFilter,
  LoginForm,
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  QueryFilter,
  StepsForm,
} from "@ant-design/pro-components";
import { Button, message, Space } from "antd";
import { useState } from "react";

const iconStyles = {
  color: "rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  fontSize: "24px",
  marginInlineStart: "16px",
  verticalAlign: "middle",
};

export default function ProFormExample() {
  const Components = {
    DrawerForm,
    LightFilter,
    LoginForm,
    ModalForm,
    ProForm,
    QueryFilter,
    StepsForm,
  };
  const [type, setType] = useState<keyof typeof Components>("ProForm");

  if (type === "StepsForm") {
    return (
      <>
        <ProFormRadio.Group
          fieldProps={{
            onChange: event => setType(event.target.value),
            value: type,
          }}
          options={[
            "LightFilter",
            "ProForm",
            "ModalForm",
            "DrawerForm",
            "QueryFilter",
            "StepsForm",
            "LoginForm",
          ]}
          radioType="button"
          style={{
            margin: 16,
          }}
        />
        <StepsForm
          onFinish={async (_values: any) => {
            await waitTime(2000);
            message.success("提交成功");
          }}
        >
          <StepsForm.StepForm title="第一步">
            <ProForm.Group>
              <ProFormText
                label="签约客户名称"
                name="name"
                placeholder="请输入名称"
                tooltip="最长为 24 位"
                width="md"
              />
              <ProFormText
                label="我方公司名称"
                name="company"
                placeholder="请输入名称"
                width="md"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText
                label="合同名称"
                name={["contract", "name"]}
                placeholder="请输入名称"
                width="md"
              />
              <ProFormDateRangePicker
                label="合同生效时间"
                name={["contract", "createTime"]}
                width="md"
              />
            </ProForm.Group>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="第二步">
            <ProForm.Group>
              <ProFormSelect
                label="合同约定生效方式"
                name="useMode"
                options={[
                  {
                    label: "盖章后生效",
                    value: "chapter",
                  },
                ]}
                readonly
                width="xs"
              />
              <ProFormSelect
                label="合同约定失效效方式"
                name="unusedMode"
                options={[
                  {
                    label: "履行完终止",
                    value: "time",
                  },
                ]}
                width="xs"
              />
            </ProForm.Group>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="第二步">
            <ProFormText label="主合同编号" name="id" width="sm" />
            <ProFormText
              disabled
              initialValue="xxxx项目"
              label="项目名称"
              name="project"
              width="md"
            />
            <ProFormText
              disabled
              initialValue="启途"
              label="商务经理"
              name="mangerName"
              width="xs"
            />
          </StepsForm.StepForm>
        </StepsForm>
      </>
    );
  }

  const FormComponents = Components[type as "LoginForm"];

  if (type === "LoginForm") {
    return (
      <>
        <ProFormRadio.Group
          fieldProps={{
            onChange: event => setType(event.target.value),
            value: type,
          }}
          options={[
            "LightFilter",
            "ProForm",
            "ModalForm",
            "DrawerForm",
            "QueryFilter",
            "StepsForm",
            "LoginForm",
          ]}
          radioType="button"
          style={{
            margin: 16,
          }}
        />
        <FormComponents
          actions={(
            <Space>
              其他登录方式
              <span className="icon-[ant-design--alipay-circle-outlined]" style={iconStyles} />
              <span className="icon-[ant-design--taobao-circle-outlined]" style={iconStyles} />
              <span className="icon-[ant-design--weibo-circle-outlined]" style={iconStyles} />
            </Space>
          )}
          subTitle="全球最大的代码托管平台"
          title="Github"
        >
          <ProFormText
            fieldProps={{
              prefix: <span className="icon-[ant-design--user-outlined]" />,
              size: "large",
            }}
            name="username"
            placeholder="用户名: admin or user"
            rules={[
              {
                message: "请输入用户名!",
                required: true,
              },
            ]}
          />
          <ProFormText.Password
            fieldProps={{
              prefix: <span className="icon-[ant-design--lock-outlined]" />,
              size: "large",
            }}
            name="password"
            placeholder="密码: ant.design"
            rules={[
              {
                message: "请输入密码！",
                required: true,
              },
            ]}
          />
        </FormComponents>
      </>
    );
  }

  return (
    <>
      <ProFormRadio.Group
        fieldProps={{
          onChange: event => setType(event.target.value),
          value: type,
        }}
        options={[
          "LightFilter",
          "ProForm",
          "ModalForm",
          "DrawerForm",
          "QueryFilter",
          "StepsForm",
          "LoginForm",
        ]}
        radioType="button"
        style={{
          margin: 16,
        }}
      />
      <div
        style={{
          margin: 24,
        }}
      >
        <FormComponents
          initialValues={{
            name: "蚂蚁设计有限公司",
            useMode: "chapter",
          }}
          // eslint-disable-next-line ts/ban-ts-comment
          // @ts-expect-error
          labelWidth="auto"
          onFinish={async (_values: any) => {
            await waitTime(2000);
            message.success("提交成功");
          }}
          trigger={(
            <Button type="primary">
              <span className="icon-[ant-design--plus-outlined]" />
              新建表单
            </Button>
          )}
        >
          <ProForm.Group>
            <ProFormText
              label="签约客户名称"
              name="name"
              placeholder="请输入名称"
              tooltip="最长为 24 位"
              width="md"
            />
            <ProFormText
              label="我方公司名称"
              name="company"
              placeholder="请输入名称"
              width="md"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              label="合同名称"
              name={["contract", "name"]}
              placeholder="请输入名称"
              width="md"
            />
            <ProFormDateRangePicker
              label="合同生效时间"
              name={["contract", "createTime"]}
              width="md"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              label="合同约定生效方式"
              name="useMode"
              options={[
                {
                  label: "盖章后生效",
                  value: "chapter",
                },
              ]}
              readonly
              width="xs"
            />
            <ProFormSelect
              label="合同约定失效效方式"
              name="unusedMode"
              options={[
                {
                  label: "履行完终止",
                  value: "time",
                },
              ]}
              width="xs"
            />
          </ProForm.Group>
          <ProFormText label="主合同编号" name="id" width="sm" />
          <ProFormText
            disabled
            initialValue="xxxx项目"
            label="项目名称"
            name="project"
            width="md"
          />
          <ProFormText
            disabled
            initialValue="启途"
            label="商务经理"
            name="mangerName"
            width="xs"
          />
        </FormComponents>
      </div>
    </>
  );
}

function waitTime(time: number = 100) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
