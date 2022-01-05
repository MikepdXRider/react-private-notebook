import { createContext, useContext, useMemo, useState } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Is this just for initializing? 
  // OR... When setUser is called, is currentUser called again? 
  const currentUser = getUser();
  console.log(currentUser);
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
    );
  console.log(user);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export { UserContext, UserProvider, useUser };
