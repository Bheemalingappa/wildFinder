"use client";

import Image from "next/image";
import Link from "next/link";
import { useSightings } from "@/hooks/use-sightings";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Camera } from "lucide-react";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";

export function SightingList() {
  const { sightings, removeSighting, isLoaded } = useSightings();

  if (!isLoaded) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i}>
                    <CardContent className="p-0">
                        <Skeleton className="aspect-square w-full" />
                    </CardContent>
                    <CardFooter className="p-4 flex flex-col items-start gap-2">
                         <Skeleton className="h-6 w-3/4" />
                         <Skeleton className="h-4 w-1/2" />
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
  }

  if (sightings.length === 0) {
    return (
      <div className="text-center py-16 border-2 border-dashed rounded-lg">
        <h2 className="text-2xl font-semibold font-headline">No Sightings Yet</h2>
        <p className="text-muted-foreground mt-2 mb-4">
          Start your collection by identifying an animal.
        </p>
        <Button asChild>
          <Link href="/">
            <Camera className="mr-2 h-4 w-4" />
            Identify an Animal
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {sightings.map((sighting) => (
        <Card key={sighting.date} className="flex flex-col">
          <CardHeader className="p-0">
            <div className="aspect-square relative">
              <Image
                src={sighting.imageUrl}
                alt={`Sighting of ${sighting.species}`}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4 flex-grow">
            <CardTitle className="text-xl font-headline">{sighting.species}</CardTitle>
            <p className="text-sm text-muted-foreground italic">{sighting.scientificName}</p>
            <p className="text-sm text-muted-foreground mt-1">
                {new Date(sighting.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <div className="mt-2">
                <Badge variant="secondary">
                    Confidence: {(sighting.confidence * 100).toFixed(1)}%
                </Badge>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => removeSighting(sighting.date)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Remove
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
