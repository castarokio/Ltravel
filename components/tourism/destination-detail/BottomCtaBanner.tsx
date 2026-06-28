"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BottomCtaBannerProps {
  backgroundImage: string;
}

export function BottomCtaBanner({ backgroundImage }: BottomCtaBannerProps) {
  return (
    <section
      className="dest-bottom-cta-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="dest-bottom-cta-overlay"></div>
      <div className="dest-bottom-cta-content">
        <h2 className="dest-bottom-cta-title">
          Découvrez des destinations uniques, pensées pour vous
        </h2>
        <p className="dest-bottom-cta-desc">
          Chez Pathfinder, nous créons des voyages personnalisés selon vos envies. Laissez-nous organiser votre prochaine escapade de rêve.
        </p>
        <Link href="/#tourism" className="dest-bottom-cta-btn">
          Commencer <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
