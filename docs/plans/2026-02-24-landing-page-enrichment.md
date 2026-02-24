# Landing Page Enrichment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update the fixitruck.com landing page to reflect the full fleet management ERP product, not just breakdown matching.

**Architecture:** Single-file edits to `index.html`. No build step, no new dependencies. All styling uses existing Tailwind CSS classes and follows the Play Tailwind template patterns already in use. One new section added; all other changes are copy updates.

**Tech Stack:** HTML, Tailwind CSS (pre-compiled v4.0.9), WOW.js scroll animations, inline SVG icons.

---

### Task 1: Update meta tags and page title

**Files:**
- Modify: `index.html:7-8`

**Step 1: Update title and meta description**

Replace lines 7-8:

```html
    <title>FixiTruck - Fleet Truck Repair Management Platform</title>
    <meta name="description" content="FixiTruck streamlines truck repair operations for fleets, drivers, and repair shops. Manage breakdowns, work orders, invoicing, and communications in one platform." />
```

With:

```html
    <title>FixiTruck - Fleet Management Platform for Trucking</title>
    <meta name="description" content="FixiTruck is the fleet management platform for trucking — inspections, maintenance, and daily operations. From daily DVIRs to emergency breakdowns, manage your fleet in one place." />
```

**Step 2: Verify** — Open `index.html` in browser, check `<title>` in tab and view page source for meta description.

**Step 3: Commit**

```bash
git add index.html
git commit -m "update meta title and description to reflect full platform scope"
```

---

### Task 2: Update hero section copy

**Files:**
- Modify: `index.html:199-210`

**Step 1: Replace hero headline and subheading**

Find (line 202):
```
                Streamline Your Fleet's Truck Repair Operations
```

Replace with:
```
                The Smarter Way to Manage Your Fleet's Maintenance
```

Find (lines 207-209):
```
                FixiTruck is the all-in-one platform for managing truck
                breakdowns, work orders, invoicing, and shop communications --
                built for fleets, drivers, and repair shops.
```

Replace with:
```
                From daily inspections to emergency breakdowns — FixiTruck
                brings fleet management, vehicle tracking, and repair shop
                matching into one platform.
```

**Step 2: Verify** — Open in browser, confirm hero reads correctly on desktop and mobile widths.

**Step 3: Commit**

```bash
git add index.html
git commit -m "update hero copy to fleet management positioning"
```

---

### Task 3: Refresh How It Works copy

**Files:**
- Modify: `index.html:458-529`

**Step 1: Update section tagline**

Find (line 459):
```
                From breakdown report to completed work order in three steps.
```

Replace with:
```
                From breakdown report to completed repair in three steps.
```

**Step 2: Update Step 1 (Report) description**

Find (lines 482-484):
```
                Fleet manager or driver creates a repair request with vehicle details, location, and photos via web panel or mobile app.
```

Replace with:
```
                Driver reports a breakdown with location, photos, and symptoms — our AI helps assess severity and diagnostics.
```

**Step 3: Update Step 2 (Match) description**

Find (lines 505-506):
```
                FixiTruck notifies nearby shops who review the request and submit competitive repair offers.
```

Replace with:
```
                FixiTruck broadcasts the request to nearby verified shops, who review details and submit competitive offers.
```

**Step 4: Update Step 3 (Repair) description**

Find (lines 527-528):
```
                Accept the best offer, track repair progress, and receive a digital invoice -- all in one place.
```

Replace with:
```
                Accept the best offer, track repair progress in real-time, and get your truck back on the road.
```

**Step 5: Verify** — Check all three steps render correctly in browser.

**Step 6: Commit**

```bash
git add index.html
git commit -m "refresh How It Works copy with AI diagnostics and verified shops"
```

---

### Task 4: Add new Daily Operations section

**Files:**
- Modify: `index.html` — insert after line 535 (`<!-- ====== How It Works Section End -->`)

**Step 1: Insert new section between How It Works End and Features Start**

Insert the following HTML block after `<!-- ====== How It Works Section End -->` (line 535) and before `<!-- ====== Features Section Start -->` (line 537):

