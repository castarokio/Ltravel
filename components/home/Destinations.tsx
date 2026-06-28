"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { destinations } from "@/lib/site-data";

export function Destinations() {
  return (
    <section className="section-space destination-section">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Meilleures Destinations</p>
            <h2>Explorez les meilleures destinations pour vos études supérieures</h2>
          </div>
          <div className="carousel-controls">
            <button aria-label="Destinations précédentes" type="button">
              <ArrowLeft size={18} />
            </button>
            <button className="active" aria-label="Destinations suivantes" type="button">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="destination-grid">
          {destinations.map((destination) => (
            <article className="destination-card scroll-trigger-item" key={destination.name}>
              <Image src={destination.image} width={560} height={340} alt={`Destination ${destination.name}`} loading="eager" />
              <div className="destination-content">
                <h3>{destination.name}</h3>
                <Link href="/universities">
                  Voir plus <ChevronRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
