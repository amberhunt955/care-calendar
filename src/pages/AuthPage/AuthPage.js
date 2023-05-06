import { useState } from "react";

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LogInForm/LogInForm";

import styles from "./AuthPage.module.css";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <section className={styles.introText}>
        <h1>Care Calendar</h1>
        <p>
          Stay connected by tracking the birthdays, anniversaries and special
          occasions of people you care about most.
        </p>
        <p>
          View a list of the current day's events and be reminded to reach out.
          Celebrate life's precious moments with ease and keep your
          relationships strong.
        </p>
      </section>

      <section className={styles.introForm}>
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "SIGN UP" : "LOG IN"}
        </h3>
        {showLogin ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
      </section>
    </main>
  );
}

export default AuthPage;
