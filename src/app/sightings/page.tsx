import { SightingList } from "@/components/sighting-list";

export const metadata = {
  title: "My Sightings | WildFinder",
  description: "View your saved animal sightings.",
};

export default function SightingsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold font-headline">My Sightings</h1>
                <p className="text-lg text-muted-foreground mt-2">A collection of all the animals you've identified.</p>
            </div>
            <SightingList />
        </div>
    );
}
