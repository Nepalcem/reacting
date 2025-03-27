import { FC, useState } from "react";

const ThemeToggle: FC = () => {
    const [currentTheme, setcurrentTheme] = useState<boolean>(false);

    const themeChange = () => {
        setcurrentTheme(!currentTheme);
    }

    return <>
        Currently Have {currentTheme ? "light" : "dark"} theme.
        
        <button type="button" onClick={themeChange}>Change Theme</button>
    </>;
};

export default ThemeToggle;