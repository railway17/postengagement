import { IconToggleOff, IconToggleOn } from "assets/svgs";
import useTheme from "../../utils/hooks/useTheme";

const ThemeToggler = () => {
    const { toggleTheme, theme } = useTheme();

    return (
        <label className="swap swap-rotate btn btn-circle btn-ghost hidden md:inline-grid">
            <input
                type="checkbox"
                value="synthwave"
                className="theme-controller"
                onChange={() => toggleTheme()}
                checked={theme === "winter" ? false : true}
            />
            <IconToggleOn className="swap-on" />
            <IconToggleOff className="swap-off" />      
        </label>
    );
}

export default ThemeToggler;