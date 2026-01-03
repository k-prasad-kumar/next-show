"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { signout } from "@/lib/auth-actions";
import { Bolt, BookUser, LogOut, UserRound } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@supabase/supabase-js";

const LoginButton = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      console.log(user);
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    signout();
    setUser(null);
  };
  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar>
          <AvatarImage src={user?.user_metadata.avatar_url} />
          <AvatarFallback>
            <UserRound strokeWidth={1} />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-999 w-fit py-2">
        <DropdownMenuItem className="cursor-pointer px-4">
          Hi, {user?.user_metadata.full_name}
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer px-4">
          <BookUser /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer px-4">
          <Bolt /> Setting
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer px-4"
          onClick={handleLogout}
        >
          <LogOut /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Link href="/login" className="cursor-pointer">
      <Avatar>
        {/* <AvatarImage src={user?.user_metadata.avatar_url} /> */}
        <AvatarFallback>
          <UserRound strokeWidth={1} />
        </AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default LoginButton;
