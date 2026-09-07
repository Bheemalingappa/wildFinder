# 🐾 WildFinder
### AI-Powered Animal Identification & Wildlife Discovery Platform

> **Identify wildlife from a photograph, explore species information, and build your personal wildlife sightings collection.**

WildFinder is an **AI-powered web application** that allows users to identify animal species from uploaded photographs.

The application combines **Next.js, TypeScript, React, Tailwind CSS, and Generative AI** to demonstrate how AI-powered image analysis can be integrated into a modern web application.

Users can upload an animal image, receive an AI-generated identification, explore species information, and save interesting discoveries to their personal **My Sightings** collection.

---

# 🌿 Project Overview

Wildlife identification can be challenging for people who encounter unfamiliar animals in nature, parks, forests, or educational settings.

WildFinder provides a simple workflow:

```text
Upload Animal Photo
        ↓
AI Image Analysis
        ↓
Species Identification
        ↓
Common + Scientific Name
        ↓
Confidence Score
        ↓
Save to My Sightings
```

The project demonstrates the integration of **multimodal AI with a production-style Next.js frontend**.

---

# ✨ Features

## 🔍 AI-Powered Animal Identification

Upload a photograph and let the AI analyze the image.

The identification experience provides:

- 🐾 Common animal name
- 🔬 Scientific name
- 📊 Confidence score
- 🤖 AI-generated identification result

---

## 📸 Image-Based Identification

Users can provide an animal photograph directly through the web interface.

```text
User
 │
 ▼
Select Image
 │
 ▼
Image Processing
 │
 ▼
AI Identification Flow
 │
 ▼
Animal Result
```

---

## 📚 Animal Database

WildFinder includes a pre-populated animal database that allows users to explore species without performing an AI identification.

Users can browse available animals and open individual species pages.

Example:

```text
Browse
  │
  ├── 🦁 Lion
  ├── 🐘 Elephant
  ├── 🐅 Tiger
  ├── 🦊 Fox
  └── 🦅 Eagle
```

---

## 🔬 Species Detail Pages

Each animal can have its own dynamic detail page.

```text
/species/[slug]
```

This provides a scalable structure for adding more species to the platform.

---

## ⭐ My Sightings

Users can save animals they identify to a personal collection.

The **My Sightings** feature allows users to revisit previous discoveries.

The current implementation stores this information locally in the browser using `localStorage`.

```text
AI Identification
       ↓
Save Sighting
       ↓
Browser localStorage
       ↓
My Sightings
```

No account is required for the local sightings functionality.

---

# 🧠 AI Architecture

The AI functionality is implemented using **Firebase Genkit** with Google's Gemini models.

The core identification flow is located at:

```text
src/ai/flows/identify-animal.ts
```

Conceptually:

```text
┌──────────────────────┐
│     User Upload      │
│    Animal Image      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Animal Identifier  │
│      Component       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Genkit AI Flow    │
│ identify-animal.ts   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Gemini Multimodal  │
│        Model         │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Identification Result│
│ Name + Scientific    │
│ Name + Confidence    │
└──────────────────────┘
```

---

# 🏗️ Application Architecture

WildFinder follows the modern **Next.js App Router architecture**.

```text
┌──────────────────────────────────────┐
│             Next.js App              │
│                                      │
│  Pages + Layouts + Route Structure   │
└───────────────────┬──────────────────┘
                    │
                    ▼
┌──────────────────────────────────────┐
│             Components               │
│                                      │
│ Animal Identifier │ Sightings │ UI   │
└───────────────────┬──────────────────┘
                    │
                    ▼
┌──────────────────────────────────────┐
│          React State Layer            │
│                                      │
│ Hooks + Context + Local State        │
└───────────────────┬──────────────────┘
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
┌─────────────────┐   ┌─────────────────┐
│   localStorage  │   │   Genkit / AI   │
│   Sightings      │   │ Identification  │
└─────────────────┘   └─────────────────┘
```

---

# 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js |
| Architecture | Next.js App Router |
| Language | TypeScript |
| Frontend | React |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Generative AI | Firebase Genkit |
| AI Models | Google Gemini |
| State Management | React Hooks + Context API |
| Client Storage | Browser localStorage |
| Package Management | npm |

---

# 📂 Project Structure

