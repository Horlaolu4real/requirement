"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  // const [info, setInfo] = useState([]);
  const [input, setInput] = useState("");
  const [countryCode] = useState("+234");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setInput(value);
  };

  const addButton = () => {
    if (input) {
      setInput("");
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main_header}>
          <h3>Sign up</h3>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className={styles.main_content}>
          <div className={styles.bet_king}>
            <h3 className={styles.first}>Welcome to Betking</h3>
            <div className={styles.para}>
              <p>Getting Started is easy</p>
              <p>Simply enter your Mobile Number below</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.space}>
            <div className={styles.input}>
              <div className={styles.country_code}>
                {" "}
                <label>Mobile</label>
                <div className={styles.border}>{countryCode}</div>
              </div>
              {/* <label>Mobile</label> */}
              <input
                id="phone"
                type="tel"
                value={input}
                placeholder="Mobile Number"
                onChange={handleChange}
                className={styles.input_table}
              />
            </div>
          </form>
          <Link href={"./sign"}>
            <div className={styles.footer}>
              <button className={styles.btn}>Next</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
