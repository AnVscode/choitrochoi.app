import { useEffect, useState } from "react";

type OperatingSystem = "Windows" | "MacOS" | "Ios" | "Android" | "Linux" | null;

export function useOS(): OperatingSystem {
  const [operatingSystem, setOperatingSystem] = useState<OperatingSystem>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    let os: OperatingSystem = null;

    if (userAgent.match(/Windows/i)) {
      os = "Windows";
    } else if (userAgent.match(/Macintosh|MacIntel|MacPPC|Mac68K/i)) {
      os = "MacOS";
    } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
      os = "Ios";
    } else if (userAgent.match(/Android/i)) {
      os = "Android";
    } else if (userAgent.match(/Linux/i)) {
      os = "Linux";
    }

    setOperatingSystem(os);
  }, []);

  return operatingSystem;
}
