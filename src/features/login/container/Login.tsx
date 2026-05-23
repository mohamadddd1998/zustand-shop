import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl mx-auto overflow-hidden w-full max-w-sm">
      <div className="p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          ورود به حساب کاربری
        </h2>
        <div className="p-2 bg-gray-100 rounded-2xl space-y-1">
          <p>ایمیل : test@example.com </p>
          <p>پسورد : 123456 </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
