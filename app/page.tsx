"use client"

import { ThemeToogle } from "@/components/theme-toogle";
import Image from "next/image";



export default function Home() {
  return (
      <main>
        <div className="flex justify-center align-middle items-center m-10 space-x-2">
          <h1 className=" text-xl">CRUD Refresher</h1>
          <ThemeToogle/>
        </div>
        <div className="flex justify-center space-x-5">
          <p>Next JS</p>
          <p>Prisma</p>
          <p>Mongo DB</p>
          <p>shadcn/ui</p>
        </div>
        <div className="flex flex-col justify-center align-middle items-center m-10 space-x-2 text-xs text-justify">
          This Project is to refresh on the backend and database using numbers. Simply type the numbers in the input to see data appear below.
        </div>
        <div className="flex flex-col justify-center align-middle items-center m-10 space-x-3 text-lx text-justify">
          Input Numbers

        </div>
      </main>    
  );
}
