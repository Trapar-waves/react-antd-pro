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
  marginInlineStart: "16px",
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "24px",
  verticalAlign: "middle",
  cursor: "pointer",
};

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default function ProFormExample() {
  const Components = {
    ProForm,
    ModalForm,
    DrawerForm,
    QueryFilter,
    LightFilter,
    StepsForm,
    LoginForm,
  };
  const [type, setType] = useState<keyof typeof Components>("ProForm");

  if (type === "StepsForm") {
    return (
      <>
        <ProFormRadio.Group
          style={{
            margin: 16,
          }}
          radioType="button"
          fieldProps={{
            value: type,
            onChange: e => setType(e.target.value),
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
                width="md"
                name="name"
                label="签约客户名称"
                tooltip="最长为 24 位"
                placeholder="请输入名称"
              />
              <ProFormText
                width="md"
                name="company"
                label="我方公司名称"
                placeholder="请输入名称"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText
                name={["contract", "name"]}
                width="md"
                label="合同名称"
                placeholder="请输入名称"
              />
              <ProFormDateRangePicker
                width="md"
                name={["contract", "createTime"]}
                label="合同生效时间"
              />
            </ProForm.Group>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="第二步">
            <ProForm.Group>
              <ProFormSelect
                options={[
                  {
                    value: "chapter",
                    label: "盖章后生效",
                  },
                ]}
                readonly
                width="xs"
                name="useMode"
                label="合同约定生效方式"
              />
              <ProFormSelect
                width="xs"
                options={[
                  {
                    value: "time",
                    label: "履行完终止",
                  },
                ]}
                name="unusedMode"
                label="合同约定失效效方式"
              />
            </ProForm.Group>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="第二步">
            <ProFormText width="sm" name="id" label="主合同编号" />
            <ProFormText
              name="project"
              width="md"
              disabled
              label="项目名称"
              initialValue="xxxx项目"
            />
            <ProFormText
              width="xs"
              name="mangerName"
              disabled
              label="商务经理"
              initialValue="启途"
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
          style={{
            margin: 16,
          }}
          radioType="button"
          fieldProps={{
            value: type,
            onChange: e => setType(e.target.value),
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
        />
        <FormComponents
          title="Github"
          subTitle="全球最大的代码托管平台"
          actions={(
            <Space>
              其他登录方式
              <span className="icon-[ant-design--alipay-circle-outlined]" style={iconStyles} />
              <span className="icon-[ant-design--taobao-circle-outlined]" style={iconStyles} />
              <span className="icon-[ant-design--weibo-circle-outlined]" style={iconStyles} />
            </Space>
          )}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: "large",
              prefix: <span className="icon-[ant-design--user-outlined]" />,
            }}
            placeholder="用户名: admin or user"
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: "large",
              prefix: <span className="icon-[ant-design--lock-outlined]" />,
            }}
            placeholder="密码: ant.design"
            rules={[
              {
                required: true,
                message: "请输入密码！",
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
        style={{
          margin: 16,
        }}
        radioType="button"
        fieldProps={{
          value: type,
          onChange: e => setType(e.target.value),
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
      />
      <div
        style={{
          margin: 24,
        }}
      >
        <FormComponents
          // eslint-disable-next-line ts/ban-ts-comment
          // @ts-expect-error
          labelWidth="auto"
          trigger={(
            <Button type="primary">
              <span className="icon-[ant-design--plus-outlined]" />
              新建表单
            </Button>
          )}
          onFinish={async (_values: any) => {
            await waitTime(2000);
            message.success("提交成功");
          }}
          initialValues={{
            name: "蚂蚁设计有限公司",
            useMode: "chapter",
          }}
        >
          <ProForm.Group>
            <ProFormText
              width="md"
              name="name"
              label="签约客户名称"
              tooltip="最长为 24 位"
              placeholder="请输入名称"
            />
            <ProFormText
              width="md"
              name="company"
              label="我方公司名称"
              placeholder="请输入名称"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              name={["contract", "name"]}
              width="md"
              label="合同名称"
              placeholder="请输入名称"
            />
            <ProFormDateRangePicker
              width="md"
              name={["contract", "createTime"]}
              label="合同生效时间"
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormSelect
              options={[
                {
                  value: "chapter",
                  label: "盖章后生效",
                },
              ]}
              readonly
              width="xs"
              name="useMode"
              label="合同约定生效方式"
            />
            <ProFormSelect
              width="xs"
              options={[
                {
                  value: "time",
                  label: "履行完终止",
                },
              ]}
              name="unusedMode"
              label="合同约定失效效方式"
            />
          </ProForm.Group>
          <ProFormText width="sm" name="id" label="主合同编号" />
          <ProFormText
            name="project"
            width="md"
            disabled
            label="项目名称"
            initialValue="xxxx项目"
          />
          <ProFormText
            width="xs"
            name="mangerName"
            disabled
            label="商务经理"
            initialValue="启途"
          />
        </FormComponents>
      </div>
    </>
  );
};
