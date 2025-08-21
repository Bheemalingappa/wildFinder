'use server';

/**
 * @fileOverview Identifies the animal species from an image.
 *
 * - identifyAnimal - A function that handles the animal identification process.
 * - IdentifyAnimalInput - The input type for the identifyAnimal function.
 * - IdentifyAnimalOutput - The return type for the identifyAnimal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IdentifyAnimalInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo of an animal, as a data URI that must include a MIME type and use Base64 encoding. Expected format: data:<mimetype>;base64,<encoded_data>.'
    ),
});
export type IdentifyAnimalInput = z.infer<typeof IdentifyAnimalInputSchema>;

const IdentifyAnimalOutputSchema = z.object({
  commonName: z.string().describe('The common name of the identified animal species.'),
  scientificName: z.string().describe('The scientific name of the identified animal species.'),
  confidence: z.number().describe('The confidence level of the identification (0-1).'),
});
export type IdentifyAnimalOutput = z.infer<typeof IdentifyAnimalOutputSchema>;

export async function identifyAnimal(input: IdentifyAnimalInput): Promise<IdentifyAnimalOutput> {
  return identifyAnimalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'identifyAnimalPrompt',
  input: {schema: IdentifyAnimalInputSchema},
  output: {schema: IdentifyAnimalOutputSchema},
  prompt: `You are an expert zoologist. Your task is to identify the animal species in the provided image.

  Analyze the following image and provide the common name, scientific name, and your confidence level in the identification.

  Image: {{media url=photoDataUri}}
  `,
});

const identifyAnimalFlow = ai.defineFlow(
  {
    name: 'identifyAnimalFlow',
    inputSchema: IdentifyAnimalInputSchema,
    outputSchema: IdentifyAnimalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
