
'use client'
import styles from "../../styles/register.module.css";
import Link from "next/link";
import { useState } from "react";
export default function Inscription() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas !");
      return;
    }

      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await res.json();
      if (res.status === 201) {
        setMessage('Votre compte a été créer !');
      } else {
        setMessage(data.message);
      }
    
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.container} id="container">
          <div
            className={`${styles["form-container"]} ${styles["sign-in-container"]}`}
          >
            <form onSubmit={handleSubmit}>
              <h1>Inscription</h1>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button className={styles.button} type="submit">
                S'inscrire
              </button>
             <div className={styles["bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-2 py-2"]} role="alert">   
             {message && <p className={styles.message}>{message}</p>}
             </div>
            </form>
          </div>
          <div className={styles["overlay-container"]}>
            <div className={styles.overlay}>
              <div className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`} >
                <p>Vous avez déjà un compte ?</p>
                <Link className={styles.link} href="connexion">
                  Connexion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
