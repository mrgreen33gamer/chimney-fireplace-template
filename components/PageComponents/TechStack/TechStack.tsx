'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string; // 'brand' | 'cert' | 'tool'
  icon?:    string; // emoji or short abbreviation for display
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Systems & Equipment We Service',
    items: [
      { name: 'Masonry Chimneys',       type: 'brand', icon: '⚡' },
      { name: 'Prefab Chimneys',        type: 'brand', icon: '⚡' },
      { name: 'Wood Fireplaces',          type: 'brand', icon: '⚡' },
      { name: 'Gas Fireplaces',             type: 'brand', icon: '⚡' },
      { name: 'Fireplace Inserts',        type: 'brand', icon: '⚡' },
      { name: 'Chimney Caps',         type: 'brand', icon: '⚡' },
      { name: 'Dampers',        type: 'brand', icon: '⚡' },
      { name: 'Dryer Vents', type: 'brand', icon: '⚡' },
    ],
  },
  {
    label: 'Certifications & Licenses',
    items: [
      { name: 'CSIA-Certified',        type: 'cert', icon: '✓' },
      { name: 'CSIA Sweep Standards',   type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured',     type: 'cert', icon: '✓' },
      { name: 'Clean Sweep Guarantee',      type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Chimney Sweep',       type: 'tool', icon: '🔌' },
      { name: 'Chimney Repair',    type: 'tool', icon: '🔌' },
      { name: 'Fireplace Install',      type: 'tool', icon: '🔌' },
      { name: 'Caps & Dampers',          type: 'tool', icon: '🔌' },
      { name: 'Dryer Vent Cleaning',           type: 'tool', icon: '🔌' },
      { name: 'Annual Inspections',      type: 'tool', icon: '🔌' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Certified Work, Proven Methods',
  subtitle = 'CSIA-certified sweeps, quality materials, and fire-safety standards — no shortcuts on inspection or cleanup.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Brands and certifications">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <div key={gi} className={styles.group}>
              <span className={styles.groupLabel}>{group.label}</span>
              <div className={styles.items}>
                {group.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    className={`${styles.item} ${item.type === 'cert' ? styles.itemCert : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ delay: gi * 0.06 + ii * 0.04, duration: 0.4, ease: 'easeOut' }}
                  >
                    {item.type === 'cert' ? (
                      <div className={styles.certCheck} aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    ) : (
                      <div className={styles.itemDot} aria-hidden="true" />
                    )}
                    <span className={styles.itemName}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
