import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className="navbar">
        <li className="">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "Home" ? "active" : ""}
          >
            Home
          </a>
        </li>
        <li className="">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "About" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li className="">
          <a
            href="#interests"
            onClick={() => handlePageChange("Interests")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "Interests" ? "active" : ""}
          >
            Interests
          </a>
        </li>
        <li className="">
          <a
            href="#work"
            onClick={() => handlePageChange("Work")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "Work" ? "active" : ""}
          >
            Work
          </a>
        </li>
        <li className="">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "Contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
        <li className="">
          <a
            href="#credits"
            onClick={() => handlePageChange("Credits")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "Credits" ? "active" : ""}
          >
            Credits
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
