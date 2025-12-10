import { themes } from "../data/themes";
import type { Theme } from "../data/themes";
import { Palette } from "lucide-react";

interface ThemeSelectorProps {
    currentTheme: Theme;
    onThemeChange: (theme: Theme) => void;
}

const ThemeSelector = ({ currentTheme, onThemeChange }: ThemeSelectorProps) => {
    return (
        <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle btn-ghost bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/10">
                <Palette size={24} />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100/80 backdrop-blur-xl rounded-box w-64 max-h-96 overflow-y-auto border border-white/10">
                <li className="menu-title text-base-content/70">Select Theme</li>
                {themes.map((theme) => (
                    <li key={theme.id}>
                        <button
                            onClick={() => {
                                onThemeChange(theme);
                                const elem = document.activeElement as HTMLElement;
                                if (elem) {
                                    elem.blur();
                                }
                            }}
                            className={`flex items-center gap-3 p-2 ${currentTheme.id === theme.id ? "active bg-base-content/10" : ""}`}
                        >
                            <div
                                className="w-10 h-10 rounded-full shadow-inner border border-white/20"
                                style={{ background: theme.gradient }}
                            />
                            <div className="flex flex-col items-start">
                                <span className="font-bold text-sm text-base-content">{theme.label}</span>
                                <span className="text-xs opacity-60 uppercase text-base-content">{theme.type}</span>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThemeSelector;
