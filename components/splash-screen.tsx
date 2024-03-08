"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback, useRef } from "react";
import anime from "animejs";
import { appRoute } from "@/lib/path-name";

interface SplashScreenProps {
  readonly children?: React.ReactNode;
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const sloganRef = useRef<HTMLDivElement>(null);

  const handleBeforeUnload = useCallback(() => {
    localStorage.setItem("isReloading", "true");
  }, []);

  const animate = useCallback(() => {
    const loader = anime.timeline({
      complete: () => {
        setIsLoading(false);
        push(appRoute.home.router);
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

    // loader.add({
    //   targets: sloganRef.current,
    //   keyframes: [
    //     // up
    //     { translateY: -40 },
    //     { translateY: 0 },
    //     // left
    //     { translateX: -20 },
    //     { translateX: 0 },
    //     // right
    //     { translateX: 20 },
    //     { translateX: 0 },
    //     // down
    //     { translateY: 20 },
    //     { translateY: 0 },
    //   ],

    //   scale: {
    //     value: 1,
    //     duration: 1000,
    //     delay: 0,
    //     easing: "easeInOutQuad",
    //   },

    //   duration: 5000,
    //   easing: "easeOutElastic(1, .8)",
    //   loop: true,
    // });
  }, [push]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [handleBeforeUnload]);

  useEffect(() => {
    if (localStorage && localStorage.getItem("isReloading") === "true") {
      setIsLoading(true);
      localStorage.removeItem("isReloading");
    }
    animate();
  }, [animate]);

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
