import Link from "next/link";
import Image from "next/image";
import type { Animal } from "@/lib/animals";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface AnimalCardProps {
  animal: Animal;
}

export function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <Link href={`/species/${animal.slug}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/50 group-hover:-translate-y-1">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image
              src={animal.imageUrl}
              alt={animal.name}
              fill
              data-ai-hint={animal.aiHint}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className="p-4 bg-card">
          <h3 className="text-lg font-semibold font-headline truncate">{animal.name}</h3>
        </CardFooter>
      </Card>
    </Link>
  );
}
