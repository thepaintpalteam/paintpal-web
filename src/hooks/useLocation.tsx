import { createContext, useContext, useState, useEffect, useMemo } from "react";

type LocationContextType = {
  location: "ng" | "uk";
  setLocation: (location: "ng" | "uk") => void;
};

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export const LocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [location, setLocation] = useState<"ng" | "uk">(() => {
    return (localStorage.getItem("userLocation") as "ng" | "uk") || "ng";
  });

  useEffect(() => {
    localStorage.setItem("userLocation", location);
  }, [location]);

  const contextValue = useMemo(() => ({ location, setLocation }), [location]);

  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context)
    throw new Error("useLocation must be used within a LocationProvider");
  return context;
};
