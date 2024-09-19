"use client";
import React, { useState } from "react";
import {  Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/toggle-button";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="relative max-w-48 flex items-center justify-center">
      <Navbardemo className="top-2" />
      
    </div>
  );
}

function Navbardemo({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl max-h-10 mx-auto z-50   ", className)}
    >
      <Menu setActive={setActive}>
        <ul className="flex justify-between space-x-5">
          <Button variant="link">
            <a href="#skills">Skills</a></Button>
            <a href="#projects"> <Button variant="link">Projects</Button></a>
           
            <Button variant="link">Contact</Button>
            <a href="#work"> <Button variant="link">ME</Button></a>
          
           

        </ul>
       
       
    
      </Menu>
    </div>
  );
}
