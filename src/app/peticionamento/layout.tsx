import { ReactNode } from "react";

interface PeticionamentoLayoutProps {
  children: ReactNode;
}

export default function PeticionamentoLayout({ children }: PeticionamentoLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}