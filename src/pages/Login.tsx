import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { TbFidgetSpinner } from "react-icons/tb";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const [login, { data, error, isLoading }] = useLoginMutation();

  console.log("error", error);
  console.log("data", data);

  // onFinish function for submitting the form
  const onFinish = (values: { email: string; password: string }) => {
    console.log("Received values of form: ", values);
    login({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 border border-gray-200 rounded shadow-md">
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={onFinish}
        >
          {/* email */}
          <label>Email</label>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} type="email" placeholder="Email" />
          </Form.Item>

          {/* password */}
          <label>Password</label>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          {/* remember me and forget password */}
          {/* <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item> */}

          {/* login button */}
          <Form.Item>
            <Button block type="primary" htmlType="submit" disabled={isLoading}>
              {isLoading ? (
                <TbFidgetSpinner className="animate-spin" />
              ) : (
                "Log in"
              )}
            </Button>
            <p className="text-center mt-2">
              Don&apos;t have an account? <a href="">Register now!</a>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
