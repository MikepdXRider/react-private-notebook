import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';

export default function AuthButton({ className }) {
  const { user, setUser } = useUser();

  return (
    <>
      {user?.email ? (
        <button
          className={className}
          onClick={async () => {
            await signOutUser();
            setUser({});
          }}
        >
          Sign Out
        </button>
      ) : (
        <Link to="/login" className={className}>
          <button>Sign In</button>
        </Link>
      )}
    </>
  );
}
