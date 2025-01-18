"use client";
import { SignInFormData, useSignInForm } from "@/hooks/useFormValidate";
import Link from "next/link";
import Input from "@/shared/components/inputs/Input";
import InputError from "@/shared/components/inputs/InputError";
import InputLabel from "@/shared/components/inputs/InputLabel";
import Logo from "@/shared/components/Images/Logo";
import Button from "@/shared/components/buttons/Button";

export default function SigninForm({ isSignup = false }) {
  const { register, handleSubmit, errors, isValid } = useSignInForm();

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
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
