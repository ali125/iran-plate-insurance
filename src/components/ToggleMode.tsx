import React, { useContext } from "react";
import { AppContext } from "../provider/AppProvider";

const ToggleMode = () => {
  const { mode, onToggleMode } = useContext(AppContext);
  return (
    <button
      className="dark:bg-white bg-black dark:text-black text-white rounded-xl py-2 px-8 text-center"
      onClick={onToggleMode}
    >
      {mode}
    </button>
  );
};

export default ToggleMode;
