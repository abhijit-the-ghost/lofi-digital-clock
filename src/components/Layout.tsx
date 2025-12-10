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
            className="flex flex-col lg:flex-row h-screen w-full overflow-hidden transition-all duration-700 ease-in-out relative"
            style={{ background: theme.gradient }}
        >
            <ParticlesBackground color={theme.colors.particle} />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col lg:flex-row w-full h-full items-center justify-center gap-12 lg:gap-24">
                {/* Left Section: Clock */}
                <div className="flex items-center justify-center">
                    <div
                        className="p-12 rounded-3xl shadow-2xl backdrop-blur-md transition-colors duration-500 border border-white/10"
                        style={{ backgroundColor: theme.colors.containerBg, color: theme.colors.text }}
                    >
                        {left}
                    </div>
                </div>

                {/* Right Section: Calendar */}
                <div className="flex items-center justify-center">
                    <div
                        className="p-8 rounded-3xl shadow-2xl backdrop-blur-md transition-colors duration-500 border border-white/10"
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
        </div>
    );
};

export default Layout;
