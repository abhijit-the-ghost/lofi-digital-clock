export interface Theme {
    id: string;
    label: string;
    type: "lofi" | "anime";
    gradient: string;
    colors: {
        text: string;
        accent: string;
        containerBg: string;
        particle: string;
    };
}

export const themes: Theme[] = [
    // {
    //     id: "lofi-dark",
    //     label: "Lofi Dark",
    //     type: "lofi",
    //     gradient: "linear-gradient(to bottom right, #000000, #1a1a1a, #2d2d2d)",
    //     colors: {
    //         text: "#f5f5f5",
    //         accent: "#a78bfa",
    //         containerBg: "rgba(255, 255, 255, 0.05)",
    //         particle: "#ffffff",
    //     },
    // },
    {
        id: "arctic-morning",
        label: "Arctic Morning",
        type: "anime",
        gradient: "linear-gradient(to bottom right, #e0f2fe, #bae6fd, #7dd3fc)",
        colors: {
            text: "#0c4a6e", // Dark blue
            accent: "#0284c7",
            containerBg: "rgba(255, 255, 255, 0.4)",
            particle: "#0ea5e9",
        },
    },
    {
        id: "midnight-city",
        label: "Midnight City",
        type: "lofi",
        gradient: "linear-gradient(to bottom right, #172554, #1e3a8a, #1e40af)",
        colors: {
            text: "#bfdbfe", // Light blue
            accent: "#60a5fa",
            containerBg: "rgba(0, 0, 0, 0.3)", // Dark glass
            particle: "#60a5fa",
        },
    },
    {
        id: "sakura-season",
        label: "Sakura Season",
        type: "anime",
        gradient: "linear-gradient(to bottom right, #fce7f3, #fbcfe8, #f9a8d4)",
        colors: {
            text: "#831843", // Dark pink/red
            accent: "#db2777",
            containerBg: "rgba(255, 255, 255, 0.4)", // Light glass
            particle: "#db2777",
        },
    },

    {
        id: "matcha-latte",
        label: "Matcha Latte",
        type: "lofi",
        gradient: "linear-gradient(to bottom right, #dcfce7, #bbf7d0, #86efac)",
        colors: {
            text: "#14532d", // Dark green
            accent: "#166534",
            containerBg: "rgba(255, 255, 255, 0.4)",
            particle: "#15803d",
        },
    },
    {
        id: "sunset-drive",
        label: "Sunset Drive",
        type: "anime",
        gradient: "linear-gradient(to bottom right, #4c1d95, #7c3aed, #db2777)",
        colors: {
            text: "#ffffff",
            accent: "#f472b6",
            containerBg: "rgba(0, 0, 0, 0.2)",
            particle: "#f472b6",
        },
    },

];
