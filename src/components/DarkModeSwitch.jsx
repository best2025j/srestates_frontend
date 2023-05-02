"user client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import darkmode from "../../Assets/svg/Darkmode.svg";
import lightmode from "../../Assets/svg/Lightmode.svg";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <Image
            src={lightmode}
            alt="dark-mode"
            className="w-14 h-[3rem] md:w-12 md:h-10"
            onClick={() => setTheme("light")}
          />
        ) : (
          <Image
            src={darkmode}
            alt="dark-mode"
            className="w-14 h-[3rem] md:w-12 md:h-10"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};

export default DarkModeSwitch;
