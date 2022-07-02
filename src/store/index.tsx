import { createContext, useState } from "react";

export const Context = createContext({});


export default function Provider({ children }: any) {
  const [user, setUser] = useState("");

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}
