"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Building2,
  FileCheck2,
  GraduationCap,
  HandHeart,
  Hotel,
  Minus,
  Plus
} from "lucide-react";
import { serviceJourney } from "@/lib/site-data";
import { gsap } from "@/components/home/animation";

const journeyIcons = [GraduationCap, Building2, FileCheck2, Hotel, HandHeart];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Accordion & Image Swap GSAP Animations
  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Accordion Panels slide
    const wrappers = containerRef.current.querySelectorAll(".initiative-panel-wrapper");
    wrappers.forEach((el, index) => {
      const isOpen = index === activeIndex;
      gsap.to(el, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.36,
        ease: "power3.out",
        overwrite: "auto"
      });
    });

    // 2. Images cross-fade & scale
    const images = containerRef.current.querySelectorAll(".initiatives-media img");
    images.forEach((img, index) => {
      const isActive = index === activeIndex;
      if (isActive) {
        gsap.killTweensOf(img);
        gsap.set(img, { display: "block", zIndex: 2 });
        gsap.fromTo(img, 
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.48, ease: "power2.out" }
        );
      } else {
        gsap.killTweensOf(img);
        gsap.to(img, { 
          opacity: 0, 
          scale: 1.05, 
          duration: 0.36, 
          ease: "power2.inOut",
          zIndex: 1,
          onComplete: () => {
            gsap.set(img, { display: "none" });
          }
        });
      }
    });
  }, [activeIndex]);

  return (
    <section className="services-section initiatives-section section-space" id="services">
      <div className="container initiatives-layout" ref={containerRef}>
        <div className="initiatives-left">
          <div className="initiatives-heading">
            <p className="section-label">Services</p>
            <h2>Nos initiatives pour votre réussite !</h2>
          </div>

          <div className="initiatives-media" style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}>
            {serviceJourney.map((item, index) => (
              <Image
                key={item.id}
                src={item.image}
                alt={item.title}
                width={620}
                height={520}
                loading="eager"
                priority={index === 0}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: index === 0 ? "block" : "none"
                }}
              />
            ))}
          </div>
        </div>

        <div className="initiatives-accordion" aria-label="Initiatives de service">
          {serviceJourney.map((item, index) => {
            const Icon = journeyIcons[index] || GraduationCap;
            const isOpen = index === activeIndex;

            return (
              <article className={`initiative-row ${isOpen ? "active" : ""}`} key={item.id}>
                <button
                  className="initiative-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`initiative-panel-${item.id}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="initiative-title">
                    <Icon size={32} strokeWidth={1.9} />
                    <span>{item.title}</span>
                  </span>
                  {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                </button>

                <div
                  className="initiative-panel-wrapper"
                  style={{
                    height: index === 0 ? "auto" : 0,
                    opacity: index === 0 ? 1 : 0,
                    overflow: "hidden"
                  }}
                >
                  <div className="initiative-panel" id={`initiative-panel-${item.id}`} style={{ minHeight: 0 }}>
                    <p>{item.description}</p>
                    <Link href={item.href}>{item.cta}</Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="initiatives-bottom-actions">
        <Link className="button services-explore-btn-large" href="/services">
          Explorer tous les services <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
