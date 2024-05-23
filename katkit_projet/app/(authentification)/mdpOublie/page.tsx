import styles from "/home/annour/Bureau/katkit_projet/katkit/app/styles/register.module.css";
import Link from "next/link";

export default function () {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container} id="container">
          <div
            className={`${styles["form-container"]} ${styles["sign-in-container"]}`}
          >
            <form action="#">
              <h1>Problème de connexion ?</h1>
              <p>
                Entrez votre addresse e-mail et nous vous enverrons un lien pour
                récupérer votre compte
              </p>
              <input id="email" name="email" type="email" placeholder="Email" />
              <button className={styles.button} type="submit">
                Envoyer
              </button>
            </form>
          </div>
          <div className={styles["overlay-container"]}>
            <div className={styles.overlay}>
              <div
                className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
              >
                <p>Ou</p>
                <Link className={styles.link} href="/connexion">
                  Se connecter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
