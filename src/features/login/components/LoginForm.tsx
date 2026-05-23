import TextInput from "@/shared/components/text-input/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";
import { useLoginActions } from "../store/useLoginStore";
import { users } from "@/shared/constants/db";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("ایمیل الزامی است")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "فرمت ایمیل درست نیست" }),
  password: z
    .string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
    .nonempty("رمز عبور الزامی است"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const { login } = useLoginActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    const { email, password } = data;

    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (user) {
      toast.success("ورود با موفقیت انجام شده");
      login(user);
      return;
    }
    toast.error("چنین کاربری وجود ندارد");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register("email")}
        type="text"
        label="ایمیل"
        placeholder="example@domain.com"
        icon={<Mail className="h-5 w-5 text-gray-400" />}
        error={errors.email && errors.email.message}
      />
      <TextInput
        {...register("password")}
        label=" رمز عبور"
        placeholder="رمز عبور خود را وارد کنید"
        type="password"
        name="password"
        icon={<Lock className="h-5 w-5 text-gray-400" />}
        error={errors.password && errors.password.message}
      />

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-br from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          ورود
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
