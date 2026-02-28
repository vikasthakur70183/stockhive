import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Login.module.css";
import PasswordInput from "../../components/PasswordInput/PasswordInput";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const cleanEmail = email.trim().toLowerCase();
      await login(cleanEmail, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* LEFT SIDE */}
      <div className={styles.left}>
        <div className={styles.brand}>
          <img src="/logo.png" alt="StockHive" className={styles.logo} />
          <h1>StockHive</h1>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <div className={styles.formCard}>
          <h2>Log in to your account</h2>
          <p className={styles.subtitle}>
            Welcome back! Please enter your details.
          </p>

          {error && <div className={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              disabled={isLoading}
              required
            />

            <label>Password</label>
            <PasswordInput
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              disabled={isLoading}
              required
            />

            <div className={styles.options}>
              <label className={styles.remember}>
                <input type="checkbox" disabled={isLoading} />
                Remember for 30 days
              </label>

              <a href="#">Forgot password</a>
            </div>

            <button
              type="submit"
              className={styles.primaryBtn}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>

            <button type="button" className={styles.googleBtn} disabled={isLoading}>
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
              />
              Sign in with Google
            </button>
          </form>

          <p className={styles.switch}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