```html

    <!-- ====== Daily Operations Section Start -->
    <section id="daily-ops" class="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <span class="block mb-2 text-lg font-semibold text-primary">
                Daily Operations
              </span>
              <h2
                class="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
              >
                Built for the Road, Every Day
              </h2>
              <p class="text-base text-body-color dark:text-dark-6">
                FixiTruck isn't just for breakdowns — it's your fleet's daily operating system.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-12 wow fadeInUp group" data-wow-delay=".1s">
              <div
                class="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary"
              >
                <span
                  class="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45"
                ></span>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z" stroke="white" stroke-width="1.5"/>
                  <path d="M9 12L11 14L15 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 17H15" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <h4 class="mb-3 text-xl font-bold text-dark dark:text-white">
                Pre-Trip Inspections
              </h4>
              <p class="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Digital DVIR with zone-based checklists, defect photo capture, and pass/fail tracking. Keep your fleet compliant and road-ready.
              </p>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-12 wow fadeInUp group" data-wow-delay=".15s">
              <div
                class="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary"
              >
                <span
                  class="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45"
                ></span>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 17H3V15L2 11.5L3.5 5L6 2.5H18L20.5 5L22 11.5L21 15V17H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5 17C5 18.1046 5.89543 19 7 19C8.10457 19 9 18.1046 9 17" stroke="white" stroke-width="1.5"/>
                  <path d="M15 17C15 18.1046 15.8954 19 17 19C18.1046 19 19 18.1046 19 17" stroke="white" stroke-width="1.5"/>
                  <path d="M2 11.5H22" stroke="white" stroke-width="1.5"/>
                  <path d="M9 17H15" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M10 7H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M10 14H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <h4 class="mb-3 text-xl font-bold text-dark dark:text-white">
                Vehicle Management
              </h4>
              <p class="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Register trucks and trailers, track assignments, store documents, and monitor mileage — all in one place.
              </p>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-12 wow fadeInUp group" data-wow-delay=".2s">
              <div
                class="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary"
              >
                <span
                  class="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45"
                ></span>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="7" r="3" stroke="white" stroke-width="1.5"/>
                  <path d="M3 21V18C3 15.7909 4.79086 14 7 14H11C13.2091 14 15 15.7909 15 18V21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M18 8V14" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M15 11H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <h4 class="mb-3 text-xl font-bold text-dark dark:text-white">
                Fleet & Driver Management
              </h4>
              <p class="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Invite drivers, manage join requests, assign vehicles, and oversee your entire fleet's operations from a single dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Daily Operations Section End -->
```

**Step 2: Verify** — Open browser, scroll to new section between "How It Works" and "Features". Confirm:
- Section label "Daily Operations" in blue
- Title "Built for the Road, Every Day"
- Three cards with icons, titles, descriptions
- WOW.js fade-in animations trigger on scroll
- Dark mode renders correctly

**Step 3: Commit**

```bash
git add index.html
git commit -m "add Daily Operations section with PTI, vehicles, and fleet management"
```

---

### Task 5: Reorder and enrich Features by Role section

**Files:**
- Modify: `index.html` — the Features section (3 cards)

**Step 1: Replace the three feature cards**

The Features section contains three cards in the `<div class="flex flex-wrap -mx-4">` block. Replace the entire three-card block (from first `<div class="w-full px-4 md:w-1/2 lg:w-1/3">` to the closing `</div>` before `</div></div></section>`).

Replace the card order: Fleet Managers first (with dashboard icon), Drivers second (with truck icon), Repair Shops third (with garage icon).

**Card 1 — For Fleet Managers (was card 2, now first):**

Replace the "For Drivers" card (first card, lines ~561-585) with Fleet Managers card using the dashboard icon:

```html
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-12 wow fadeInUp group" data-wow-delay=".1s">
              <div
                class="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary"
              >
                <span
                  class="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45"
                ></span>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="white" stroke-width="1.5"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="white" stroke-width="1.5"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="white" stroke-width="1.5"/>
                  <path d="M14 17.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M14 14.5H19" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M14 20.5H17" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <h4 class="mb-3 text-xl font-bold text-dark dark:text-white">
                For Fleet Managers
              </h4>
              <p class="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Monitor repair requests, manage drivers and vehicles, track inspections, and control maintenance costs — all from one dashboard.
              </p>
              <a
                href="/accounts/login/"
                class="text-base font-medium text-primary hover:text-primary/80"
              >
                Sign In
              </a>
            </div>
          </div>
```

**Card 2 — For Drivers (was card 1, now second):**

