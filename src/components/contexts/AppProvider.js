import { createContext, useState } from "react";

// khởi tạo context API
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isShowUerInfo, setIsShowUserInfo] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isShowUerInfo,
        setIsShowUserInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
