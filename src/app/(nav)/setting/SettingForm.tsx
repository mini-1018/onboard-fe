"use client";
import { useState, useRef } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Button from "@/shared/components/buttons/Button";
import Input from "@/shared/components/inputs/Input";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "@/entities/user/api/useUserMutation";
import { toast } from "react-toastify";

export default function SettingForm() {
  const { data: session, update } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(session?.user.name || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateUserMutation = useUpdateUserMutation();
  const deleteUserMutation = useDeleteUserMutation();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && session?.user?.id) {
      updateUserMutation.mutate(
        { userId: session.user.id, image: file },
        {
          onSuccess: (updatedUser) => {
            update({
              ...session,
              user: { ...session?.user, image: updatedUser.image[0].url },
            });
            toast.success("이미지가 업데이트되었습니다.");
          },
          onError: () => {
            toast.error("이미지 업데이트에 실패했습니다.");
          },
        }
      );
    }
  };

  const handleNameUpdate = async () => {
    if (session?.user?.id) {
      updateUserMutation.mutate(
        { userId: session.user.id, name: newName },
        {
          onSuccess: async (updatedUser) => {
            setIsEditing(false);
            update({
              ...session,
              user: {
                ...session?.user,
                name: updatedUser.name,
              },
            });
            toast.success("이름이 변경되었습니다.");
          },
          onError: () => {
            toast.error("이름 변경에 실패했습니다.");
          },
        }
      );
    }
  };

  const handleDeleteUser = async () => {
    if (session?.user?.id) {
      deleteUserMutation.mutate(
        { userId: session.user.id },
        {
          onSuccess: () => {
            signOut({ callbackUrl: "/" });
            toast.success("회원탈퇴가 완료되었습니다.");
          },
          onError: () => {
            toast.error("회원탈퇴에 실패했습니다.");
          },
        }
      );
    }
  };

  return (
    <div className="flex items-start gap-20 w-full justify-center h-screen mt-20">
      <div className="flex items-center gap-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 relative rounded-full">
            <Image
              src={session?.user.image || ""}
              alt="profile"
              fill
              className="rounded-full"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              이미지 변경
            </Button>
          </div>
        </div>

        <div className="h-40 border-l border-black" />

        <div className="flex flex-col items-center gap-2">
          {isEditing ? (
            <>
              <Input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <Button onClick={handleNameUpdate}>저장</Button>
            </>
          ) : (
            <>
              <div>{session?.user.name}</div>
              <Button onClick={() => setIsEditing(true)}>이름 변경</Button>
            </>
          )}
        </div>
      </div>
      <Button onClick={handleDeleteUser}>회원 탈퇴</Button>
    </div>
  );
}
