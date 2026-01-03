import { Tickets } from "lucide-react";
import LoginButton from "../auth/login-button";
import { ModeToggle } from "../theme-toggle";

const Header = () => {
  return (
    <header className="w-full h-14 mx-auto px-4 sm:px-6 lg:px-8 flex items-center sticky top-0 bg-background shadow dark:shadow-slate-800 z-999">
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Tickets color="#ec003f" />{" "}
          <span>
            <span className="text-[#ec003f]">Next</span>Show
          </span>
        </div>

        <div className="flex items-center gap-4">
          <LoginButton />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
export default Header;
