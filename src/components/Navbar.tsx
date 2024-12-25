"use client";
import React, { useState } from "react";
import { Menu } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <div className="relative max-w-48 flex items-center justify-center">
      <Navbardemo className="top-2" />
    </div>
  );
}

function Navbardemo({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  console.log(active);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <ul className="hidden md:flex justify-between space-x-5">
          <Button variant="link">
            <a href="#skills">Skills</a>
          </Button>
          <a href="#projects">
            <Button variant="link">Projects</Button>
          </a>
          <a href="#work">
            <Button variant="link">Work</Button>
          </a>
          <a href="#me">
            <Button variant="link">ME</Button>
          </a>
        </ul>

        <div className="md:hidden flex justify-center">
          <span className="text-lg font-semibold">Pawan Pandey</span>
        </div>
      </Menu>
    </div>
  );
}
