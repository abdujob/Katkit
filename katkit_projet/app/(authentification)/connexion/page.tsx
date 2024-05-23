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
              <h1>Connexion</h1>
              <input id="email" name="email" type="email" placeholder="Email" />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Mot de passe"
              />
              <button className={styles.button} type="submit">
                Se Connecter
              </button>
              <Link className={styles.link} href="/mdpOublie">
                Mot de passe oublié
              </Link>
            </form>
          </div>
          <div className={styles["overlay-container"]}>
            <div className={styles.overlay}>
              <div
                className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
              >
                <p>
                  Renseignez vos informations et commencez votre aventure avec
                  nous !
                </p>
                <Link className={styles.link} href="/inscription">
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
