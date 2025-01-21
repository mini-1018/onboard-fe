import { useMutation } from "@tanstack/react-query";
import { signup } from "@/entities/user/api/user";
import { toast } from "react-toastify";
import { SignUp } from "@/shared/types/user.type";
import { useRouter } from "next/navigation";

export const useSignupMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: SignUp) => {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("name", data.name);
      formData.append("password", data.password);
      formData.append("image", data.image);
      return signup(formData);
    },
    onSuccess: () => {
      toast.success("회원가입이 완료되었습니다.");
      router.push("/signin");
    },
    onError: () => {
      toast.error("회원가입에 실패했습니다.");
    },
  });
};
