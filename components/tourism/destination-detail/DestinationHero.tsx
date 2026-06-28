"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Star, Share2, Bookmark } from "lucide-react";

interface DestinationHeroProps {
  dest: {
    id: string;
    name: string;
    location: string;
    rating: string;
    collage: string[];
  };
}

export function DestinationHero({ dest }: DestinationHeroProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    }
  };

  return (
    <section className="dest-hero-section">
      <div className="container">
        {/* Header Back Navigation */}
        <div style={{ marginBottom: "24px", paddingTop: "32px" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--muted)",
              fontSize: "13px",
              fontWeight: "500",
              textDecoration: "none"
            }}
          >
            <ArrowLeft size={14} /> Retour à l&apos;accueil
          </Link>
        </div>

        {/* Title & Actions Row */}
        <div className="dest-header-row">
          <div className="dest-title-wrap">
            <h1>Évasion balnéaire : {dest.name}</h1>
            <div className="dest-meta-row">
              <span className="dest-meta-item">
                <MapPin size={14} /> {dest.location}
              </span>
              <span className="dest-meta-item">
                <Star size={14} fill="#fbbf24" stroke="none" />
                <span className="rating-val">{dest.rating}</span>
              </span>
            </div>
          </div>

          <div className="dest-actions-wrap">
            <button className="dest-action-btn" onClick={handleShare} type="button">
              <Share2 size={14} /> {shareSuccess ? "Copié !" : "Partager"}
            </button>
            <button
              className={`dest-action-btn ${isSaved ? "active" : ""}`}
              onClick={() => setIsSaved(!isSaved)}
              type="button"
            >
              <Bookmark size={14} fill={isSaved ? "currentColor" : "none"} />
              {isSaved ? "Enregistré" : "Enregistrer"}
            </button>
          </div>
        </div>

        {/* Hero Image Collage */}
        <div className="dest-hero-grid">
          <div className="dest-hero-main-img">
            <Image
              src={dest.collage[0]}
              alt={`${dest.name} main view`}
              width={800}
              height={480}
              priority
            />
          </div>
          <div className="dest-hero-side-wrap">
            <div className="dest-hero-side-img">
              <Image
                src={dest.collage[1]}
                alt={`${dest.name} side view 1`}
                width={400}
                height={234}
              />
            </div>
            <div className="dest-hero-side-img">
              <Image
                src={dest.collage[2]}
                alt={`${dest.name} side view 2`}
                width={400}
                height={234}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
