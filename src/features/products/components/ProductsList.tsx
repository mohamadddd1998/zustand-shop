import ProductCard from "./ProductCard";
import type { Product } from "@/shared/types";
import { useProducts } from "../store/useProductsStore";

const ProductsList = () => {
  const products = useProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product: Product, index: number) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};
export default ProductsList;
