import { useAuth } from "../hooks/useAuth";
import styles from "./Topbar.module.css";

function Topbar() {
  const { user } = useAuth();
  const initial = (user?.name || "U").charAt(0).toUpperCase();

  return (
    <header className={styles.topbar}>
      <label className={styles.searchWrap}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search product, supplier, order"
          className={styles.searchInput}
        />
      </label>

      <div className={styles.actions}>
        <button className={styles.iconButton} aria-label="Notifications">
          <BellIcon />
        </button>
        <div className={styles.avatar}>{initial}</div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
      <path d="M9 17a3 3 0 0 0 6 0" />
    </svg>
  );
}

export default Topbar;
