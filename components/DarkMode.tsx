import { useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import style from "../styles/darkmode.module.css";

import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkMode() {
  var [darkmode, setDarkMode] = useState(false);
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <div
      className={style.darkmode}
      onClick={() => {
        if (isDark) setTheme("light");
        else setTheme("dark");
      }}
    >
      <div
        className={style.icon}
        style={{
          transform: `translateY(${isDark ? "-55px" : "-10px"})`,
        }}
      >
        <FaSun size="22px" />
      </div>
      <div
        className={style.icon}
        style={{
          transform: `translateY(${isDark ? "-55px" : "-10px"})`,
        }}
      >
        <FaMoon size="22px" />
      </div>
    </div>
  );
}
