"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";
import { appRoute } from "@/lib/path-name";

interface SplashScreenProps {
  readonly children?: React.ReactNode;
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const sloganRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => {
        setIsLoading(false);
        router.push(appRoute.home.router);
      },
    });

    loader.add({
      targets: sloganRef.current,
      scale: [
        { value: 0.1, easing: "easeInOutQuad", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
    });
  };

  useEffect(() => {
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center bg-slate-800">
          <div
            ref={sloganRef}
            className="flex h-[250px] w-[250px] items-center justify-center rounded-full bg-background p-16 text-center text-5xl shadow-2xl"
          >
            Beta
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
