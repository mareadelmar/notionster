"use client";
import { useState } from "react";
import Editor from "@/ui/editor";
import Menu from "./menu";
import LeftMenu from "@/ui/leftMenu";
import Footer from "@/ui/footer";

import ConfettiExplosion from "react-confetti-explosion";
import CONFETTI_COLORS from "@/ui/leftMenu/confetti-colors";

export default function Page() {
  const [confetti, setConfetti] = useState(false);

  return (
    <div
      className="relative flex min-h-screen flex-col items-center pt-5 sm:px-5 sm:pt-[calc(10vh)]"
      id="pdf"
    >
      {confetti && (
        <ConfettiExplosion
          onComplete={() => setConfetti(false)}
          colors={CONFETTI_COLORS}
        />
      )}
      <LeftMenu toggleConfetti={() => setConfetti(true)} />
      <Menu />
      <Editor />
      <Footer />
    </div>
  );
}
