import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to StockHive</h1>
      <p className={styles.subtitle}>Manage your inventory with confidence.</p>
      <div className={styles.actions}>
        <Link to="/login" className={styles.loginButton}>
          Login
        </Link>
        <Link to="/signup" className={styles.signupButton}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;
