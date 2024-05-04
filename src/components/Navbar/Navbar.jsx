import React from "react";
import styles from "../Navbar/Navbar.module.css";
import logo from "../../assets/Logo.png";

function Navbar() {
  const handleSignInClick = () => {
    alert("Signed In!"); // Show alert when button is clicked
  };

  return (
    <div className={styles.navbar}>
      {/* Logo  */}
      <div className={styles.logo}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      {/*Login Sign Up Buttons */}
      <div className={styles.button}>
        <div className={styles.signIn} onClick={handleSignInClick}>
          Sign in
        </div>
        <a href="/signup" className={styles.signUp}>
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Navbar;
