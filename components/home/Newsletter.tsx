"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(email.includes("@") ? "Inscription réussie." : "Veuillez entrer une adresse e-mail valide.");
  }

  return (
    <section className="newsletter-section section-space">
      <div className="container">
        <div className="newsletter-card">
          <p className="section-label">{"S'abonner à notre newsletter"}</p>
          <h2>{"Lisez nos articles réguliers sur l'admission à l'étranger, les visas et bien plus encore !"}</h2>
          <form onSubmit={subscribe}>
            <label>
              <Mail size={15} />
              <span className="sr-only">Votre adresse e-mail</span>
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <button className="button" type="submit">
              {"S'abonner"} <Send size={14} />
            </button>
          </form>
          {message && <p className="form-message">{message}</p>}
        </div>
      </div>
    </section>
  );
}
