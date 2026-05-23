import { Link } from "react-router-dom";

interface ErrorPageProps {
  code?: string;
  title?: string;
  message?: string;
}

const ErrorPage = ({
  code = '4/5xx',
  title = "خطایی رخ داده است",
  message = "خطایی رخ داده است",
}: ErrorPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-7xl font-extrabold text-gray-800 mb-4">{code}</h1>

        <h2 className="text-2xl font-semibold text-gray-700 mb-3">{title}</h2>

        <p className="text-gray-500 mb-8 leading-relaxed">{message}</p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            بازگشت به خانه
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            صفحه قبلی
          </button>
        </div>

        <div className="mt-10 text-sm text-gray-400">Error code: {code}</div>
      </div>
    </div>
  );
};

export default ErrorPage;
