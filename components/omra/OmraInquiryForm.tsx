"use client";

import { useState } from "react";
import { Send, Check, ShieldCheck, BookOpen, Award } from "lucide-react";

interface OmraPackage {
  id: string;
  name: string;
}

interface OmraInquiryFormProps {
  packages: OmraPackage[];
  selectedFormula: string;
  setSelectedFormula: (id: string) => void;
}

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  pilgrims: "1",
  departureMonth: "Octobre 2026",
  notes: ""
};

export function OmraInquiryForm({ packages, selectedFormula, setSelectedFormula }: OmraInquiryFormProps) {
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Veuillez remplir tous les champs obligatoires (Nom, Email, Téléphone).");
      return;
    }
    setSubmitted(true);
  };

  const activeFormulaObj = packages.find((p) => p.id === selectedFormula) || packages[0];
  const activeTitle = activeFormulaObj ? activeFormulaObj.name : "";

  return (
    <section className="inquiry-section" id="omra-inquiry-section" style={{ borderTop: "none" }}>
      <div className="container">
        <div className="inquiry-grid">
          {/* Left Col - Benefits */}
          <div className="inquiry-info">
            <span className="section-label" style={{ color: "#047857" }}>Dossier & Devis</span>
            <h2>Réservez ma place</h2>
            <p>
              Afin de garantir votre vol direct et vos réservations d&apos;hôtel dans les meilleures conditions, nous vous conseillons d&apos;effectuer vos demandes d&apos;inscription le plus tôt possible.
            </p>

            <div className="inquiry-benefits">
              <div className="inquiry-benefit-item">
                <div className="inquiry-benefit-icon" style={{ background: "rgba(4, 120, 87, 0.08)", color: "#047857" }}>
                  <ShieldCheck size={18} />
                </div>
                <div className="inquiry-benefit-text">
                  <h4>Visa Omra Garanti</h4>
                  <p>Agrément officiel du Ministère du Hajj pour le traitement express de vos visas électroniques Nusuk.</p>
                </div>
              </div>

              <div className="inquiry-benefit-item">
                <div className="inquiry-benefit-icon" style={{ background: "rgba(4, 120, 87, 0.08)", color: "#047857" }}>
                  <BookOpen size={18} />
                </div>
                <div className="inquiry-benefit-text">
                  <h4>Préparation Spirituelle</h4>
                  <p>Séance de formation collective avant le départ : rites, conseils pratiques et guide écrit offert.</p>
                </div>
              </div>

              <div className="inquiry-benefit-item">
                <div className="inquiry-benefit-icon" style={{ background: "rgba(4, 120, 87, 0.08)", color: "#047857" }}>
                  <Award size={18} />
                </div>
                <div className="inquiry-benefit-text">
                  <h4>Accompagnement Continu</h4>
                  <p>Un encadrant technique et un guide spirituel bilingues restent joignables 24h/24 sur place.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col - Form */}
          <div className="inquiry-form-card">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom Complet *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Youssef Alami"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Adresse E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="youssef.alami@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+33 6 99 88 77 66"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formula">Formule choisie</label>
                    <select
                      id="formula"
                      value={selectedFormula}
                      onChange={(e) => setSelectedFormula(e.target.value)}
                    >
                      {packages.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="pilgrims">Nombre de pèlerins</label>
                    <select
                      id="pilgrims"
                      value={formData.pilgrims}
                      onChange={(e) => setFormData({ ...formData, pilgrims: e.target.value })}
                    >
                      <option value="1">1 Personne</option>
                      <option value="2">2 Personnes (Chambre Double)</option>
                      <option value="3-4">Chambre Famille (3-4 pers.)</option>
                      <option value="5+">Groupe / Plus de 5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="month">Mois de départ visé</label>
                    <select
                      id="month"
                      value={formData.departureMonth}
                      onChange={(e) => setFormData({ ...formData, departureMonth: e.target.value })}
                    >
                      <option value="Octobre 2026">Octobre 2026 (Vacances Scolaires)</option>
                      <option value="Décembre 2026">Décembre 2026 (Climat idéal)</option>
                      <option value="Février 2027">Février 2027</option>
                      <option value="Ramadan 2027">Mois de Ramadan 2027 (Omra Ramadan)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="notes">Remarques, demandes spéciales ou besoins d&apos;assistance médicale</label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Ex: besoin d'un fauteuil roulant, départ depuis une autre ville..."
                  />
                </div>

                <button
                  className="button"
                  type="submit"
                  style={{
                    width: "100%",
                    marginTop: "8px",
                    background: "#047857",
                    boxShadow: "0 6px 15px rgba(4, 120, 87, 0.3)"
                  }}
                >
                  <Send size={16} /> Envoyer ma demande d&apos;inscription
                </button>
              </form>
            ) : (
              <div className="form-success-box">
                <div className="form-success-icon" style={{ background: "rgba(4, 120, 87, 0.1)", color: "#047857" }}>
                  <Check size={28} />
                </div>
                <h3>Demande Enregistrée !</h3>
                <p style={{ marginBottom: "20px" }}>
                  Chaleureux remerciements <strong>{formData.name}</strong>. Votre pré-inscription pour la <strong>{activeTitle}</strong> a bien été enregistrée pour <strong>{formData.departureMonth}</strong>.
                </p>
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px dashed var(--border)",
                    borderRadius: "12px",
                    padding: "16px",
                    width: "100%",
                    fontSize: "12px",
                    textAlign: "left",
                    marginBottom: "24px",
                    color: "var(--text)"
                  }}
                >
                  <div style={{ marginBottom: "6px" }}>
                    <strong>Formule :</strong> {activeTitle}
                  </div>
                  <div style={{ marginBottom: "6px" }}>
                    <strong>Participants :</strong>{" "}
                    {formData.pilgrims === "1" ? "1 Pèlerin" : formData.pilgrims === "2" ? "2 Pèlerins" : formData.pilgrims}
                  </div>
                  <div style={{ marginBottom: "6px" }}>
                    <strong>Départ souhaité :</strong> {formData.departureMonth}
                  </div>
                  <div>
                    <strong>Prochaine étape :</strong> Un conseiller spécialiste du pèlerinage va étudier votre dossier. Vous
                    recevrez les devis et la liste des documents requis par email ({formData.email}) sous 24h.
                  </div>
                </div>
                <button className="button button-ghost" onClick={() => setSubmitted(false)}>
                  Faire une autre pré-inscription
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
