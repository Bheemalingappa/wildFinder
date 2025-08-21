"use client";

import { useState, useEffect, useCallback } from "react";

export interface Sighting {
  species: string;
  scientificName: string;
  confidence: number;
  imageUrl: string;
  date: string;
}

const SIGHTINGS_STORAGE_KEY = "wildfinder_sightings";

export function useSightings() {
  const [sightings, setSightings] = useState<Sighting[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(SIGHTINGS_STORAGE_KEY);
      if (item) {
        setSightings(JSON.parse(item));
      }
    } catch (error) {
      console.error("Failed to load sightings from localStorage", error);
    } finally {
        setIsLoaded(true);
    }
  }, []);

  const addSighting = useCallback((sighting: Sighting) => {
    setSightings((prevSightings) => {
      const newSightings = [sighting, ...prevSightings];
      try {
        window.localStorage.setItem(SIGHTINGS_STORAGE_KEY, JSON.stringify(newSightings));
      } catch (error) {
        console.error("Failed to save sightings to localStorage", error);
      }
      return newSightings;
    });
  }, []);

  const removeSighting = useCallback((sightingDate: string) => {
    setSightings((prevSightings) => {
      const newSightings = prevSightings.filter(s => s.date !== sightingDate);
      try {
        window.localStorage.setItem(SIGHTINGS_STORAGE_KEY, JSON.stringify(newSightings));
      } catch (error) {
        console.error("Failed to update sightings in localStorage", error);
      }
      return newSightings;
    });
  }, []);

  return { sightings, addSighting, removeSighting, isLoaded };
}
