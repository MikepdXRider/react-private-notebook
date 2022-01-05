import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { NoteProvider } from './context/NoteContext';
import { UserProvider } from './context/UserContext';
import ConfirmEmail from './views/Auth/ConfirmEmail';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import NoteDetail from './views/Notebook/NoteDetail';
import Notebook from './views/Notebook/Notebook';
import EditNote from './views/Notebook/EditNote';
import Header from './components/Layout/Header';
import styles from './App.css';

export default function App() {
  return (
    <UserProvider>
      <NoteProvider>
        <Router>
          <Header />
          <main className={styles.main}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Auth />
              </Route>
              <Route path="/register">
                <Auth isSigningUp />
              </Route>
              <Route path="/confirm-email">
                <ConfirmEmail />
              </Route>
              <PrivateRoute path="/notes/:id/edit">
                <EditNote />
              </PrivateRoute>
              <PrivateRoute path="/notes/:id">
                <NoteDetail />
              </PrivateRoute>
              <PrivateRoute exact path="/notes">
                <Notebook />
              </PrivateRoute>
            </Switch>
          </main>
        </Router>
      </NoteProvider>
    </UserProvider>
  );
}
