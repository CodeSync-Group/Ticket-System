import { useState } from "react";
import { SunIcon, MoonIcon } from "../assets/Icons";

export function ThemeButton(): JSX.Element {
  const [showSun, setShowSun] = useState<boolean>(true);
  const [animate, setAnimate] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setAnimate(true); // Activar la animación
    setShowSun(!showSun); // Cambiar el estado del sol y la luna
    setTimeout(() => {
      setAnimate(false); // Desactivar la animación después de un tiempo para permitir la siguiente animación
    }, 1000); // Ajusta el tiempo según la duración de tu animación en CSS
  };

  return (
    <button
      className={`theme-button ${animate ? "animate" : ""}`}
      onClick={toggleTheme}
    >
      <div className={`icon ${showSun ? "sun" : "moon"}`}>
        {showSun ? <SunIcon /> : <MoonIcon />}
      </div>
    </button>
  );
}
