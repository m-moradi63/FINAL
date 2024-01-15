import { Sidebar } from "../compunents/Sidebar.tsx";
import { usertype } from "../App.tsx";
import { Menu } from "../subcomponent/Menu.tsx";
import { Nav } from "../subcomponent/nav.tsx";
import { Reposit } from "../subcomponent/Repository.tsx";
import React from "react";

export function Repositories() {
  return (
    <div className=" w-[100%]   ">
      <div className="border-1 solid bg-gray-50 w-full">
      <Nav />
      <Menu />
      </div>
      <div className="flex box-border w-[1024px] m-auto mt-[1rem]  ">
        <Sidebar  />
        <Reposit />
      </div>
    </div>
  );
}
