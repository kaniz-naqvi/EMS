import React from "react";
import { H1, H3 } from "@/components/Atoms/Shared/headings";
import { Form, Checkbox, Card } from "antd";
import Button from "@/components/Atoms/Buttons/Buttons"; // custom button
import InputComponent from "@/components/Atoms/Shared/Input"; // custom input
import { Link } from "react-router-dom";

const Login = ({ theme }) => {
  const ghost = theme?.ghostColor;

  const onFinish = (values) => {
    console.log("Login form submitted:", values);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <H1 className="text-center mt-5 mb-6">WellCome Back</H1>

      <Card className="w-full max-w-md rounded-2xl shadow-md">
        <H3 className="text-center mb-6">Sign in to your account</H3>

        {/* Use AntD Form so validation works */}
        <Form
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {/* Email */}
          
            <InputComponent
              label="Email"
              type="text"
              icon="profile"
              placeholder="name@example.com"
              required
            />

          {/* Password */}
          
            <InputComponent
              label="Password"
              type="password"
              icon="lock"
              placeholder="Your password"
              required
            />

          {/* Remember Me + Forgot Password */}
          <Form.Item className="flex items-center justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to="/">Forgot password?</Link>
          </Form.Item>

          {/* Submit Button */}
            <Button
              color={ghost}
              className="w-full lg:w-auto"
              type="submit" // tells AntD Form this submits
            >
              Sign in
            </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
