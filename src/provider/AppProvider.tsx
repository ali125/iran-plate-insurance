import React, { createContext, useState, type PropsWithChildren } from "react";

type ModeType = "dark" | "light";

type AppAction = {
  mode: ModeType;
  onToggleMode: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<Partial<AppAction>>({});

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  let defaultMode: ModeType = "light";
  if (typeof window !== "undefined" && window?.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      defaultMode = "dark";
    } else {
      defaultMode = "light";
    }
  }
  const [mode, setMode] = useState<ModeType>(defaultMode);

  const onToggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <AppContext
      value={{
        mode,
        onToggleMode,
      }}
    >
      <main className={`p-5 ${mode} dark:bg-gray-500 bg-gray-100 h-dvh`}>
        {children}
      </main>
    </AppContext>
  );
};
