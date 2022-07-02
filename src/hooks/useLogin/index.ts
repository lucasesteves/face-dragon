import { useContext } from "react";
import { Context } from "../../store";
import { storeData } from "../../utils";

export const useLogin = () => {
  const { user, setUser } = useContext(Context) as any;

  const dispatch = (username: string) => {
    try {
      storeData(username);
      setUser(username);
    } catch (error) {}
  };

  return { user, setUser, dispatch };
};
