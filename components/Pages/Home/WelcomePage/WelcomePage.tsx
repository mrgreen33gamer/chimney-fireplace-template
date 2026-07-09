// _archetype-library/hero-h-parallax/Component.tsx
//
// Hero H: Layered Parallax — foliage/gravel texture via CSS gradients + optional
// textureSrc image layers. Scroll-linked depth on document.body (scroll container).
// No discrete widget card — full-bleed layered texture behind left-aligned copy.
'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function useBodyScrollY() {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const read = () => {
      // document.body is the scroll container in these templates
      const y =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.scrollY ||
        0;
      scrollY.set(y);
    };
    read();
    document.body.addEventListener('scroll', read, { passive: true });
    window.addEventListener('scroll', read, { passive: true });
    return () => {
      document.body.removeEventListener('scroll', read);
      window.removeEventListener('scroll', read);
    };
  }, [scrollY]);

  return scrollY;
}

export default function WelcomePage() {
const badgeText = 'Waco\'s Most Trusted Chimney Pros — Since 2006';
const headlineLines = [
  'Chimneys Swept.',
  'Fires Made Safe.',
];
const headlineAccent = 'EmberStack Chimney & Fireplace.';
const subheadline = 'Chimney Sweep · Repair · Fireplace Install. Flat-rate pricing. Same-day service. Clean Sweep Guarantee · Fully Insured. Serving Waco and Central Texas with CSIA-certified sweeps.';
const primaryCta = { label: 'Call (254) 840-4040', href: 'tel:+12548404040' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Same-Day Service',
  'No Contracts',
  'CSIA-Certified',
  '20+ Yrs Local',
  'Clean Sweep Guarantee',
];
const stats = [
  {
    "value": "500+",
    "label": "Jobs Done"
  },
  {
    "value": "4.9 ★",
    "label": "Rating"
  },
  {
    "value": "15+",
    "label": "Years Local"
  },
  {
    "value": "1-Yr",
    "label": "Warranty"
  }
];
const meterTarget = 72;
const meterTopLabel = "Alert";
const meterMidLabel = "Monitor";
const meterBotLabel = "Secure";
const particleColor = '#c2410c';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Creosote build-up";
const afterLabel = "Inspected clean";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "Sweep", swatch: "#dc2626", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Cap", swatch: "#ef4444", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Damper", swatch: "#991b1b", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Relining", swatch: "#fca5a5", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Gas Log", swatch: "#7f1d1d", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Insert", swatch: "#450a0a", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "They sent a full photo report and replaced our cap the same week. Sleep better every cold night.";
const authorName = "Tom B.";
const authorMeta = "Chimney sweep · China Spring";
const rating = 5;
const schematicLabel = "EmberStack schematic";
const gauges = [
  { label: "Sweeps", value: "3,800+" },
  { label: "Rating", value: "4.9 ★" },
  { label: "Report", value: "Photos" },
  { label: "Emergency", value: "Yes" }
];
const toggles = [
  { label: "Licensed crew", on: true },
  { label: "Same-week", on: true },
  { label: "Warrantied", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "EmberStack";

  const scrollY = useBodyScrollY();
  const smoothY = useSpring(scrollY, { stiffness: 90, damping: 28, mass: 0.4 });

  const layerFarY = useTransform(smoothY, [0, 500], [0, 90]);
  const layerMidY = useTransform(smoothY, [0, 500], [0, 50]);
  const layerNearY = useTransform(smoothY, [0, 500], [0, 22]);
  const textureY = useTransform(smoothY, [0, 500], [0, 70]);
  const vignetteOpacity = useTransform(smoothY, [0, 300], [0.55, 0.85]);

  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Full-bleed layered texture stack */}
      <div className={styles.layers} aria-hidden="true">
        <motion.div
          className={`${styles.layer} ${styles.layerFar}`}
          style={reducedMotion ? undefined : { y: layerFarY }}
        />
        <motion.div
          className={`${styles.layer} ${styles.layerMid}`}
          style={reducedMotion ? undefined : { y: layerMidY }}
        />
        {textureSrc ? (
          <motion.div
            className={`${styles.layer} ${styles.layerTexture}`}
            style={reducedMotion ? undefined : { y: textureY }}
          >
            {/* Decorative texture layer — next/image optional when adapting into a template */}
            <img src={textureSrc} alt={textureAlt} className={styles.textureImg} />
          </motion.div>
        ) : null}
        <motion.div
          className={`${styles.layer} ${styles.layerNear}`}
          style={reducedMotion ? undefined : { y: layerNearY }}
        />
        <motion.div
          className={styles.vignette}
          style={reducedMotion ? undefined : { opacity: vignetteOpacity }}
        />
        <div className={styles.grain} />
      </div>

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Spacer column preserves grid balance on wide viewports; texture shows through */}
        <div className={styles.depthWell} aria-hidden="true">
          <div className={styles.depthRing} />
          <div className={styles.depthRingOuter} />
        </div>
      </div>
    </section>
  );
}
