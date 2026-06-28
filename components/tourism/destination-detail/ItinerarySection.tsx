"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ItineraryItem {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

interface ItinerarySectionProps {
  itinerary: ItineraryItem[];
}

export function ItinerarySection({ itinerary }: ItinerarySectionProps) {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <section className="dest-itinerary-section">
      <div className="container">
        <div className="dest-section-title-wrap">
          <span className="dest-section-eyebrow">[PROGRAMME]</span>
          <h2 className="dest-section-title">Votre itinéraire de voyage</h2>
        </div>

        <div className="dest-itinerary-grid">
          {/* Day Tab Selectors */}
          <div className="dest-itinerary-list">
            {itinerary.map((day, idx) => (
              <button
                key={idx}
                className={`dest-itinerary-item ${selectedDay === idx ? "active" : ""}`}
                onClick={() => setSelectedDay(idx)}
                type="button"
              >
                <span>{day.title}</span>
                <ArrowRight size={12} style={{ opacity: selectedDay === idx ? 1 : 0 }} />
              </button>
            ))}
          </div>

          {/* Center image that updates based on selection */}
          <div className="dest-itinerary-img-wrap">
            <Image
              src={itinerary[selectedDay].image}
              alt={itinerary[selectedDay].title}
              width={600}
              height={400}
            />
          </div>

          {/* Right Day Details */}
          <div className="dest-itinerary-detail">
            <span className="dest-itinerary-detail-chip">
              Étape {selectedDay + 1}
            </span>
            <h3 className="dest-itinerary-detail-title">
              {itinerary[selectedDay].subtitle}
            </h3>
            <p className="dest-itinerary-detail-desc">
              {itinerary[selectedDay].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
