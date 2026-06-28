"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { Logo } from "@/components/Logo";
import { shouldReduceMotion } from "@/components/home/animation";
import { getNavStairOffset } from "./NavStairOffsets";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!headerRef.current || shouldReduceMotion()) return;

    const context = gsap.context(() => {
      // Set initial values
      gsap.set(".brand-link, .desktop-actions > *, .desktop-nav .nav-item", { opacity: 0 });
      gsap.set(".brand-link", { y: -10 });
      gsap.set(".desktop-actions > *", { y: -8 });
      
      // Set initial state of non-stair nav items
      gsap.set(".desktop-nav .nav-item:not(.nav-stair)", { y: -8 });

      // Set initial state of stair nav items (they start slightly lower and left of their final positions)
      const stairElements = headerRef.current?.querySelectorAll(".nav-stair");
      stairElements?.forEach((el, index) => {
        const offset = getNavStairOffset(index);
        gsap.set(el, { y: offset.y + 10, x: offset.x - 10, opacity: 0 });
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".brand-link", { opacity: 1, y: 0, duration: 0.36 }, 0);

      // Animate stair elements to their respective target offsets
      stairElements?.forEach((el, index) => {
        const offset = getNavStairOffset(index);
        tl.to(el, {
          opacity: 1,
          x: offset.x,
          y: offset.y,
          duration: 0.48
        }, 0.06 + index * 0.07);
      });

      tl.to(".desktop-nav .nav-item:not(.nav-stair)", {
        opacity: 1,
        y: 0,
        duration: 0.34,
        stagger: 0.035
      }, 0.22)
      .to(".desktop-actions > *", {
        opacity: 1,
        y: 0,
        duration: 0.34,
        stagger: 0.05
      }, 0.28);
    }, headerRef);

    return () => context.revert();
  }, []);

  const toggleMenu = () => {
    if (open) {
      if (menuRef.current) {
        if (shouldReduceMotion()) {
          setOpen(false);
          setMounted(false);
          return;
        }

        gsap.to(menuRef.current, {
          opacity: 0,
          y: -6,
          duration: 0.12,
          ease: "power2.in",
          onComplete: () => {
            setOpen(false);
            setMounted(false);
          }
        });
      } else {
        setOpen(false);
        setMounted(false);
      }
    } else {
      setMounted(true);
      setOpen(true);
    }
  };

  useEffect(() => {
    if (mounted && menuRef.current && !shouldReduceMotion()) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -6 },
        { opacity: 1, y: 0, duration: 0.14, ease: "power2.out" }
      );
      gsap.fromTo(
        menuRef.current.querySelectorAll(".mobile-nav-group"),
        { opacity: 0, x: -6 },
        { opacity: 1, x: 0, duration: 0.14, ease: "power2.out" }
      );
    }
  }, [mounted]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <div className="brand-hover-container">
          <Link href="/" className="brand-link" aria-label="Land Travel home">
            <Logo />
          </Link>
        </div>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <div className={`nav-item nav-item-hover ${index < 3 ? "nav-stair" : ""}`} key={item.label}>
              <Link href={item.href}>
                {item.label}
                {item.children && <ChevronDown size={13} />}
              </Link>
              {item.children && (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="desktop-actions">
          <Link className="login-link" href="/login">
            Connexion
          </Link>
          <Link className="button button-small" href="/signup">
            {"S'inscrire"}
          </Link>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={toggleMenu}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mounted && (
        <div className="mobile-menu" ref={menuRef} style={{ opacity: 0 }}>
          {navItems.map((item) => (
            <div className="mobile-nav-group" key={item.label}>
              <Link href={item.href} onClick={() => { setOpen(false); setMounted(false); }}>
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link key={child.href} href={child.href} onClick={() => { setOpen(false); setMounted(false); }}>
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/login" onClick={() => { setOpen(false); setMounted(false); }}>
            Connexion
          </Link>
          <Link className="button" href="/signup" onClick={() => { setOpen(false); setMounted(false); }}>
            {"S'inscrire"}
          </Link>
        </div>
      )}
    </header>
  );
}
