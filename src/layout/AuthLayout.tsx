import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section id="login">
      <div className="container min-h-screen flex justify-between items-center">
        <Outlet />
      </div>
    </section>
  );
};
export default AuthLayout;
