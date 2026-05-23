import { images } from "@/shared/constants/images";
import type { Favorite, Product } from "@/shared/types";
import clsx from "clsx";
import { Heart } from "lucide-react";
import { useFavorites, useProductsActions } from "../store/useProductsStore";
import { useUserLogin } from "@/features/login/store/useLoginStore";
import { useCartActions } from "@/features/cart/stroe/useCartSrore";

const ProductCard = (props: Product) => {
  const { title, priceLabel, image, id } = props;

  const user = useUserLogin();
  const favorites = useFavorites();
  const { toggleFavorite } = useProductsActions();
  const { addToCart } = useCartActions();

  const isFavorite = favorites.some(
    (favorite: Favorite) =>
      favorite.productId === id && favorite.userId === user?.id,
  );

  return (
    <div className="bg-primary rounded-2xl py-4 px-2 relative space-y-2">
      <button
        className={clsx(
          "absolute left-4 top-4 text-sm rounded-2xl cursor-pointer",
          isFavorite ? "text-red-500" : "text-white",
        )}
        onClick={() => toggleFavorite(id)}
      >
        <Heart />
      </button>
      <figure className="flex justify-center items-center py-2 before:bg-darkGray before:w-38 before:h-38 before:absolute before:rounded-full">
        <img src={images[image]} className="-rotate-15" width="280" />
      </figure>
      <div className="text-white flex flex-col items-center gap-y-3 text-sm mb-4">
        <h3>{title}</h3>
        <span>{priceLabel}</span>
      </div>
      <button
        className="bg-secondary w-full py-2 cursor-pointer"
        onClick={() => addToCart(id)}
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
};
export default ProductCard;
