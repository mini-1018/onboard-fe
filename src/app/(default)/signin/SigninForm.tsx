"use client";
import { SignInFormData, useSignInForm } from "@/hooks/useFormValidate";
import Link from "next/link";
import Input from "@/shared/components/inputs/Input";
import InputError from "@/shared/components/inputs/InputError";
import InputLabel from "@/shared/components/inputs/InputLabel";
import Logo from "@/shared/components/Images/Logo";
import Button from "@/shared/components/buttons/Button";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SigninForm({
  isSignup = false,
  setIsOpen,
}: {
  isSignup?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}) {
  const router = useRouter();
  const { register, handleSubmit, errors, isValid } = useSignInForm();

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (result?.ok) {
        toast.success("로그인이 완료되었습니다.");
        router.push("/posts");
        setIsOpen && setIsOpen(false);
      } else {
        toast.error("이메일 또는 비밀번호를 확인해주세요.");
      }
    } catch (error) {
      toast.error("이메일 또는 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div
      className={
        isSignup
          ? "flex flex-col items-center justify-center gap-y-[20px] h-screen"
          : ""
      }
    >
      <Logo />
      <form
        className={isSignup ? "space-y-4 w-[400px]" : "space-y-4"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <InputLabel label="이메일" htmlFor="email" />
          <Input type="email" {...register("email")} variant="yellow" />
          {errors.email && (
            <InputError error={errors.email.message as string} />
          )}
        </div>
        <div>
          <InputLabel label="비밀번호" htmlFor="password" />
          <Input type="password" {...register("password")} variant="yellow" />
          {errors.password && (
            <InputError error={errors.password.message as string} />
          )}
        </div>
        <Button
          type="submit"
          disabled={!isValid}
          variant={isValid ? "primary" : "disabled"}
          size="wFull"
        >
          로그인
        </Button>
        <p className="text-sm text-primary text-center">
          아직 회원이 아니신가요?{" "}
          <Link href="/signup" className="text-primary underline font-bold">
            회원가입
          </Link>
        </p>
      </form>
    </div>
  );
}
