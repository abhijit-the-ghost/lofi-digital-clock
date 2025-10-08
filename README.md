# Lofi Digital Clock

A minimal, lofi-inspired digital clock built with React, TypeScript, Vite, Tailwind CSS, and DaisyUI. The clock features a smooth width transition when toggling between 12-hour and 24-hour formats, time-based themes (dawn, day, dusk, night) with natural gradients, stars, and a moon, and a calendar display. The design emphasizes a retro aesthetic with the VT323 pixel font and accessibility features for screen readers.

## Features

- **Dynamic Themes**: Automatically switches between dawn (5–7 AM), day (7 AM–5 PM), dusk (5–7 PM), and night (7 PM–5 AM) with natural gradients, stars, and a glowing moon.
- **Time Format Toggle**: Switch between 12-hour (with AM/PM) and 24-hour formats with a subtle `<span>` toggle and animated card width transition.
- **Calendar**: Displays the current date (e.g., "Wednesday, October 8, 2025") using `Intl.DateTimeFormat`.
- **Accessibility**: Includes ARIA labels, screen-reader text, and support for `prefers-reduced-motion`.

## Prerequisites

- **Node.js**: Version 22 or higher.
- **Yarn**: Package manager for installing dependencies.
- **Modern Browser**: Chrome, Firefox, Safari, or Edge for optimal rendering.

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:abhijit-the-ghost/lofi-digital-clock.git
   cd lofi-digital-clock
   ```

2. Install dependencies using Yarn:

   ```bash
   yarn
   ```

3. Ensure Node.js 22 is installed. Verify with:
   ```bash
   node --version
   ```

## Usage

1. Start the development server with Vite:

   ```bash
   yarn dev
   ```

   Open `http://localhost:5173` (or the port shown in the terminal) in your browser.

2. Build the project for production:

   ```bash
   yarn build
   ```

3. Preview the production build:
   ```bash
   yarn preview
   ```

## Customization

- **Themes**: Modify the `themeStyles` object in `src/Clock.tsx` to adjust gradients, text colors, or star opacity for dawn, day, dusk, and night.
- **Time Ranges**: Update the `getTheme` function in `src/Clock.tsx` to change the hour ranges for each theme (e.g., dawn from 5–7 AM to 4–6 AM).
- **Toggle Style**: Adjust the `<span>` toggle’s classes (e.g., `text-sm`, `hover:underline`) in `src/Clock.tsx` for a different look or animation.

## Dependencies

- **React**: JavaScript library for building the UI.
- **TypeScript**: Adds static types for better code reliability.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Tailwind plugin for pre-built components (e.g., `card`, `btn`).
- **VT323 Font**: Google Fonts pixel font for the lofi aesthetic.

## License

MIT License
