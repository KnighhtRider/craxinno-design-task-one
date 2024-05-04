import React, { useState } from "react";
import styles from "../Form/Form.module.css";
import eyeIcon from "../../../assets/eye-off.png";
import eyeOnIcon from '../../../assets/eye-on.png'

function Form() {
  const [showPassword, setShowPassword] = useState(false);


  const handleRegisterClick = () => {
    alert('Registered!'); // Show alert when button is clicked
  };

  const handleSignInClick = () => {
    alert('Signed In!'); // Show alert when button is clicked
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.illustration}>
      <div className={styles.frame}>
        <div className={styles.createAcc}>Create Your Account</div>

        {/* Form Input Component */}
        <div className={styles.form}>
          <div className={styles.name}>
            <input
              type="text"
              className={styles.inpName}
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.email}>
            <input
              type="email"
              className={styles.inpEmail}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.password}>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.inpPassword}
              placeholder="Password"
            />
            <img
              className={styles.eyeIcon}
              src={showPassword ? eyeOnIcon : eyeIcon}
              width={30}
              alt="Toggle Password Visibility"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>

        {/* Action like Register button and Sign in */}
        <div className={styles.action}>
          <p className={styles.privacyText}>
            By Clicking “Register” you agree{" "}
            <span>
              <a href="">Privacy Policy</a>
            </span>
          </p>

          <button className={styles.button} onClick={handleRegisterClick}>Register</button>

          <div className={styles.alreadyText}>
            <p>
              Already have an account? <a href="" onClick={handleSignInClick}>Sign In</a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.textureBG}>
        <div className={styles.background}>
          <div className={styles.rectangle_06}></div>
        </div>
      </div>
    </div>
  );
}

export default Form;
