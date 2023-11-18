import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

import CloseIcon from "../../../assets/close.svg";

interface ModalMenuProps {
  navigationLinks: Record<string, string>;
  closeModal: () => void;
}

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const navVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ModalMenu({
  navigationLinks,
  closeModal,
}: ModalMenuProps) {
  return (
    <motion.div
      className="ModalMenu"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="close-menu" onClick={() => closeModal()}>
        Fermer
        <img src={CloseIcon} className="close-logo" alt="Close Menu Icon" />
      </div>
      <motion.ul className="modalNavigationLinks">
        {Object.entries(navigationLinks).map(([pageName, pageUrl]) => {
          return (
            <motion.li variants={navVariants}>
              <Link to={pageUrl}>{pageName}</Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
}
