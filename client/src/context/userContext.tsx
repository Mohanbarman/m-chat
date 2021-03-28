import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({user: null});

export default function UserProvider(props: any) {
  const [user, setUser] = useState<UserType>();

  // Fetch user from localstorage
  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) setUser(JSON.parse(userString)); 
  }, []);

  // Update user each time on localstorage when it's state value is updated
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
      {...props}
    />
  );
}
