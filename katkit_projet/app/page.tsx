import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <div>
        <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
          <li style={{ marginRight: "10px" }}>Accueil</li>
          <li style={{ marginRight: "10px" }}>Abonnement</li>
          <li style={{ marginRight: "10px" }}>Thème</li>
          <li style={{ marginRight: "10px" }}>
            <Link href="/connexion"> Se Connecter</Link>
          </li>
          <li>
            <Link href="/inscription">S'inscrire</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}