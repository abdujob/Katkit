import styles from "../../styles/register.module.css";
import Link from "next/link";

export default function Inscription() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container} id="container">
          <div
            className={`${styles["form-container"]} ${styles["sign-in-container"]}`}
          >
            <form action="#">
              <h1>Inscription</h1>
              <input id="email" name="email" type="email" placeholder="Email" />
              <input id="pseudo" name="pseudo" placeholder="pseudo" />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Mot de passe"
              />
              <input
                id="Confirm password"
                name="Confirm password"
                type="Confirm password"
                placeholder="Confirmer le mot de passe"
              />
              <button className={styles.button} type="submit">
                S'inscrire
              </button>
            </form>
          </div>
          <div className={styles["overlay-container"]}>
            <div className={styles.overlay}>
              <div
                className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
              >
                <p>Vous avez déjà un compte</p>
                <Link className={styles.link} href="connexion">
                  Connexion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
