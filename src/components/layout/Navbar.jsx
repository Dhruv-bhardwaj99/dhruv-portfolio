import { useTheme } from "../theme/ThemeProvider";
import Dock from "../bits/Dock";
import ShinyText from "../bits/ShinyText";
import { FiMenu } from "react-icons/fi"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
// import { profile } from "../data/profile";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";
    const navItems = [
        { label: "Projects", href: "#projects", short: "P" },
        { label: "Skills", href: "#skills", short: "S" },
        { label: "Education", href: "#education", short: "Ed" },
        { label: "Experience", href: "#experience", short: "E" },
        { label: "Contact", href: "#contact", short: "C" },
    ];
    const mobItems = [
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Education", href: "#education" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
    ];

    const [open, setOpen] = useState(false);

    const handleNavClick = () => {
        setOpen(false);
    }
    return (
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-black/60">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
                {/* Mobile menu button */}
                <div className="flex items-center gap-3">
                    <div className="sm:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <button className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-foreground/5 dark:hover:bg-white/10"
                                    aria-label="Open menu">
                                    <FiMenu className="h-6 w-6" />
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-[80vw] p-0 bg-[var(--background)] text-[var(--foreground)]"
                            >
                                <div className="h-full p-6">
                                    <SheetHeader>
                                        <SheetTitle className="text-2xl font-semibold tracking-tight">
                                            Dhruv
                                        </SheetTitle>
                                    </SheetHeader>

                                    <div className="mt-6 space-y-4">
                                        {mobItems.map((item) => (
                                            <a key={item.href} href={item.href} className="block" onClick={handleNavClick}>
                                                <ShinyText
                                                    text={item.label}
                                                    className="text-lg font-semibold"
                                                    color={isDark ? "#ffffff" : "#000000"}
                                                    shineColor={isDark ? "oklch(0.82 0.16 200)" : "#ffffff"}
                                                />
                                            </a>
                                        ))}

                                        {/* <div className="pt-4 space-y-3">
                                            <a href={profile.links.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="block font-semibold"
                                                onClick={handleNavClick}
                                            >
                                                GitHub
                                            </a>

                                            <a href={profile.links.resume}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="block font-semibold"
                                                onClick={handleNavClick}
                                            >
                                                Resume
                                            </a>
                                        </div> */}
                                    </div>
                                </div>

                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                <a href="#top" className="hidden sm:inline text-lg sm:text-xl font-semibold tracking-tight">
                    Dhruv
                </a>

                {/* <div className="hidden items-center gap-6 sm:flex">
                    <a
                        className="text-sm text-muted-foreground hover:text-foreground"
                        href="#projects"
                    >
                        Projects
                    </a>
                    <a
                        className="text-sm text-muted-foreground hover:text-foreground"
                        href="#skills"
                    >
                        Skills
                    </a>
                    <a
                        className="text-sm text-muted-foreground hover:text-foreground"
                        href="#experience"
                    >
                        Experience
                    </a>
                    <a
                        className="text-sm text-muted-foreground hover:text-foreground"
                        href="#contact"
                    >
                        Contact
                    </a>
                </div> */}
                <div className="hidden sm:flex">
                    <Dock items={navItems} />
                </div>

                <div className="flex items-center gap-3">
                    {/* <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Light</span>
                        <Switch
                            checked={isDark}
                            onCheckedChange={(v) => setTheme(v ? "dark" : "light")}
                            aria-label="Toggle dark mode"
                            className={`
                                cursor-pointer
                                data-[state=checked]:bg-[oklch(0.98_0.01_255)]
                                data-[state=unchecked]:bg-slate-300
                                dark:data-[state=unchecked]:bg-slate-700
                                border border-border hover:cursor-pointer
                                `} />
                        <span className="text-xs text-muted-foreground">Dark</span>
                    </div> */}

                    <button
                        onClick={() => setTheme(isDark ? "light" : "dark")}
                        aria-label="Toggle theme"
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full transition-transform duration-200 ease-out hover:scale-110 hover:bg-foreground/5 dark:hover:bg-white/10 hover:cursor-pointer">
                        {isDark ? <FiSun className="h-5 w-5 transition-transform duration-200" /> : <GoMoon className="h-5 w-5 transition-transform duration-200" />}
                    </button>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;
