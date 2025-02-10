import { FaSearch, FaBell } from "react-icons/fa";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="top-header">
      <div className="header-upper-part">
        <div className="search-container">
          <FaSearch />
          <input className="search" />
        </div>
        <div className="search-profile-container">
          <FaBell />
          <img
            src="https://i.pinimg.com/736x/69/10/26/6910269492d9f71e71e0446ad7e4ea0e.jpg"
            alt="pfp"
            className="pfp"
          />
          <p>
            <strong>Isac Costa</strong>
          </p>
        </div>
      </div>

      <div className="bottom-header-container">
        <img
          src="https://i.pinimg.com/736x/69/10/26/6910269492d9f71e71e0446ad7e4ea0e.jpg"
          alt="pfp"
          className="pfp-big"
        />
        <div className="texts-header">
          <p>Hi there,</p>
          <h1>Isac Costa (@zak)</h1>
        </div>
        <div className="button-header">
          <Link to="/create-book">New</Link>
          <Link to="/books">View</Link>
          <Link>Share</Link>
        </div>
      </div>
    </div>
  );
}
