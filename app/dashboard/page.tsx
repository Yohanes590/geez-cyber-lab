"use client";
import LoadingScreen from "@/components/(same-component)/wait-screen";
import { UserCheck } from "@/lib/(authorization)/user-check";
import { useEffect } from "react";
export default function DashboardLoadingFunction() {
  useEffect(() => {
    UserCheck();
  }, []);
  return <LoadingScreen />;
}
