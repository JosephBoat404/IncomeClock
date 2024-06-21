import React, { createContext, useState } from "react";

export const TimeContext = createContext();
export const SvgVisibilityContext = createContext();

export const TimeProvider = ({ children }) => {
  const [schedules, setSchedules] = useState([]);
  const [svgVisible, setSvgVisible] = useState(true);

  const addSchedule = (schedule) => {
    setSchedules((prevSchedules) => [...prevSchedules, schedule]);
    toggleSvgVisibility();
  };

  const toggleSvgVisibility = () => {
    setSvgVisible(schedules.length < 0);
  };

  return (
    <TimeContext.Provider value={{ schedules, addSchedule }}>
      <SvgVisibilityContext.Provider value={{ svgVisible, toggleSvgVisibility }}>
        {children}
      </SvgVisibilityContext.Provider>
    </TimeContext.Provider>
  );
};
