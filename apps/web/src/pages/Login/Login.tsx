import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className={styles.container}>
      {/* LEFT SIDE */}
      <div className={styles.left}>
        <div className={styles.brand}>
          <img
            src="/logo.png"   // put your logo inside public folder
            alt="StockHive"
            className={styles.logo}
          />
          <h1>StockHive</h1>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <div className={styles.formCard}>
          <img
            src="/logo-small.png"
            alt="logo"
            className={styles.smallLogo}
          />

          <h2>Log in to your account</h2>
          <p className={styles.subtitle}>
            Welcome back! Please enter your details.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className={styles.options}>
              <label className={styles.remember}>
                <input type="checkbox" />
                Remember for 30 days
              </label>

              <a href="#">Forgot password</a>
            </div>

            <button type="submit" className={styles.primaryBtn}>
              Sign in
            </button>

            <button type="button" className={styles.googleBtn}>
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
              />
              Sign in with Google
            </button>
          </form>

          <p className={styles.switch}>
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
