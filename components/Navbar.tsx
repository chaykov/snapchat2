import React from "react";
import Image from "next/image";

import SnapchatLogo from "@/public/Snapchat_logo.svg";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { TbGridDots } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-screen px-10 py-4">
      {/* Col 1 */}
      <div className="flex items-center gap-2">
        <Image src={SnapchatLogo} alt="snapchat logo" width={50} height={50} />
        <Input type="text" placeholder="Search" className="rounded-full" />
      </div>

      {/* Col 2 */}
      <div>
        <Button variant="ghost">Stories</Button>
        <Button variant="ghost">Spotlight</Button>
        <Button variant="ghost">Chat</Button>
        <Button variant="ghost">Lenses</Button>
      </div>

      {/* Col 3 */}
      <div className="flex itesm-center gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full bg-white text-black"
        >
          <TbGridDots />
        </Button>
        <Button className="rounded-full">Snapchat Ads</Button>
        <Button className="rounded-full">Download</Button>
        <Button size="icon" className="rounded-full">
          <AiOutlineLogout size="18px" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
