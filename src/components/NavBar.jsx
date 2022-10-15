import React from "react";
import "./NavBar.css";
import { slide as Menu } from "react-burger-menu";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  let location = useLocation();
  const homeActive = location.pathname === "/" ? "active-item" : "";
  const aboutActive = location.pathname === "/about" ? "active-item" : "";
  const skillsActive = location.pathname === "/skills" ? "active-item" : "";
  const projectsActive = location.pathname === "/projects" ? "active-item" : "";
  const contactActive = location.pathname === "/contact" ? "active-item" : "";

  return (
    <div>
      <Menu>
        <Link to="/" className={`menu-item ${homeActive}`}>
          Home
        </Link>
        <Link to="/about" className={`menu-item ${aboutActive}`}>
          About
        </Link>
        <Link to="/skills" className={`menu-item ${skillsActive}`}>
          Skills
        </Link>
        <Link to="/projects" className={`menu-item ${projectsActive}`}>
          Projects
        </Link>
        <Link to="/contact" className={`menu-item ${contactActive}`}>
          Contact
        </Link>
      </Menu>
    </div>
  );
}

// class NavBar extends Component {
//   render() {
//     return (
//       <Menu>
//         <NavLink
//           to="/"
//           className={(navData) =>
//             navData.isActive ? "menu-item active-item" : "menu-item"
//           }
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/about"
//           className={(navData) =>
//             navData.isActive ? "menu-item active-item" : "menu-item"
//           }
//         >
//           About
//         </NavLink>
//         <NavLink
//           to="/skills"
//           className={(navData) =>
//             navData.isActive ? "menu-item active-item" : "menu-item"
//           }
//         >
//           Skills
//         </NavLink>
//         <NavLink
//           to="/projects"
//           className={(navData) =>
//             navData.isActive ? "menu-item active-item" : "menu-item"
//           }
//         >
//           Projects
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className={(navData) =>
//             navData.isActive ? "menu-item active-item" : "menu-item"
//           }
//         >
//           Contact
//         </NavLink>
//       </Menu>
//     );
//   }
// }

export default NavBar;
