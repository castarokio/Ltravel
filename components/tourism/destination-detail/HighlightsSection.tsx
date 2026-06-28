"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

interface HighlightItem {
  title: string;
  desc: string;
}

interface HighlightsSectionProps {
  highlights: HighlightItem[];
  collageImage: string;
}

export function HighlightsSection({ highlights, collageImage }: HighlightsSectionProps) {
  const [openHighlightIndex, setOpenHighlightIndex] = useState(0);

  return (
    <section className="dest-highlights-section">
      <div className="container">
        <div className="dest-section-title-wrap">
          <span className="dest-section-eyebrow">[POINTS FORTS]</span>
          <h2 className="dest-section-title">Expériences inoubliables</h2>
        </div>

        <div className="dest-highlights-grid">
          {/* Left Paragraph + Editorial Image */}
          <div className="dest-highlights-left">
            <p className="dest-highlights-left-text">
              Vivez des moments privilégiés au plus proche de la culture et des paysages. Notre formule propose un juste équilibre entre activités encadrées et temps libres d&apos;exploration personnelle.
            </p>
            <div className="dest-highlights-left-img">
              <Image
                src={collageImage}
                alt="Travelers highlight scene"
                width={500}
                height={280}
              />
            </div>
          </div>

          {/* Right Numbered Accordion */}
          <div className="dest-accordion-list">
            {highlights.map((highlight, idx) => {
              const isOpen = openHighlightIndex === idx;
              return (
                <div key={idx} className="dest-accordion-item">
                  <button
                    className="dest-accordion-header"
                    onClick={() => setOpenHighlightIndex(isOpen ? -1 : idx)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <div className="dest-accordion-num-title">
                      <span className="dest-accordion-num">0{idx + 1}</span>
                      <span className="dest-accordion-title">{highlight.title}</span>
                    </div>
                    <span className="dest-accordion-icon">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  <div
                    className="dest-accordion-content"
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <p style={{ margin: 0 }}>{highlight.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
