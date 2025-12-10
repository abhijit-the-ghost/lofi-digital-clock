import { useState } from "react";
import Layout from "./components/Layout";
import Clock from "./components/Clock";
import Calendar from "./components/Calendar";
import ThemeSelector from "./components/ThemeSelector";
import { themes } from "./data/themes";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  return (
    <Layout
      left={<Clock />}
      right={<Calendar />}
      theme={currentTheme}
      themeSelector={
        <ThemeSelector
          currentTheme={currentTheme}
          onThemeChange={setCurrentTheme}
        />
      }
    />
  );
};

export default App;
