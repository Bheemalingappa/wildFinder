import { notFound } from "next/navigation";
import Image from "next/image";
import { animals } from "@/lib/animals";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Leaf, Globe, Shield } from "lucide-react";

interface SpeciesPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
    return animals.map((animal) => ({
      slug: animal.slug,
    }));
  }

export async function generateMetadata({ params }: SpeciesPageProps) {
  const animal = animals.find((animal) => animal.slug === params.slug);
  if (!animal) {
    return {
      title: "Animal Not Found",
    };
  }
  return {
    title: `${animal.name} | WildFinder`,
    description: animal.description,
  };
}

export default function SpeciesPage({ params }: SpeciesPageProps) {
  const animal = animals.find((animal) => animal.slug === params.slug);

  if (!animal) {
    notFound();
  }
  
  const getBadgeVariant = (status: string) => {
    switch(status.toLowerCase()) {
        case 'endangered':
        case 'critically endangered':
            return 'destructive';
        case 'vulnerable':
            return 'destructive';
        case 'least concern':
            return 'default';
        default:
            return 'secondary';
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
            <Card className="overflow-hidden sticky top-24">
                <div className="aspect-square relative">
                    <Image
                        src={animal.imageUrl}
                        alt={animal.name}
                        fill
                        data-ai-hint={animal.aiHint}
                        className="object-cover"
                    />
                </div>
            </Card>
        </div>

        <div className="md:col-span-3">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{animal.name}</h1>
            <p className="text-xl text-muted-foreground mt-1 mb-6 font-mono italic">{animal.scientificName}</p>
            <p className="text-lg leading-relaxed">{animal.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <Card>
                    <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                        <Globe className="w-8 h-8 text-accent" />
                        <CardTitle className="font-headline">Habitat</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{animal.habitat}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                        <Leaf className="w-8 h-8 text-accent" />
                        <CardTitle className="font-headline">Diet</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{animal.diet}</p>
                    </CardContent>
                </Card>
                <Card className="sm:col-span-2">
                    <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                        <Shield className="w-8 h-8 text-accent" />
                        <CardTitle className="font-headline">Conservation Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Badge variant={getBadgeVariant(animal.conservationStatus)} className="text-lg px-4 py-1">
                            {animal.conservationStatus}
                         </Badge>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
