"use client";

import { useState } from "react";
import type { Animal } from "@/lib/animals";
import { Input } from "@/components/ui/input";
import { AnimalCard } from "./animal-card";
import { Search } from "lucide-react";

interface AnimalBrowserProps {
  animals: Animal[];
}

export function AnimalBrowser({ animals }: AnimalBrowserProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="relative mb-8 max-w-lg mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for an animal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10"
        />
      </div>

      {filteredAnimals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAnimals.map((animal) => (
            <AnimalCard key={animal.slug} animal={animal} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-muted-foreground">No animals found matching your search.</p>
        </div>
      )}
    </div>
  );
}
