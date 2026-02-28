import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./AuthLayout.module.css";

const AuthLayout = () => {
  const location = useLocation();
  const previousPathRef = useRef(location.pathname);

  const previousPath = previousPathRef.current;
  const currentPath = location.pathname;

  let transitionClass = styles.fadeIn;
  if (previousPath === "/login" && currentPath === "/signup") {
    transitionClass = styles.flipForward;
  } else if (previousPath === "/signup" && currentPath === "/login") {
    transitionClass = styles.flipBackward;
  }

  useEffect(() => {
    previousPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <main className={styles.container}>
      <div className={styles.stage}>
        <div
          key={location.pathname}
          className={`${styles.panel} ${transitionClass}`}
        >
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
