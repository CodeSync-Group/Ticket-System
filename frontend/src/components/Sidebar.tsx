import { useState } from "react";
import {
  BarsIcon,
  HomeIcon,
  StatsIcon,
  TicketIcon,
  UsersIcon,
} from "../assets/Icons";

export function SideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <div className={`side-bar ${isSideBarOpen ? "side-bar-open" : ""}`}>
        <div className="side-bar-logo" onClick={handleSideBar}>
          <BarsIcon />
        </div>
        {/* <hr /> */}
        <div className="side-bar-content">
          <a href="" title="Home">
            <HomeIcon />
            {isSideBarOpen && <span className="side-bar-text">Home</span>}
          </a>
          <a href="" title="My Tickets">
            <TicketIcon />
            {isSideBarOpen && <span className="side-bar-text">My Tickets</span>}
          </a>
          <a href="" title="Statistics">
            <StatsIcon />
            {isSideBarOpen && <span className="side-bar-text">Statistics</span>}
          </a>
          <a href="" title="Users">
            <UsersIcon />
            {isSideBarOpen && <span className="side-bar-text">Users</span>}
          </a>
        </div>
      </div>
    </>
  );
}
