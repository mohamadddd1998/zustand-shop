import type { CartItem } from "@/shared/types";
import { useCartActions, useCartItems } from "../stroe/useCartSrore";
import { Trash } from "lucide-react";

const CartTable = () => {
  const cartItems = useCartItems();
  const { deleteFromCart } = useCartActions();

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3">محصول</th>
            <th className="px-6 py-3 text-center">تعداد</th>
            <th className="px-6 py-3 text-right">قیمت</th>
            <th className="px-6 py-3 text-right"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {cartItems.length === 0 ? (
            <tr className="bg-white hover:bg-gray-50 transition-colors">
              <td
                className="px-6 py-4 font-medium text-gray-900 text-center"
                colSpan={4}
              >
                محصولی برای نمایش وجود ندارد.
              </td>
            </tr>
          ) : (
            cartItems.map((item: CartItem) => (
              <tr
                key={item.id}
                className="bg-white hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {item.product.title}
                </td>
                <td className="px-6 py-4 text-center">{item.quantity}</td>
                <td className="px-6 py-4 text-right">
                  {item.product.priceLabel}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    className="text-red-500 cursor-pointer"
                    onClick={() => deleteFromCart(item.productId)}
                  >
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot className="bg-gray-50 font-bold text-gray-900">
          <tr>
            <td className="px-6 py-4" colSpan={2}>
              جمع کل
            </td>
            <td className="px-6 py-4 text-right">
              {cartItems
                .reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0,
                )
                .toLocaleString()}
              {"  "}
              تومان
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default CartTable;
