import { useEffect, useState } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // força um frame antes de animar
      requestAnimationFrame(() => {
        setAnimate(true);
      });
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.modal} ${animate ? styles.open : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose}>
          ✖
        </button>

        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
}
















































// import styles from "./Modal.module.css";

// type ModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   children: React.ReactNode;
// };

// export function Modal({ isOpen, onClose, title, children }: ModalProps) {
//   if (!isOpen) return null;

//   return (
//     <div className={styles.overlay} onClick={onClose}>
//       <div
//         className={`${styles.modal} ${styles.open}`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button className={styles.close} onClick={onClose}>
//           ✖
//         </button>

//         <h2 className={styles.title}>{title}</h2>
//         {children}
//       </div>
//     </div>
//   );
// }
