"use server";

import { identifyAnimal, type IdentifyAnimalInput, type IdentifyAnimalOutput } from "@/ai/flows/identify-animal";

export async function identifyAnimalAction(
  input: IdentifyAnimalInput
): Promise<IdentifyAnimalOutput> {
  try {
    const output = await identifyAnimal(input);
    return output;
  } catch (error) {
    console.error("Error in identifyAnimalAction:", error);
    throw new Error("Failed to identify animal.");
  }
}
