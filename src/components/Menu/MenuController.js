import {useState} from "react";
import Menu from "./Menu";
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion"
import '../../assets/css/menu.css';

export default function MenuController() {
  const [open, setOpen] = useState(false);

  const handleMenuChange = () => {
    setOpen(curr => !curr);
  }

  return(
    <div id={"menu"} className={"absolute right-4 top-4 lg:right-8 lg:top-8 flex-col items-end"}>
      <Menu pressAction={handleMenuChange} />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
          >
            <motion.div
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              className={"menu-bg menu-row"}
            >
              <Link to={'/'}>
                Novo usuário
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: -80 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              className={"menu-bg menu-row"}
            >
              <Link to={'/usuarios'}>
                Usuários
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};