🧠 YOUR PROJECT (7thconf) — SIMPLE MAP

This is a Next.js app (React framework).
It builds a website using components instead of manual HTML pages.

⚙️ 1. MAIN IDEA (VERY IMPORTANT)

Your site works like this:

User opens page → Next.js chooses file → React components build UI → Tailwind styles it

So you are NOT writing normal HTML pages.

📁 2. FOLDER STRUCTURE (WHAT IT MEANS)
🟦 /app → PAGES (ROUTES)

This is your website structure.

Examples:
app/page.tsx → 🏠 Home page (/)
app/about/page.tsx → /about
app/contact/page.tsx → /contact
app/product/[id]/page.tsx → dynamic product page (/product/123)
app/configurator/page.tsx → /configurator
app/ram/page.tsx → /ram

👉 Think:

Each folder = URL page

🟪 layout.tsx

This is the global wrapper

It contains:

navbar
footer
shared design

👉 Think:

“Everything on the site is wrapped inside this file”

🎨 globals.css

Global styling file

BUT in your project:

mostly Tailwind is used
this file is just base setup
🧩 3. COMPONENTS (REUSABLE BLOCKS)
/components

This is the most important part.

You reuse these everywhere:

🧱 layout/
header.tsx → navbar
footer.tsx
loading-screen.tsx

👉 Controls full website structure

🌌 three/

This is your 3D stuff

hero-scene.tsx → main 3D scene on homepage
product-scene.tsx → 3D product view
ram-model.tsx → 3D RAM model
particles.tsx → background effects

👉 This is likely using:

Three.js or React Three Fiber
🎯 ui/

This is your UI library

Buttons, inputs, menus, etc.

Examples:

button.tsx
card.tsx
dialog.tsx
tabs.tsx

👉 Think:

Like building LEGO blocks for UI

✨ ui-custom/
reveal.tsx → custom animation/effect
🪝 4. hooks/
use-toast.ts

👉 This is React logic you reuse

Example:

showing notifications
🧠 5. lib/
utils.ts → helper functions
data.ts → fake or real data

👉 Example:

product lists
calculations
formatting functions
🧾 6. TYPES OF FILES YOU SEE
.tsx

React component (UI)

Example:

export default function Page() {
  return <div>Hello</div>
}

👉 This = page or component

.ts

Logic only (no UI)

Example:

utils
helpers
config
🚀 7. HOW EVERYTHING CONNECTS

Example flow:

User opens /product/1

Next.js looks at:

app/product/[id]/page.tsx
That page loads:
UI components (card.tsx)
3D scene (product-scene.tsx)
data (data.ts)
Tailwind styles everything
Layout wraps it (header/footer)
🧩 8. WHAT BOLT.NEW DID FOR YOU

Bolt basically:

generated structure
created components
wired routing
added Tailwind + 3D setup

BUT:
👉 It did NOT teach you how it works

That’s why it feels confusing.

🧭 9. WHAT YOU SHOULD FOCUS ON NOW

Don’t learn everything at once.

Step 1 (IMPORTANT)
JavaScript basics
variables
functions
arrays
objects
Step 2
React basics
components
props
state
Step 3
Next.js routing (your /app folder)
Step 4
TypeScript basics (.ts / .tsx)
🧠 FINAL SIMPLE TRUTH

You are NOT building:

HTML website

You ARE building:

component-based app (React + Next.js system)
