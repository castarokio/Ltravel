"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { gsap, shouldReduceMotion } from "@/components/home/animation";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const testimonial = testimonials[index];
  const cardRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((next: number, dir: 1 | -1) => {
    setDirection(dir);
    setIndex(next);
  }, []);

  useEffect(() => {
    if (!cardRef.current || shouldReduceMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: direction * 28 },
        { opacity: 1, x: 0, duration: 0.42, ease: "power3.out" }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index, direction]);

  return (
    <section className="testimonial-section section-space">
      <div className="container testimonial-shell">
        <p className="section-label">Témoignages</p>
        <h2>Faites confiance à nos clients</h2>

        <button
          className="testimonial-arrow testimonial-left"
          aria-label="Témoignage précédent"
          type="button"
          onClick={() => goTo((index + testimonials.length - 1) % testimonials.length, -1)}
        >
          <ArrowLeft size={18} />
        </button>

        <article className="testimonial-card" ref={cardRef}>
          <Image src={testimonial.avatar} width={96} height={96} alt={testimonial.name} loading="eager" />
          <h3>
            {testimonial.name} / {testimonial.place}
          </h3>
          <div className="stars" aria-label="Évaluation de 5 étoiles">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star key={starIndex} size={18} fill="currentColor" />
            ))}
          </div>
          <p>{testimonial.quote}</p>
        </article>

        <button
          className="testimonial-arrow testimonial-right active"
          aria-label="Témoignage suivant"
          type="button"
          onClick={() => goTo((index + 1) % testimonials.length, 1)}
        >
          <ArrowRight size={18} />
        </button>

        <div className="dots" aria-label="Pagination des témoignages">
          {testimonials.map((item, dotIndex) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Afficher le témoignage de ${item.name}`}
              className={dotIndex === index ? "active" : ""}
              onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
            />
          ))}
        </div>

        <div className="testimonial-switcher" aria-label="Changer de témoignage">
          {testimonials.map((item, thumbIndex) => (
            <button
              key={item.name}
              type="button"
              className={thumbIndex === index ? "active" : ""}
              onClick={() => goTo(thumbIndex, thumbIndex > index ? 1 : -1)}
            >
              <Image src={item.avatar} width={44} height={44} alt={item.name} />
              <span>
                <strong>{item.name}</strong>
                <small>{item.place}</small>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