```html
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-12 wow fadeInUp group" data-wow-delay=".15s">
              <div
                class="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary"
              >
                <span
                  class="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45"
                ></span>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="1.5" fill="white"/>
                  <path d="M15.5 17H8.5L7 12.5C7 12.5 8 11 12 11C16 11 17 12.5 17 12.5L15.5 17Z" fill="white"/>
                  <rect x="7" y="17" width="10" height="2" rx="0.5" fill="white"/>
                  <path d="M6 19.5H4.5V17.5L3 14L4.5 7L7 4H17L19.5 7L21 14L19.5 17.5V19.5H18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="6" cy="14" r="1" fill="white"/>
                  <circle cx="18" cy="14" r="1" fill="white"/>
                </svg>
              </div>
              <h4 class="mb-3 text-xl font-bold text-dark dark:text-white">
                For Drivers
              </h4>
              <p class="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Run pre-trip inspections, report breakdowns with AI-assisted diagnostics, compare repair offers, and track progress from your phone.
              </p>
            </div>
          </div>
```

**Card 3 — For Repair Shops (stays third, updated copy):**

```html
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-12 wow fadeInUp group" data-wow-delay=".2s">
              <div
                class="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary"
              >
                <span
                  class="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45"
                ></span>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21V13L18 10H6L3 13V21Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                  <path d="M3 13H21" stroke="white" stroke-width="1.5"/>
                  <path d="M9 13V21" stroke="white" stroke-width="1.5"/>
                  <path d="M6 10V4C6 3.44772 6.44772 3 7 3H17C17.5523 3 18 3.44772 18 4V10" stroke="white" stroke-width="1.5"/>
                  <path d="M10 7H14" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
              <h4 class="mb-3 text-xl font-bold text-dark dark:text-white">
                For Repair Shops
              </h4>
              <p class="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Receive repair requests automatically based on your location and availability. Submit offers, manage jobs, and grow your business.
              </p>
              <a
                href="/accounts/login/"
                class="text-base font-medium text-primary hover:text-primary/80"
              >
                Sign In
              </a>
            </div>
          </div>
```

**Step 2: Verify** — Open browser, check Features section shows Fleet Managers first, then Drivers, then Repair Shops. Confirm Sign In links on Fleet Managers and Repair Shops cards.

**Step 3: Commit**

```bash
git add index.html
git commit -m "reorder features fleet-first and enrich copy with real product capabilities"
```

---

### Task 6: Update footer tagline

**Files:**
- Modify: `index.html:664-665`

**Step 1: Replace footer tagline**

Find:
```
                The all-in-one truck repair management platform for fleets, drivers, and shops.
```

Replace with:
```
                Fleet management platform for trucking — inspections, maintenance, and daily operations.
```

**Step 2: Verify** — Scroll to footer, confirm new tagline.

**Step 3: Commit**

```bash
git add index.html
git commit -m "update footer tagline to match platform positioning"
```

---

### Task 7: Add Daily Operations to navigation

**Files:**
- Modify: `index.html` — navbar links area

**Step 1: Add "Daily Ops" nav link**

In the navbar, find the nav links list and add a link to `#daily-ops` between "How It Works" and "Features". Find the nav links around lines 62-88. Look for the existing menu items.

Add after the "How It Works" `<li>`:

```html
                  <li class="flex">
                    <a
                      href="#daily-ops"
                      class="ud-menu-scroll flex py-2 text-base font-medium text-body-color dark:text-dark-6 lg:ml-7 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:dark:text-white xl:ml-12"
                    >
                      Daily Ops
                    </a>
                  </li>
```

**Step 2: Verify** — Click "Daily Ops" in navbar, confirm smooth scroll to new section. Confirm active highlighting works on scroll.

**Step 3: Commit**

```bash
git add index.html
git commit -m "add Daily Ops link to navigation bar"
```

---

### Task 8: Final verification

**Step 1:** Open `index.html` in browser at full desktop width. Scroll through all sections:
- Hero: new headline and subheading
- How It Works: updated copy with AI and verified shops
- Daily Operations: new section with 3 cards
- Features: Fleet Managers first, enriched copy
- Footer: updated tagline

**Step 2:** Test at mobile width (375px). Confirm:
- Hamburger menu includes "Daily Ops" link
- All sections stack properly
- Text is readable

**Step 3:** Toggle dark mode. Confirm all sections render correctly.

**Step 4:** Test all nav links (smooth scroll + active state).

**Step 5:** Final commit if any fixes needed, otherwise done.
