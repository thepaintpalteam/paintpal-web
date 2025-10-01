// SignupContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { UserRegistration } from "../type";


type SignupContextType = {
  data: Partial<UserRegistration>;
  updateData: (values: Partial<UserRegistration>) => void;
  reset: () => void;
};

const SignupContext = createContext<SignupContextType | null>(null);

export const SignupProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Partial<UserRegistration>>({});

  const updateData = (values: Partial<UserRegistration>) => {
    setData(prev => ({ ...prev, ...values }));
  };

  const reset = () => setData({});

  return (
    <SignupContext.Provider value={{ data, updateData, reset }}>
      {children}
    </SignupContext.Provider>
  );
};

export const useSignup = () => {
  const ctx = useContext(SignupContext);
  if (!ctx) throw new Error("useSignup must be used inside SignupProvider");
  return ctx;
};
