import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import AuthButton from '../AuthButton/AuthButton';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import styles from './Header.css';

export default function Header() {
  const { user } = useUser();

  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <h1>My Notes</h1>
        </Link>
        <p className={styles.signInStatus}>
          {user?.email ? `Signed in as ${user?.email}` : 'Not Signed In'}
          <AuthButton />
        </p>
      </header>
      <Breadcrumbs className={styles.nav} />
    </>
  );
}