```text
WildFinder/
│
├── src/
│   │
│   ├── app/
│   │   ├── page.tsx
│   │   ├── browse/
│   │   ├── sightings/
│   │   └── species/
│   │       └── [slug]/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── animal-identifier.tsx
│   │   └── sighting-list.tsx
│   │
│   ├── ai/
│   │   └── flows/
│   │       └── identify-animal.ts
│   │
│   ├── lib/
│   │   ├── animals.ts
│   │   └── utils.ts
│   │
│   └── hooks/
│       └── use-sightings.ts
│
├── public/
├── package.json
├── next.config.*
├── tailwind.config.*
└── README.md
```

---

# 🖥️ Application Pages

## 🏠 Identify

The primary AI-powered page.

Users can:

1. Upload an animal image
2. Start identification
3. View the AI result
4. Save the sighting

---

## 🐾 Browse

Explore the application's animal database.

```text
Browse Animals
      ↓
Species Cards
      ↓
Select Animal
      ↓
Species Details
```

---

## ⭐ My Sightings

View previously saved animal identifications.

Sightings are stored locally in the browser.

---

## 🔬 Species Details

Dynamic species pages use:

```text
/species/[slug]
```

This allows each animal to have a dedicated route.

---

# 🔄 End-to-End User Flow

```text
              ┌──────────────┐
              │     User     │
              └──────┬───────┘
                     │
                     ▼
             Upload Photograph
                     │
                     ▼
          Animal Identifier UI
                     │
                     ▼
              Genkit AI Flow
                     │
                     ▼
             Gemini Analysis
                     │
                     ▼
        ┌────────────────────────┐
        │ Identification Result  │
        │                        │
        │ Common Name            │
        │ Scientific Name        │
        │ Confidence             │
        └───────────┬────────────┘
                    │
             ┌──────┴──────┐
             │             │
             ▼             ▼
         Explore        Save
          Species       Sighting
             │             │
             │             ▼
             │        localStorage
             │             │
             └──────┬──────┘
                    ▼
              My Sightings
```

---

# 📊 AI Identification Result

A typical result can be represented conceptually as:

```text
┌─────────────────────────────┐
│ 🐾 Animal Identification    │
│                             │
│ Common Name: Tiger          │
│ Scientific Name: Panthera   │
│ Confidence: 94%             │
│                             │
│ [ Save Sighting ]           │
└─────────────────────────────┘
```

> AI confidence scores should be treated as model estimates rather than guarantees of biological identification accuracy.

---

# 💾 Local Data Architecture

The current **My Sightings** implementation uses browser storage.

```text
React Application
       │
       ▼
useSightings Hook
       │
       ▼
localStorage
       │
       ├── Save
       ├── Read
       └── Remove
```

This makes the feature simple and lightweight without requiring user authentication or a database.

---

# 🎨 UI & UX

The application uses:

- Responsive layouts
- Tailwind CSS
- shadcn/ui components
- Reusable React components
- Dynamic routing
- Mobile-friendly interfaces
- Accessible UI patterns

The design is intended to make wildlife discovery simple for both desktop and mobile users.

---

# 📱 Responsive Design

WildFinder is designed to work across:

```text
Desktop
   │
   ├── Large displays
   │
   ▼
Tablet
   │
   ▼
Mobile
```

The interface adapts to different screen sizes while keeping the identification workflow straightforward.

---

# ⚡ Application Workflow

```text
                    WildFinder
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
      Identify       Browse       Sightings
          │             │             │
          ▼             ▼             ▼
       Upload        Species       Saved
       Image         Database      Animals
          │             │             │
          ▼             ▼             ▼
       GenAI        Detail Page   localStorage
          │
          ▼
       Result
```

---

# 🔐 Privacy Considerations

The current sightings feature is client-side.

- Sightings are stored in the user's browser
- No account is required for saved sightings
- Local storage data remains tied to the browser/device
- Clearing browser storage can remove saved sightings

If the project is extended with cloud accounts, additional authentication and privacy controls should be introduced.

---

# 🚀 Future Roadmap

## Phase 1 — Current Platform

- [x] Next.js application
- [x] TypeScript
- [x] Responsive UI
- [x] AI animal identification
- [x] Common name identification
- [x] Scientific name identification
- [x] Confidence score
- [x] Animal database
- [x] Species detail pages
- [x] Personal sightings
- [x] Local persistence

