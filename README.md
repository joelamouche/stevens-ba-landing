# Stevens Blockchain Advisory — Landing Page Specs

This README captures the content and design specifications for the Stevens
Blockchain Advisory landing page. It is the single source of truth for copy,
structure, and visual direction.

## About the company

Stevens Blockchain Advisory is a technical consulting firm specialized in Web3:

- Design and implementation of production-grade blockchain protocols
- Smart contract development (Solidity, EVM) and system architecture
- DeFi, token mechanics, identity/attestation, and cross-chain systems
- Codebase cleanup, audits, and deployment automation
- Technical advisory for startups and protocol teams

Additional strengths:

- Mastery in ZKPs and FHE with Zama
- 10 years of experience in Web3

## 0. Positioning (non-negotiable)

### Tone

- Technical
- Precise
- No hype, no Web3 slang
- Written for CTOs, protocol founders, lead engineers

### Implicit message

> We design and ship production blockchain systems. If you are early-stage or
> unserious, this is not for you.

## 1. Page structure (single-page landing)

### 1. Hero section

**Goal:** Immediate credibility + clarity

**Content**

- Headline (H1): Production-grade Web3 engineering & protocol advisory
- Subheadline: Design, implementation, and review of blockchain systems — from
  smart contracts to cross-chain architecture.
- CTA (primary): Get in touch
- CTA (secondary, optional): View services

**Design**

- Large typography
- No background video
- Very subtle gradient or flat background
- No illustrations here

### 2. Services section (core of the page)

**Goal:** Extremely clear service taxonomy

**Layout**

- 2-column grid (desktop)
- Each service = card with:
  - Title
  - 1-sentence description
  - Bullet list (3–5 max)

**Services to list**

#### A. Protocol Design & Architecture

- Blockchain protocol design
- System architecture (on-chain / off-chain)
- Upgradeability & governance patterns
- Threat modeling & failure analysis

#### B. Smart Contract Engineering

- Solidity (EVM) development
- Production-ready contracts
- Gas optimization
- Upgrade patterns (UUPS, Diamond, etc.)

#### C. DeFi & Token Mechanics

- AMMs, lending, staking, vesting
- Tokenomics design & review
- Incentive alignment
- Economic attack vectors

#### D. Identity, Attestation & Compliance

- DID & on-chain identity systems
- Attestation frameworks
- Access control & gating
- Compliance-aware architecture

#### E. Cross-Chain & Infrastructure

- Cross-chain messaging
- Bridges & interoperability
- Deployment automation
- CI/CD for smart contracts

#### F. Code Review, Cleanup & Audits (non-formal)

- Pre-audit reviews
- Legacy contract cleanup
- Refactors & test coverage
- Deployment readiness checks

### 3. How We Work

**Goal:** Signal professionalism and maturity

**Steps (horizontal or vertical)**

1. Technical scoping call
2. Architecture & risk review
3. Implementation or review
4. Deployment & handover
5. Optional long-term advisory

**Design**

- Numbered steps
- Minimal icons (line icons only)
- No diagrams here (save for later pages)

### 4. Who This Is For / Not For

**Goal:** Filter bad leads

**Two columns**

**Good fit**

- Funded startups
- Protocol teams
- CTOs & lead engineers
- Teams going to mainnet

**Not a fit**

- Idea stage with no tech
- NFT drops / marketing projects
- No budget for engineering rigor

### 5. About / Credibility block

**Content**

- Short paragraph about Stevens Blockchain Advisory
- Emphasis on:
  - Production systems
  - Real users
  - Multi-chain deployments
- Optional: Background includes work with major Web3 protocols and startups

No CV dump. No logos unless you really want to.

### 6. Demos

**Goal:** Provide proof of execution (to be refined later)

**Content**

- A simple list of demo links (placeholders for now)

### 7. Trusted by (logos)

**Goal:** Social proof with company logos

**Content**

- A row or grid of company logos
- Keep logos monochrome or low-contrast to stay subtle
- Final list and assets to be added later

### 8. Contact / CTA

**Simple**

- Email contact
- Calendly link (optional)
- We typically reply within 48h

No forms if you want to stay high-signal.

## 2. Design direction (very important)

### Visual style

- Minimal
- Flat
- No glassmorphism
- No neon gradients
- No 3D blobs

Think: OpenZeppelin, ChainSecurity, Trail of Bits.

### Typography

**Primary**

- Inter
- or Source Sans 3
- or IBM Plex Sans

**Headings**

- Same family, heavier weight
- No fancy serif

### Color palette (example)

**Base**

- Background: #FFFFFF or #F8FAFC
- Text primary: #0F172A (almost black)
- Text secondary: #475569

**Accent (pick ONE)**

- Blue: #2563EB (OpenZeppelin-ish)
- OR Teal: #0D9488
- OR Muted purple: #4F46E5

**Rules**

- Accent only for:
  - Links
  - CTA
  - Section separators
- No rainbow usage

### UI patterns

- Cards with:
  - 1px border #E5E7EB
  - Border radius: 6–8px
  - No shadows or very subtle shadow
- Large spacing
- Clear section separation

## 3. Tech stack (for the IDE)

- Next.js (App Router)
- Tailwind CSS
- No animation library initially
- Responsive, mobile-first
- Lighthouse score > 95

## 4. Visual inspiration (generate / search)

### Overall look & feel

- https://cdn.prod.website-files.com/65cdd9991a6c6ef9a062357b/6900e8c6d713971a08756250_ChainSecurity%20OG%20Image.png
- https://dexjsmqhulsscfyaceht.supabase.co/storage/v1/object/public/publicAssets/companies/chainsecurity/avatar-square.jpg
- https://docs.openzeppelin.com/defender/feedback-button.png
- https://www.openzeppelin.com/hubfs/Default%20OG.jpg

### Service cards & layout inspiration

- https://cdn.dribbble.com/userupload/25778756/file/original-3f7fb540e046702d9decfe263b195122.png?resize=400x0
- https://images-platform.99static.com//9SWpcR49Qizwt0zvlr3lZQnxnyo%3D/0x0%3A1900x1900/fit-in/500x500/99designs-contests-attachments/111/111731/attachment_111731879
- https://cdn.prod.website-files.com/64da807a9aa000087e97b92d/64edd08244ea82feb0a435c7_63692b59456b3728626d59b1_thumbnail.jpeg

### Color & typography inspiration

- https://www.openzeppelin.com/hubfs/UIBuilder.png
- https://cdn.dribbble.com/userupload/29995830/file/original-8c564807f1c9680907a39bf27417f89a.jpg?format=webp&resize=400x300&vertical=center
- https://cdn.dribbble.com/userupload/39904342/file/original-18e09f1b4c670d6e3ee45aba46a412ba.png?format=webp&resize=400x300&vertical=center

## 5. Prompt you can paste into an AI IDE

Build a single-page landing website for "Stevens Blockchain Advisory", a
technical Web3 consulting firm.

Style: minimal, sober, professional. Inspired by ChainSecurity and OpenZeppelin.

Use Next.js + Tailwind CSS.

Focus on service clarity, strong typography, clean layout, and technical
credibility.

No marketing fluff, no animations, no buzzwords.

Include sections: Hero, Services (6 categories), How We Work, Who It's For / Not
For, About, Demos, Trusted by (logos), Contact.

Use a neutral color palette with a single blue or teal accent.

Optimize for readability and desktop-first, fully responsive.
