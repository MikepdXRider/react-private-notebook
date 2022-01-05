import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

import styles from './UserForm.css';

export default function UserForm({
  className = '',
  label = 'Authenticate',
  onSubmit,
}) {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formState;

    try {
      if (!email || password.length < 8)
        throw new Error(
          'An email and password (with 8+ characters) are required.'
        );
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <fieldset className={styles.form}>
        <legend>{label}</legend>
        <section className={styles.formSection}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formState.email}
            className={styles.input}
            onChange={handleFormChange}
          />
        </section>
        <section className={styles.formSection}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            className={styles.input}
            onChange={handleFormChange}
          />
        </section>
        <button type="submit" disabled={loading}>
          {loading ? 'Authenticating...' : label}
        </button>
        {formError && <p>{formError}</p>}
      </fieldset>
    </form>
  );
}
