"use client";
import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { useSplashScreen } from "@/store/splash-screen";
import Router from "next/router";

export default function SplashScreen() {
  const { setIsLoadingScreen, isLoadingScreen } = useSplashScreen();
  const sloganRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => {
        setIsLoadingScreen(false);
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
    const handleStart = () => {
      setIsLoadingScreen(true);
    };
    const handleComplete = () => {
      setIsLoadingScreen(false);
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleStart);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleStart);
    };
  }, [setIsLoadingScreen]);

  useEffect(() => {
    if (isLoadingScreen) {
      animate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-800">
      <div
        ref={sloganRef}
        className="flex h-[250px] w-[250px] items-center justify-center rounded-full bg-background p-16 text-center text-5xl shadow-2xl"
      >
        Beta
      </div>
    </div>
  );
}
