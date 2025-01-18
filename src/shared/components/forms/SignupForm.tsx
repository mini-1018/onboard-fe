"use client";
import { SignUpFormData, useSignUpForm } from "@/hooks/useFormValidate";
import Link from "next/link";
import Input from "@/shared/components/inputs/Input";
import InputError from "@/shared/components/inputs/InputError";
import InputLabel from "@/shared/components/inputs/InputLabel";
import Logo from "@/shared/components/Images/Logo";
import Button from "@/shared/components/buttons/Button";

export default function SignupForm() {
  const { register, handleSubmit, errors, isValid } = useSignUpForm();

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-y-[20px] h-screen">
      <Logo />
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[400px]">
          <InputLabel label="이메일" htmlFor="email" />
          <Input type="email" {...register("email")} variant="yellow" />
          {errors.email && (
            <InputError error={errors.email.message as string} />
          )}
        </div>
        <div>
          <InputLabel label="이름" htmlFor="name" />
          <Input type="text" {...register("name")} variant="yellow" />
          {errors.name && <InputError error={errors.name.message as string} />}
        </div>
        <div>
          <InputLabel label="비밀번호" htmlFor="password" />
          <Input type="password" {...register("password")} variant="yellow" />
          {errors.password && (
            <InputError error={errors.password.message as string} />
          )}
        </div>
        <div>
          <InputLabel label="비밀번호 확인" htmlFor="confirmPassword" />
          <Input
            type="password"
            {...register("confirmPassword")}
            variant="yellow"
          />
          {errors.confirmPassword && (
            <InputError error={errors.confirmPassword.message as string} />
          )}
        </div>
        <Button
          type="submit"
          disabled={!isValid}
          variant={isValid ? "primary" : "disabled"}
          size="wFull"
        >
          회원가입
        </Button>
        <p className="text-sm text-primary text-center">
          이미 회원이신가요?{" "}
          <Link href="/signin" className="text-primary underline font-bold">
            로그인
          </Link>
        </p>
      </form>
    </div>
  );
}
