"use client";
import React, { useState } from "react";
import {  Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbardemo className="top-2" />
      
    </div>
  );
}

function Navbardemo({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50 text-black", className)}
    >
      <Menu setActive={setActive}>
        <ul className="flex justify-between space-x-5">
            <li>About me</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>ME</li>
        </ul>
       
       
    
      </Menu>
    </div>
  );
}
