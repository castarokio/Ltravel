"use client";

import Link from "next/link";
import Image from "next/image";

interface RelatedDest {
  id: string;
  name: string;
  image: string;
  tagline: string;
}

interface RelatedAdventuresProps {
  relatedDestinations: RelatedDest[];
}

export function RelatedAdventures({ relatedDestinations }: RelatedAdventuresProps) {
  return (
    <section className="dest-explore-more-section">
      <div className="container">
        <div className="dest-section-title-wrap" style={{ marginBottom: "20px" }}>
          <span className="dest-section-eyebrow">[GALERIE]</span>
          <h2 className="dest-section-title">Explorer plus d&apos;aventures</h2>
        </div>

        <div className="dest-related-grid">
          {relatedDestinations.map((related, idx) => (
            <Link key={idx} href={`/tourism/destination/${related.id}`} className="dest-related-card">
              <div className="dest-related-img-wrap">
                <Image
                  src={related.image}
                  alt={related.name}
                  width={400}
                  height={225}
                />
              </div>
              <h3 className="dest-related-title">{related.name}</h3>
              <span className="dest-related-meta">{related.tagline}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
