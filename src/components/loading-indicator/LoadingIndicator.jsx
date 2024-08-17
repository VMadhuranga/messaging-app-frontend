import { createPortal } from "react-dom";
import styles from "./LoadingIndicator.module.css";

export function LoadingIndicator() {
  return createPortal(
    <span className={styles.loader}></span>,
    document.getElementById("root"),
  );
}
