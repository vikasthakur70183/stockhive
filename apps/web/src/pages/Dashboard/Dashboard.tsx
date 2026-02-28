import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <p className={styles.subtitle}>
        Welcome back, {user?.name || "User"}.
      </p>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
}

export default Dashboard;
