"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import eyes from "../../../public/eye-slash.svg";
import Image from "next/image";
import Link from "next/link";

export default function Sign() {
  const [email, setEmail] = useState({
    username: "",
    password: "",
  });
  const { username, password } = email;
  //   const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const submit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { email, value } = e.target;
    setEmail((prev) => ({
      ...prev,
      [email]: value,
    }));
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.desktop}>
          <div className={styles.header}>
            <p>Login</p>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className={styles.txt}>Welcome Back</div>
          <div className={styles.input_field}>
            <form className={styles.form} onChange={submit}>
              <div className={styles.input_1}>
                <label>Username or verified Mobile</label>
                <input
                  type="text"
                  id="text"
                  name="username"
                  //   value={username}
                  onChange={handleChange}
                  className={styles.log_input}
                  placeholder="Usename or verified Mobile"
                />
              </div>
              <div className={styles.input_2}>
                <label>Passworld</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  id="password"
                  //   value={password}
                  placeholder="......."
                  className={styles.log_input}
                  onChange={handleChange}
                />
                <Image
                  src={eyes}
                  alt="eye"
                  width={30}
                  className={styles.eye_image}
                  onClick={handleShow}
                />
              </div>
              <div className={styles.btn_content}>
                <div className={styles.btn_part}>
                  <p>Forget Password</p>
                </div>
                <div className={styles.btn}>
                  <button className={styles.but}>
                    <p>Log</p>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <br />
          <footer className={styles.footer_content}>
            <h3 className={styles.first}>Dont Have Account</h3>
            <p className={styles.reel}>
              If you don’t yet have an account, not to worry! You can create a
              new account in a few steps.
            </p>
            <Link href={"./login"}>
              <button type="submit" className={styles.btn}>
                Sign Up Today
              </button>
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
}
