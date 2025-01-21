"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useDrawerMenubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    // 뒤로 가기 동작 실행
    router.back();
  };

  const selectMenu = async (nextPage: string) => {
    router.back();
    setTimeout(() => {
      router.push(nextPage);
    }, 10);
  };

  return {
    isOpen,
    setIsOpen,
    toggleDrawer,
    selectMenu
  }
}