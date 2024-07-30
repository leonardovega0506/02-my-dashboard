
import { CarCounter } from "@/shopping-cart";
import { useState } from "react";


export const metadata = {
  title: 'Shopping Cart',
  description: 'Un simple contador'
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en Carrito</span>
      <CarCounter value={20}/>
    </div>
  );
}