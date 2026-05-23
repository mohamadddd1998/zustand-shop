import { LogOut } from "lucide-react";
import logo from "../shared/assets/images/logo.png";
import { useLoginActions } from "@/features/login/store/useLoginStore";
import Cart from "@/features/cart/container/Cart";
import { menu } from "@/shared/constants/db";

interface Menu {
  id: number;
  title: string;
  link: string;
  order: number;
  parentId: null | number;
}

const Header = () => {
  const { logout } = useLoginActions();
  return (
    <header className="container py-2 flex items-center text-sm">
      <div>
        <img src={logo} width={80} />
      </div>
      <nav className="mr-16 text-gray-500 hidden md:block">
        <ul className="flex gap-x-4">
          {menu.map((item: Menu, index: number) => (
            <li key={index}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mr-auto flex gap-x-2">
        <Cart />
        <button
          className="bg-gray-500 text-white p-2 rounded-lg mr-auto"
          onClick={logout}
        >
          <LogOut />
        </button>
      </div>
    </header>
  );
};
export default Header;
