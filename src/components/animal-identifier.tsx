"use client";

import { useState, useRef, type ChangeEvent } from "react";
import Image from "next/image";
import { Camera, Loader2, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import type { IdentifyAnimalOutput } from "@/ai/flows/identify-animal";
import { identifyAnimalAction } from "@/app/actions";
import { useSightings } from "@/hooks/use-sightings";

export function AnimalIdentifier() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageDataUri, setImageDataUri] = useState<string | null>(null);
  const [result, setResult] = useState<IdentifyAnimalOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { addSighting } = useSightings();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create a URL for the image to show a preview
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setResult(null);

      // Read the file as a data URI for the AI model
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageDataUri(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIdentifyClick = async () => {
    if (!imageDataUri) {
      toast({
        title: "No Image Selected",
        description: "Please select an image file to identify.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const identifyResult = await identifyAnimalAction({ photoDataUri: imageDataUri });
      setResult(identifyResult);
    } catch (error) {
      console.error("Identification failed:", error);
      toast({
        title: "Identification Failed",
        description: "Could not identify the animal. Please try another image.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSaveSighting = () => {
    if (result && imageDataUri) {
        addSighting({
            species: result.species,
            confidence: result.confidence,
            imageUrl: imageDataUri,
            date: new Date().toISOString(),
        });
        toast({
            title: "Sighting Saved!",
            description: `${result.species} has been added to your sightings.`,
        });
    }
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
      <Card
        className="w-full cursor-pointer hover:border-primary/50 transition-colors"
        onClick={() => fileInputRef.current?.click()}
      >
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Upload an Image</CardTitle>
          <CardDescription>Click or drag an image of an animal to identify it.</CardDescription>
        </CardHeader>
        <CardContent className="min-h-[300px] flex justify-center items-center bg-muted/50 rounded-md border-2 border-dashed border-muted-foreground/30">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
            accept="image/*"
          />
          {imagePreview ? (
            <Image
              src={imagePreview}
              alt="Animal preview"
              width={400}
              height={300}
              className="max-h-[300px] w-auto rounded-md object-contain"
            />
          ) : (
            <div className="text-center text-muted-foreground">
              <Camera className="mx-auto h-12 w-12" />
              <p>Select a photo</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="mt-4">
             <Button onClick={(e) => { e.stopPropagation(); handleIdentifyClick(); }} disabled={!imagePreview || isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Identifying...
                    </>
                ) : (
                    <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Identify Animal
                    </>
                )}
            </Button>
        </CardFooter>
      </Card>

      <Card className="w-full min-h-[480px]">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Identification Result</CardTitle>
          <CardDescription>Analysis from our expert AI zoologist.</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex flex-col items-center justify-center space-y-4 pt-10">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="text-muted-foreground">Analyzing image...</p>
            </div>
          )}
          {result && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary font-headline">Species</h3>
                <p className="text-2xl">{result.species}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary font-headline">Confidence</h3>
                <div className="flex items-center gap-4">
                  <Progress value={result.confidence * 100} className="w-full" />
                  <span className="font-mono text-lg font-bold">
                    {(result.confidence * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          )}
          {!isLoading && !result && (
            <div className="text-center text-muted-foreground pt-10">
              <p>Your identification result will appear here.</p>
            </div>
          )}
        </CardContent>
        {result && (
            <CardFooter>
                 <Button onClick={handleSaveSighting} variant="outline" className="w-full">
                    <Heart className="mr-2 h-4 w-4" />
                    Save Sighting
                </Button>
            </CardFooter>
        )}
      </Card>
    </div>
  );
}
