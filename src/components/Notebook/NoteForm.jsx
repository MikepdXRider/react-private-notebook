import { useEffect, useState } from 'react';

import styles from './NoteForm.css';

export default function NoteForm({
  formLabel = 'Note Form',
  title = '',
  content = '',
  className = '',
  onSubmit,
}) {
  const [formState, setFormState] = useState({ title, content });

  useEffect(() => {
    if (title || content) setFormState({ title, content });
  }, [title, content]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(formState);
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <fieldset className={styles.form}>
        <legend>{formLabel}</legend>
        <section className={styles.formSection}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formState.title}
            className={styles.input}
            onChange={handleChange}
          />
        </section>
        <section className={styles.formSection}>
          <label htmlFor="content">Body</label>
          <textarea
            id="content"
            name="content"
            value={formState.content}
            className={styles.input}
            rows={7}
            onChange={handleChange}
          />
        </section>
        <button type="submit">Save</button>
      </fieldset>
    </form>
  );
}
