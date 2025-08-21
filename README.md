# WildFinder: AI Animal Identifier

WildFinder is a web application that allows users to identify animal species by uploading a photo. It uses artificial intelligence to analyze the image and provide the common and scientific names of the animal, along with a confidence score for the identification.

This project is built with a modern web stack and serves as a demonstration of integrating AI-powered features into a Next.js application.

## Features

- **AI-Powered Animal Identification**: Upload an image of an animal, and the AI will identify the species.
- **Detailed Results**: View the common name, scientific name, and the AI's confidence level for each identification.
- **Personal Sightings Log**: Save your identified animals to a personal collection called "My Sightings". This data is stored locally in your browser.
- **Animal Database**: Browse a pre-populated list of animals to learn more about different species.
- **Responsive Design**: The application is fully responsive and works on devices of all sizes.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI**: [Firebase Genkit](https://firebase.google.com/docs/genkit) with Google's Gemini models.
- **State Management**: React Hooks and Context API for local state (e.g., sightings).

## Project Structure

The project follows a standard Next.js App Router structure. Here are the key directories:

-   `src/app/`: Contains the main pages and layouts of the application. Each folder represents a route.
    -   `src/app/page.tsx`: The main "Identify" page.
    -   `src/app/browse/`: The page for browsing the animal database.
    -   `src/app/sightings/`: The page that displays the user's saved sightings.
    -   `src/app/species/[slug]/`: The dynamic detail page for each animal in the database.
-   `src/components/`: Contains all the React components used throughout the application.
    -   `src/components/ui/`: Auto-generated ShadCN UI components.
    -   `src/components/animal-identifier.tsx`: The core component for the image upload and identification UI.
    -   `src/components/sighting-list.tsx`: Component to display the list of saved sightings.
-   `src/ai/`: Contains the Genkit implementation for the AI features.
    -   `src/ai/flows/identify-animal.ts`: The Genkit flow that defines the AI prompt and logic for identifying an animal from a photo.
-   `src/lib/`: Contains utility functions and static data.
    -   `src/lib/animals.ts`: Static data for the "Browse" page.
    -   `src/lib/utils.ts`: Utility functions, like `cn` for merging CSS classes.
-   `src/hooks/`: Contains custom React hooks.
    -   `src/hooks/use-sightings.ts`: A hook to manage the state of the user's saved sightings in `localStorage`.

## Getting Started

To get started with the application, navigate to the home page. You can upload an image of an animal to see the AI in action. Explore the "Browse" and "My Sightings" pages using the main navigation.
