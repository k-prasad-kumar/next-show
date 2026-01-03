"use client";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const LogoutPage = () => {
  const router = useRouter();
  useEffect(() => {
    toast.success("Logged out Successfully");
    // router.push("/");
    setTimeout(() => router.push("/"), 100);
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner className="size-8 text-green-500 font-extralight" />
    </div>
  );
};

export default LogoutPage;
