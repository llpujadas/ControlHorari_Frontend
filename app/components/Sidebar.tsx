import clsx from "clsx";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import {
  MdAdminPanelSettings,
  MdDomain,
  MdLogin,
  MdLogout,
  MdOutlineAdminPanelSettings,
  MdOutlineDirectionsCar,
  MdOutlineDomain,
  MdOutlineEmergency,
  MdOutlineMedicalServices,
  MdOutlinePerson,
  MdPanTool,
} from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "@remix-run/react";

type GeneralItem = {
  label: string;
  icon: JSX.Element;
  linkTo: string;
};

type MenuItem = {
  title: string;
  collapsedIcon: JSX.Element;
  children: GeneralItem[];
};

const getMenuCollapsed = () => {
  if (typeof window !== "undefined") {
    const storedValue = window.localStorage.getItem("menuCollapsed");
    return storedValue === "true";
  }
  return false;
};

function Sidebar() {
  // HOOKS ==========================================================
  const location = useLocation();
  const [menuCollapsed, setMenuCollapsed] = useState(getMenuCollapsed);
  const ref = useRef(null);

  // CONSTS =========================================================
  const currentLocation = useMemo(
    () => location.pathname.slice(1),
    [location.pathname]
  );

  const generalItems: GeneralItem[] = [
    {
      label: "Inici",
      icon: <FiHome />,
      linkTo: "dashboard",
    },
    {
      label: "Serveis",
      icon: <MdOutlineMedicalServices />,
      linkTo: "services",
    },
    {
      label: "Indicatius",
      icon: <MdOutlineDirectionsCar />,
      linkTo: "indicatius",
    },
    {
      label: "Logout",
      icon: <MdLogout />,
      linkTo: "logout",
    },
  ];

  const adminItems: GeneralItem[] = [
    {
      label: "Gest. Usuaris",
      icon: <MdOutlinePerson />,
      linkTo: "admin/users",
    },
    {
      label: "Gest. Indicatius",
      icon: <MdOutlineEmergency />,
      linkTo: "admin/indicatius",
    },
  ];

  const menuItems: MenuItem[] = [
    {
      title: "General",
      collapsedIcon: <MdOutlineDomain />,
      children: generalItems,
    },
    {
      title: "Admin",
      collapsedIcon: <MdOutlineAdminPanelSettings />,
      children: adminItems,
    },
  ];

  // SIDE-EFFECTS ===================================================
  useEffect(() => {
    const storedValue = window.localStorage.getItem("menuCollapsed");
    if (storedValue !== null) {
      setMenuCollapsed(storedValue === "true");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "menuCollapsed",
        menuCollapsed ? "true" : "false"
      );
    }
  }, [menuCollapsed]);

  return (
    <AnimatePresence>
      <motion.div
        className="menu flex flex-col h-screen px-4 py-4 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l"
        animate={{ width: menuCollapsed ? "5rem" : "16rem" }}
        // transition={{ ease: "easeInOut"}}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        initial={false}
      >
        <div className="image-button flex items-center justify-between">
          {!menuCollapsed && (
            <Link to="/dashboard">
              <img
                className="w-16 h-16"
                src="/logo_portal_fitxades.png"
                alt=""
              />
            </Link>
          )}
          <motion.button
            animate={{ rotate: menuCollapsed ? 180 : 0 }}
            className="btn btn-circle color-accent flex items-center justify-center"
            onClick={() => setMenuCollapsed((prev) => !prev)}
          >
            <FiArrowLeft className="size-5" />
          </motion.button>
        </div>

        <div className="flex flex-col justify-between flex-1 pt-3">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item, index) => {
              return (
                <div
                  key={`${item.title}-${index}`}
                  ref={ref}
                  className={clsx("menu-element flex flex-col justify-center", menuCollapsed && "items-center")}
                >
                  {menuCollapsed ? item.collapsedIcon : <h1>{item.title}</h1>}
                  <div className="divider" />
                  <div className="flex flex-col gap-2">
                    {item.children.map((children) => {
                      return (
                        <Link
                          key={children.label}
                          className={clsx(
                            "flex items-center px-4 py-2 text-gray-700 rounded-md hover:translate-x-1 hover:color-accent transition-all",
                            currentLocation == children.linkTo
                              ? "translate-x-1 color-accent"
                              : "bg-gray-100",
                            menuCollapsed && "w-12"
                          )}
                          to={children.linkTo}
                        >
                          {children.icon}
                          {!menuCollapsed && (
                            <span className="px-4 font-medium">
                              {children.label}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* <a href="#" className="flex items-center px-4 -mx-2">
                        <img className="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                        <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">John Doe</span>
                    </a> */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default React.memo(Sidebar);