## Phase 2 — Wildlife Intelligence

- [ ] Improved species classification
- [ ] Animal characteristic detection
- [ ] Habitat information
- [ ] Geographic distribution
- [ ] Similar-species comparison
- [ ] Identification history

## Phase 3 — Community Wildlife Platform

- [ ] User accounts
- [ ] Cloud-synchronized sightings
- [ ] Public wildlife observations
- [ ] Location-based sightings
- [ ] Community verification
- [ ] Wildlife observation maps

## Phase 4 — Advanced AI

- [ ] Multi-animal detection
- [ ] Image quality assessment
- [ ] Similar-species ranking
- [ ] Habitat-aware identification
- [ ] AI-generated educational explanations
- [ ] Wildlife conservation insights

---

# 🌍 Potential Impact

WildFinder can evolve beyond simple image classification into an educational and citizen-science platform.

### 🎓 Education

Help students learn:

- Animal species
- Scientific names
- Wildlife characteristics
- Biodiversity

### 🌿 Wildlife Awareness

Make wildlife information more accessible to everyday users.

### 🔬 Citizen Science

A future community-based version could allow users to contribute wildlife observations for research and conservation projects.

### 🗺️ Biodiversity Intelligence

Aggregated, appropriately governed sightings could eventually provide insights into wildlife distribution and observation patterns.

---

# 🧪 Evaluation Metrics

Future versions can be evaluated using:

| Metric | Purpose |
|---|---|
| Identification accuracy | Measure species prediction quality |
| Confidence calibration | Compare confidence with actual correctness |
| AI response time | Measure user experience |
| Successful identification rate | Measure usability |
| Sightings saved | Measure engagement |
| Mobile performance | Measure accessibility |
| AI failure rate | Identify difficult image cases |

---

# ⚠️ AI Identification Disclaimer

WildFinder is an AI-assisted identification tool.

AI predictions may be incorrect, particularly when:

- The animal is partially visible
- The photograph is blurry
- Lighting is poor
- Multiple similar species exist
- The image does not contain an animal
- The species is uncommon or outside the model's knowledge

For scientific, conservation, medical, legal, or safety-critical decisions, identification should be verified using appropriate expert or authoritative sources.

---

# 🛠️ Getting Started

## Prerequisites

Make sure you have:

- Node.js
- npm
- A configured Genkit environment
- Required Gemini/AI configuration

## Installation

```bash
git clone <repository-url>

cd WildFinder

npm install
```

## Development

```bash
npm run dev
```

Then open the local development server in your browser.

---

# 🔧 Development Architecture

The project separates major responsibilities into dedicated layers:

```text
UI
 ↓
React Components
 ↓
Hooks / Context
 ↓
Application Logic
 ↓
Genkit AI Flow
 ↓
Gemini Model
```

This separation makes the project easier to maintain and extend.

---

# 💡 Engineering Highlights

WildFinder demonstrates several practical software-engineering concepts:

- Modern Next.js App Router
- Type-safe TypeScript development
- Component-based React architecture
- Reusable UI components
- AI integration with Genkit
- Multimodal AI interaction
- Dynamic routing
- Client-side persistence
- Responsive web design
- Separation of AI logic from UI
- Modular project structure

---

# 🌟 What Makes WildFinder Interesting?

The project combines three layers:

```text
┌────────────────────────────┐
│       Modern Web App       │
│     Next.js + React        │
└──────────────┬─────────────┘
               │
               ▼
┌────────────────────────────┐
│       AI Intelligence      │
│     Genkit + Gemini        │
└──────────────┬─────────────┘
               │
               ▼
┌────────────────────────────┐
│     Wildlife Discovery     │
│   Species + Sightings      │
└────────────────────────────┘
```

This makes WildFinder a practical demonstration of **AI + full-stack web development + domain-focused user experience**.

---

# 📌 Project Status

**Status:** 🚧 Active / Demonstration Project

The current application focuses on AI-powered animal identification, species discovery, and local sightings management.

The roadmap describes potential extensions rather than guaranteed current functionality.

---

# 📜 License

This project is developed for **educational, experimentation, and portfolio purposes**.

---

<div align="center">

# 🐾 WildFinder

### Discover. Identify. Learn.

**AI-powered wildlife identification built with Next.js + TypeScript + GenAI.**

</div>
