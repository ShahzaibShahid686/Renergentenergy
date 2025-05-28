'use client';
import { AnimatedSection } from "./Animatedsection";  
export default function Section() {
  return (
    <main
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/PIC.webp')"  }}
    >
     
      <div className="absolute inset-0  bg-opacity-30 z-0" />

     
      <div className="relative z-10 w-full h-full">
        <AnimatedSection />
      </div>
    </main>
  );
}
