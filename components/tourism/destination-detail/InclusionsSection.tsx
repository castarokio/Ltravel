"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

interface InclusionItem {
  title: string;
  desc: string;
}

interface InclusionsSectionProps {
  whatsIncluded: InclusionItem[];
  collageImage: string;
}

export function InclusionsSection({ whatsIncluded, collageImage }: InclusionsSectionProps) {
  const [openIncludedIndex, setOpenIncludedIndex] = useState(0);

  return (
    <section className="dest-included-section">
      <div className="container">
        <div className="dest-section-title-wrap">
          <span className="dest-section-eyebrow">[INCLUS]</span>
          <h2 className="dest-section-title">Ce qui est compris dans votre expérience</h2>
        </div>

        <div className="dest-included-grid">
          {/* Left Inclusions Accordion */}
          <div className="dest-accordion-list">
            {whatsIncluded.map((included, idx) => {
              const isOpen = openIncludedIndex === idx;
              return (
                <div key={idx} className="dest-accordion-item">
                  <button
                    className="dest-accordion-header"
                    onClick={() => setOpenIncludedIndex(isOpen ? -1 : idx)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <div className="dest-accordion-num-title">
                      <span className="dest-accordion-title">{included.title}</span>
                    </div>
                    <span className="dest-accordion-icon">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  <div
                    className="dest-accordion-content"
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                      opacity: isOpen ? 1 : 0,
                      paddingLeft: "0px"
                    }}
                  >
                    <p style={{ margin: 0 }}>{included.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Vertical Image */}
          <div className="dest-included-right-img">
            <Image
              src={collageImage}
              alt="Inclusions and accommodations detail"
              width={500}
              height={380}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
