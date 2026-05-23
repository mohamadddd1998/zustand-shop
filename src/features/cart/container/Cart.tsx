import { ShoppingBag } from "lucide-react";
import { useCartItems } from "../stroe/useCartSrore";
import { useState } from "react";
import Modal from "@/shared/components/modal";
import CartTable from "../components/CartTable";

const Cart = () => {
  const cartItems = useCartItems();
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  return (
    <>
      <Modal
        isOpen={isCartModalOpen}
        onClose={() => setCartModalOpen(false)}
        title="سبد خرید"
      >
        <CartTable />
      </Modal>
      <button
        className="bg-gray-500 text-white p-2 rounded-lg  relative"
        onClick={() => setCartModalOpen(true)}
      >
        <ShoppingBag />
        <span className="absolute -top-2 -right-2 bg-primary rounded-full flex justify-center items-center z-10 h-6 w-6">
          {cartItems.length}
        </span>
      </button>
    </>
  );
};
export default Cart;
