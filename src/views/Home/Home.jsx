import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import styles from './Home.css';

import journal from '../../assets/images/journal.png';

export default function Home() {
  const auth = useUser();
  if (auth.user.email) return <Redirect to="/notes" />;

  return (
    <section className={styles.home}>
      <h1>Welcome to the notebook!</h1>
      <p>
        Please <Link to="/login">sign in</Link> to see your notes.
      </p>
      <img src={journal} alt="notebook image" />
    </section>
  );
}
