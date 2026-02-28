import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Signup.module.css";
import PasswordInput from "../../components/PasswordInput/PasswordInput";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    // Validation
    if (!cleanName || !cleanEmail || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);

    try {
      await register(cleanName, cleanEmail, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again.",
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
          <h2>Create an account</h2>
          <p className={styles.subtitle}>
            Start managing your inventory today!
          </p>

          {error && <div className={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              disabled={isLoading}
              required
            />

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
              autoComplete="new-password"
              minLength={6}
              disabled={isLoading}
              required
            />

            <label>Confirm Password</label>
            <PasswordInput
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              minLength={6}
              disabled={isLoading}
              required
            />

            <button
              type="submit"
              className={styles.primaryBtn}
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Sign up"}
            </button>

            <button type="button" className={styles.googleBtn} disabled={isLoading}>
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
              />
              Sign up with Google
            </button>
          </form>

          <p className={styles.switch}>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
