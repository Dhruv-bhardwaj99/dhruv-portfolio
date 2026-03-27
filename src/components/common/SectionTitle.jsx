import ShinyText from "../bits/ShinyText";
import { useTheme } from "../theme/ThemeProvider";

export default function SectionTitle({ text, className = "" }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ShinyText
      text={text}
      speed={2}
      delay={0}
      color={isDark ? "#ffffff" : "oklch(0.12 0.04 265)"}
      shineColor={isDark ? "oklch(0.82 0.16 200)" : "oklch(0.38 0.18 265)"}
      spread={100}
      direction="left"
      yoyo={false}
      pauseOnHover={false}
      disabled={false}
      className={["text-3xl font-extrabold tracking-tight", className].join(" ")}
    />
  );
}
