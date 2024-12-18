import { useContext, createContext, useState } from "react"

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>();

function ThemeProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#FFF" : "#333",
        color: theme === "light" ? "#000" : "#FFF",
      }}
    >
      Cambiar tema
    </button>
  )
}

function ContextApi() {
  return (
    <>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
    </>
  )
}

export default ContextApi
