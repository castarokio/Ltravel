"use client";

import { use } from "react";
import Link from "next/link";
import { Hotel, Clock, Map } from "lucide-react";
import { MotionPageShell } from "@/components/MotionPageShell";
import { tourismDestinations } from "@/lib/site-data";
import { DestinationHero } from "./destination-detail/DestinationHero";
import { ItinerarySection } from "./destination-detail/ItinerarySection";
import { HighlightsSection } from "./destination-detail/HighlightsSection";
import { InclusionsSection } from "./destination-detail/InclusionsSection";
import { RelatedAdventures } from "./destination-detail/RelatedAdventures";
import { BottomCtaBanner } from "./destination-detail/BottomCtaBanner";

export default function DestinationDetailPageClient({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const dest = tourismDestinations.find((d) => d.id === id);

  if (!dest) {
    return (
      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", marginBottom: "16px" }}>
          Destination Introuvable
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: "28px" }}>
          Le voyage que vous recherchez n&apos;existe pas ou a été déplacé.
        </p>
        <Link href="/" className="button">
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  // Get related adventures (other destinations)
  const relatedDestinations = tourismDestinations.filter((d) => d.id !== dest.id).slice(0, 3);

  return (
    <MotionPageShell className="dest-details-page-v2">
      {/* 1. HERO SECTION (Collage + Header info) */}
      <DestinationHero dest={dest} />

      {/* 2. OFFER SUMMARY & DESCRIPTION SECTION */}
      <section className="dest-offer-section">
        <div className="container">
          <div className="dest-offer-grid">
            {/* Left Booking Info Card */}
            <div className="dest-booking-card">
              <h2 className="dest-booking-title">{dest.name} Bliss</h2>
              <p className="dest-booking-desc">
                {dest.shortDesc}
              </p>
              
              <div className="dest-booking-pills">
                <div className="dest-booking-pill">
                  <Hotel size={16} strokeWidth={1.5} />
                  <span>Hôtel & destination</span>
                </div>
                <div className="dest-booking-pill">
                  <Clock size={16} strokeWidth={1.5} />
                  <span>{dest.duration}</span>
                </div>
                <div className="dest-booking-pill">
                  <Map size={16} strokeWidth={1.5} />
                  <span>{dest.placesCount}</span>
                </div>
              </div>

              <div className="dest-booking-price-row">
                <div>
                  <div className="dest-booking-price-label">À partir de</div>
                  <div className="dest-booking-price-val">{dest.price}</div>
                </div>
                <Link href="/contact" className="dest-booking-btn">
                  Réserver maintenant
                </Link>
              </div>
            </div>

            {/* Right Presentation Description Block */}
            <div className="dest-desc-col">
              <span className="dest-eyebrow">[DESCRIPTION]</span>
              <p className="dest-desc-text">
                {dest.intro}
              </p>
              
              {/* Hotel recommendations listed cleanly inside description space */}
              <div style={{ marginTop: "32px", borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
                <span className="dest-eyebrow" style={{ marginBottom: "16px", display: "block" }}>[OÙ SÉJOURNER]</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {dest.hotels.map((hotel, idx) => (
                    <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", color: "var(--primary)" }}>
                        {hotel.type}
                      </span>
                      <h4 style={{ fontSize: "15px", fontWeight: "600", color: "var(--text)", margin: 0 }}>
                        {hotel.name}
                      </h4>
                      <p style={{ fontSize: "13.5px", color: "var(--muted)", margin: 0, lineHeight: "1.5" }}>
                        {hotel.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRAVEL ITINERARY SECTION */}
      <ItinerarySection itinerary={dest.itinerary} />

      {/* 4. TRAVEL HIGHLIGHTS SECTION */}
      <HighlightsSection highlights={dest.highlights} collageImage={dest.collage[1]} />

      {/* 5. WHAT'S INCLUDED SECTION */}
      <InclusionsSection whatsIncluded={dest.whatsIncluded} collageImage={dest.collage[2]} />

      {/* 6. RELATED ADVENTURES SECTION */}
      <RelatedAdventures relatedDestinations={relatedDestinations} />

      {/* 7. BOTTOM LARGE CTA BANNER */}
      <BottomCtaBanner backgroundImage={dest.collage[0]} />
    </MotionPageShell>
  );
}
