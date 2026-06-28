"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

interface InquiryFormProps {
  options: { id: string; title: string }[];
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  optionLabel: string;
  notesLabel: string;
  notesPlaceholder: string;
  submitBtnText: string;
  successTitle?: string;
  successMessage: (formData: typeof initialFormState, activeTitle: string) => React.ReactNode;
}

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  travelers: "1",
  date: "",
  notes: ""
};

export function InquiryForm({
  options,
  selectedOption,
  setSelectedOption,
  optionLabel,
  notesLabel,
  notesPlaceholder,
  submitBtnText,
  successTitle = "Demande Reçue !",
  successMessage
}: InquiryFormProps) {
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

  const activeOptionObj = options.find((o) => o.id === selectedOption) || options[0];
  const activeTitle = activeOptionObj ? activeOptionObj.title : "";

  return (
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
                placeholder="Jean Dupont"
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
                placeholder="jean.dupont@example.com"
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
                placeholder="+33 6 12 34 56 78"
              />
            </div>
            <div className="form-group">
              <label htmlFor="option-select">{optionLabel}</label>
              <select
                id="option-select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                {options.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="travelers">Nombre de voyageurs</label>
              <select
                id="travelers"
                value={formData.travelers}
                onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
              >
                <option value="1">1 Personne</option>
                <option value="2">2 Personnes</option>
                <option value="3-5">Famille (3-5 pers.)</option>
                <option value="6+">Groupe (6+ pers.)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Date de départ souhaitée</label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="notes">{notesLabel}</label>
            <textarea
              id="notes"
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder={notesPlaceholder}
            />
          </div>

          <button className="button" type="submit" style={{ width: "100%", marginTop: "8px" }}>
            <Send size={16} /> {submitBtnText}
          </button>
        </form>
      ) : (
        <div className="form-success-box">
          <div className="form-success-icon">
            <Check size={28} />
          </div>
          <h3>{successTitle}</h3>
          {successMessage(formData, activeTitle)}
          <button className="button button-ghost" onClick={() => setSubmitted(false)}>
            Faire une autre demande
          </button>
        </div>
      )}
    </div>
  );
}
