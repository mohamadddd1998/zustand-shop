import { Loader } from "lucide-react";

const LoadingFallback = () => (
  <div className="mx-auto text-center">
    <Loader className="animate-spin text-primary" />
  </div>
);
export default LoadingFallback;
