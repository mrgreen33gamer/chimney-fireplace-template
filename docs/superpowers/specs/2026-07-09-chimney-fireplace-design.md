# Chimney Fireplace Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `hvac-template` into `chimney-fireplace-template`, sibling-cloned patterns from `garage-door-template`. Per-city SEO subpages deleted. `/projects` route deleted.

## Business Identity (locked)

| Field | Value |
|-------|--------|
| **Business name** | EmberStack Chimney & Fireplace |
| **Tagline** | Chimney Sweep · Repair · Fireplace Install |
| **Location** | Waco, TX |
| **Service cities** | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| **Founded** | 2006 |
| **Owner** | Hank Collier |
| **License** | CSIA-Certified Sweeps · Bonded & Insured |
| **Guarantee** | Clean Sweep Guarantee · Fully Insured |
| **Social proof** | 4.9★, 950+ reviews, 7,500+ chimneys serviced |
| **Accent hex** | `#9a3412` (ember/rust) — `$orange` token |
| **Phone** | (254) 840-4040 / `tel:+12548404040` |
| **Email** | hello@emberstackchimney.com |
| **Domain** | emberstackchimney.com |
| **Address** | 1500 N 15th St, Waco, TX 76707 |

## Services (6)

| Old HVAC | Slug | Title |
|----------|------|--------|
| ac-repair | `chimney-sweep` | Chimney Sweep |
| heating | `chimney-repair` | Chimney Repair |
| installation | `fireplace-install` | Fireplace Installation |
| duct-cleaning | `cap-damper` | Caps & Dampers |
| indoor-air-quality | `dryer-vent` | Dryer Vent Cleaning |
| maintenance | `annual-inspection` | Annual Inspections |

## Industries (3)

| Old HVAC | Slug | Title |
|----------|------|--------|
| automotive | `property-management` | Property Management |
| manufacturing | `historic-homes` | Historic Homes |
| oil-gas | `hospitality` | Hospitality & Lodging |

## Blogs (3)

1. `how-often-sweep-chimney-texas`
2. `creosote-fire-risk-signs`
3. `gas-vs-wood-fireplace-costs`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No projects gallery. No per-city SEO.

## Accent

- SCSS: `$orange: #9a3412`, `$lightorange: #c2410c`, `$darkorange: #7c2d12`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles → `#9a3412`

## Done criteria

- `npm run typecheck` passes
- Grep clean of HVAC/Arctic Air/old phone/Mapbox pk tokens
- Identity consistent: EmberStack Chimney & Fireplace throughout
