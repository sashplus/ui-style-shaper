import Logo from "@/components/Logo";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen gradient-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;