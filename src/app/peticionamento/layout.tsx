import { ReactNode } from "react";
import SideBar from "./SideBar/SideBar";

interface PeticionamentoLayoutProps {
  children: ReactNode;
}

export default function PeticionamentoLayout({ children }: PeticionamentoLayoutProps) {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen">
        <SideBar />
      </div>
      <div className="flex flex-col flex-1 ml-[largura-do-sidebar]">
        {children}
      </div>
    </div>
  )
}