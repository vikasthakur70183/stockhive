import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>StockHive</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
