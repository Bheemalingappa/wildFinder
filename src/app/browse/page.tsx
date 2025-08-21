import { AnimalBrowser } from "@/components/animal-browser";
import { animals } from "@/lib/animals";

export const metadata = {
  title: "Browse Animals | WildFinder",
  description: "Explore our database of amazing animals.",
};

export default function BrowsePage() {
  return (
    <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold font-headline">Animal Database</h1>
            <p className="text-lg text-muted-foreground mt-2">Discover and learn about various species.</p>
        </div>
        <AnimalBrowser animals={animals} />
    </div>
  );
}
