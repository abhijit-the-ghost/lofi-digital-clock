import type { ReactNode } from "react";
import type { Theme } from "../data/themes";
import ParticlesBackground from "./ParticlesBackground";

interface LayoutProps {
    left: ReactNode;
    right: ReactNode;
    theme: Theme;
    themeSelector: ReactNode;
}

const Layout = ({ left, right, theme, themeSelector }: LayoutProps) => {
    return (
        <div
            className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden transition-all duration-700 ease-in-out relative"
            style={{ background: theme.gradient }}
        >
            <ParticlesBackground color={theme.colors.particle} />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col lg:flex-row w-full min-h-screen items-center justify-center gap-8 md:gap-12 lg:gap-24 p-4 pb-24 lg:pb-4">
                {/* Left Section: Clock */}
                <div className="flex items-center justify-center w-full lg:w-auto">
                    <div
                        className="p-6 md:p-12 rounded-3xl shadow-2xl backdrop-blur-md transition-colors duration-500 border border-white/10 w-full max-w-sm lg:max-w-none flex justify-center"
                        style={{ backgroundColor: theme.colors.containerBg, color: theme.colors.text }}
                    >
                        {left}
                    </div>
                </div>

                {/* Right Section: Calendar */}
                <div className="flex items-center justify-center w-full lg:w-auto">
                    <div
                        className="p-4 md:p-8 rounded-3xl shadow-2xl backdrop-blur-md transition-colors duration-500 border border-white/10 w-full max-w-sm lg:max-w-none"
                        style={{ backgroundColor: theme.colors.containerBg, color: theme.colors.text }}
                    >
                        {right}
                    </div>
                </div>
            </div>

            {/* Theme Selector (Absolute Position) */}
            <div className="absolute bottom-6 right-6 z-50">
                {themeSelector}
            </div>

            {/* GitHub Link (Bottom Center) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
                <a
                    href="https://github.com/abhijit-the-ghost/lofi-digital-clock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-[VT323] opacity-40 hover:opacity-100 transition-opacity tracking-widest uppercase"
                    style={{ color: theme.colors.text }}
                >
                    View on GitHub
                </a>
            </div>
        </div>
    );
};

export default Layout;
