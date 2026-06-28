"use client";

import { useEffect, useRef } from "react";
import { gsap, shouldReduceMotion } from "@/components/home/animation";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Initiatives";
import { Newsletter } from "@/components/home/Newsletter";
import {
  Destinations,
  OmraSection,
  Proof,
  WhyChoose
} from "@/components/home/HomeSections";
import { TourismDestinations } from "@/components/home/TourismDestinations";
import { Testimonials } from "@/components/home/Testimonials";

export function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current || shouldReduceMotion()) return;

    const context = gsap.context(() => {
      gsap.from(".tourism-destinations-section .section-label, .tourism-destinations-section h2, .tourism-destinations-section p", {
        opacity: 0,
        y: 10,
        duration: 0.24,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tourism-destinations-section",
          start: "top 92%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".dest-grid-card", {
        opacity: 0,
        y: 12,
        duration: 0.28,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".destinations-masonry-grid",
          start: "top 92%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".omra-section .placeholder-intro, .omra-section .placeholder-card", {
        opacity: 0,
        y: 12,
        duration: 0.28,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".omra-section",
          start: "top 92%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".initiatives-heading > *, .initiatives-media", {
        opacity: 0,
        x: -12,
        duration: 0.26,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 92%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".initiative-row", {
        opacity: 0,
        y: 10,
        duration: 0.24,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-cards-grid",
          start: "top 92%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".destination-section .section-heading-row", {
        opacity: 0,
        y: 10,
        duration: 0.24,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".destination-section",
          start: "top 92%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".destination-grid > article", {
        opacity: 0,
        y: 12,
        duration: 0.26,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".destination-grid",
          start: "top 92%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".why-art", {
        opacity: 0,
        x: -12,
        duration: 0.28,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-section",
          start: "top 92%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".why-copy > *", {
        opacity: 0,
        x: 12,
        duration: 0.26,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-section",
          start: "top 92%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(
        ".testimonial-section .section-label, .testimonial-section h2, .testimonial-shell .testimonial-arrow, .testimonial-shell .dots, .testimonial-shell .testimonial-switcher",
        {
          opacity: 0,
          y: 10,
          duration: 0.24,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".testimonial-section",
            start: "top 92%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.from(".testimonial-shell .testimonial-card", {
        opacity: 0,
        scale: 0.98,
        y: 10,
        duration: 0.24,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-shell .testimonial-card",
          start: "top 92%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".newsletter-card > *", {
        opacity: 0,
        y: 10,
        duration: 0.24,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".newsletter-section",
          start: "top 92%",
          toggleActions: "play none none none"
        }
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Hero />
      <Proof />
      <Services />
      <TourismDestinations />
      <OmraSection />
      <Destinations />
      <WhyChoose />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
