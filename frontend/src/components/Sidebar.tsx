// import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  // BarsIcon,
  HomeIcon,
  // UsersIcon,
  LogoIcon,
  StatsIcon,
  TicketIcon,
} from "../assets/Icons";

export function SideBar() {
  // const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  // const handleSideBar = () => {
  //   setIsSideBarOpen(!isSideBarOpen);
  // };
  return (
    <nav className="side-bar">
      <header className="side-bar-header">
        <div className="side-bar-logo">
          <LogoIcon />
        </div>
        <span>Ticket System</span>
      </header>

      <ul className="side-bar-content" id="side-bar-content-id">
        <li>
          <NavLink to="/home">
            <div id="active"></div>
            <section className="side-bar-icon-section">
              <HomeIcon />
              <span>Home</span>
            </section>
          </NavLink>
        </li>

        <li>
          <NavLink to="/tickets">
            <div id="active"></div>
            <section className="side-bar-icon-section">
              <TicketIcon />
              <span>My Tickets</span>
            </section>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats">
            <div id="active"></div>
            <section className="side-bar-icon-section">
              <StatsIcon />
              <span>Statistics</span>
            </section>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
