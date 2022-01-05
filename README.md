# Private Notebook

## Demo

[https://alchemy-react-private-notebook.netlify.app](https://alchemy-react-private-notebook.netlify.app)

## Get Started

Use [this template](https://github.com/alchemycodelab/react-private-notebook) to get started.

### Learning Objectives

- Use private routes to enforce auth
- Redirect to an auth page if no user detected
- Retain URL if redirected by auth failure

### Description

You and your friend are working on the next big unicorn startup: a note taking app. Your friend has built all the CRUD features for notes, but asked for your help implementing authentication. Two big issues that need to be fixed: user registration and login don't currently do anything when the form is submitted, and anyone can view the notebook (i.e. by visiting one of the following paths: `/notes`, `/notes/:id`, `/notes/:id/edit`). These are the two bugs that you'll need to address.

You'll need to focus on two main areas:
- The `<PrivateRoute>` component right now is a standard route. What it needs is to redirect to the `/login` page if the user isn't signed in.
-  The `Auth` view has an incomplete `onSubmit` handler. It needs to either sign up or sign in a user by using the functions in `/src/services/users.js`. If signing in, and the sign in is successful, then the user's `id` and `email` should be set in the `UserContext`.

The [Redirect (Auth) Example](https://v5.reactrouter.com/web/example/auth-workflow) from the React Router docs will be helpful when implementing `<PrivateRoute>`.

### Acceptance Criteria

- Users are able to sign up for new accounts
- Users are able to sign in to existing accounts
- `/notes`, `/notes/:id`, and `/notes/:id/edit` redirect to the login screen if not signed in

### Rubric

| Task                                      | Points |
| ----------------------------------------- | ------ |
| `<PrivateRoute>` implementation completed | 5      |
| Sign up functionality implemented         | 2.5    |
| Sign In functionality implemented         | 2.5    |
