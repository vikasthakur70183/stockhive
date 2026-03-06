import type { ReactElement, ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import styles from "./Sidebar.module.css";

type NavItem = {
  label: string;
  to: string;
  icon: ReactElement;
};

const navItems: NavItem[] = [
  { label: "Dashboard", to: "/dashboard", icon: <HomeIcon /> },
  { label: "Inventory", to: "/inventory", icon: <InventoryIcon /> },
  { label: "Reports", to: "/reports", icon: <ReportsIcon /> },
  { label: "Suppliers", to: "/suppliers", icon: <SuppliersIcon /> },
  { label: "Orders", to: "/orders", icon: <OrdersIcon /> },
  { label: "Manage Store", to: "/manage-store", icon: <StoreIcon /> },
  { label: "Settings", to: "/settings", icon: <SettingsIcon /> },
];

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.brandIcon}>K</div>
        <p className={styles.brandText}>KANBAN</p>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
          >
            <span className={styles.iconWrap}>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button className={styles.logout} onClick={handleLogout}>
        <span className={styles.iconWrap}>
          <LogoutIcon />
        </span>
        <span>Log Out</span>
      </button>
    </aside>
  );
}

function BaseIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function HomeIcon() {
  return (
    <BaseIcon>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20h13V9.5" />
    </BaseIcon>
  );
}

function InventoryIcon() {
  return (
    <BaseIcon>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
      <path d="M7 4v16" />
    </BaseIcon>
  );
}

function ReportsIcon() {
  return (
    <BaseIcon>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="m8 16 3-4 3 2 4-6" />
    </BaseIcon>
  );
}

function SuppliersIcon() {
  return (
    <BaseIcon>
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </BaseIcon>
  );
}

function OrdersIcon() {
  return (
    <BaseIcon>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </BaseIcon>
  );
}

function StoreIcon() {
  return (
    <BaseIcon>
      <path d="M4 9h16" />
      <path d="M6 9V6h12v3" />
      <path d="M6 9v10h12V9" />
      <path d="M10 19v-5h4v5" />
    </BaseIcon>
  );
}

function SettingsIcon() {
  return (
    <BaseIcon>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.7-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.7H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.7 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2h.1a1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .7.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1v.1a1 1 0 0 0 .9.6H20a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.7Z" />
    </BaseIcon>
  );
}

function LogoutIcon() {
  return (
    <BaseIcon>
      <path d="M10 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
      <path d="M14 16l4-4-4-4" />
      <path d="M18 12H9" />
    </BaseIcon>
  );
}

export default Sidebar;
