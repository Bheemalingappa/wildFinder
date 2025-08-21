export interface Animal {
  name: string;
  slug: string;
  scientificName: string;
  description: string;
  habitat: string;
  diet: string;
  conservationStatus: string;
  imageUrl: string;
  aiHint: string;
}

export const animals: Animal[] = [
  {
    name: "Red Fox",
    slug: "red-fox",
    scientificName: "Vulpes vulpes",
    description: "The red fox is the largest of the true foxes and one of the most widely distributed members of the order Carnivora, being present across the entire Northern Hemisphere from the Arctic Circle to North Africa, North America and Eurasia.",
    habitat: "Forests, grasslands, mountains, and deserts. Also adapted to human environments like farms and suburban areas.",
    diet: "Omnivorous, with a diet consisting of rodents, rabbits, birds, and other small game, as well as fruits and vegetables.",
    conservationStatus: "Least Concern",
    imageUrl: "https://placehold.co/600x600.png",
    aiHint: "red fox",
  },
  {
    name: "Bald Eagle",
    slug: "bald-eagle",
    scientificName: "Haliaeetus leucocephalus",
    description: "The bald eagle is a bird of prey found in North America. A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle.",
    habitat: "Near large bodies of open water with an abundant food supply and old-growth trees for nesting.",
    diet: "Primarily fish, but also eats other birds, small mammals, and carrion.",
    conservationStatus: "Least Concern",
    imageUrl: "https://placehold.co/600x600.png",
    aiHint: "bald eagle",
  },
  {
    name: "Grizzly Bear",
    slug: "grizzly-bear",
    scientificName: "Ursus arctos horribilis",
    description: "The grizzly bear is a large population or subspecies of the brown bear inhabiting North America.",
    habitat: "Woodlands, forests, alpine meadows, and prairies. Often found near rivers and streams.",
    diet: "Omnivorous. Diet includes nuts, berries, fruit, leaves, and roots, as well as fish, rodents, and occasionally larger mammals.",
    conservationStatus: "Least Concern (globally), Threatened (in continental US)",
    imageUrl: "https://placehold.co/600x600.png",
    aiHint: "grizzly bear",
  },
  {
    name: "Monarch Butterfly",
    slug: "monarch-butterfly",
    scientificName: "Danaus plexippus",
    description: "The monarch butterfly is a milkweed butterfly in the family Nymphalidae. It may be the most familiar North American butterfly, and is considered an iconic pollinator species.",
    habitat: "Fields, meadows, and gardens where milkweed plants are found.",
    diet: "Nectar from flowers as adults; milkweed leaves as caterpillars.",
    conservationStatus: "Endangered",
    imageUrl: "https://placehold.co/600x600.png",
    aiHint: "monarch butterfly",
  },
  {
    name: "Gray Wolf",
    slug: "gray-wolf",
    scientificName: "Canis lupus",
    description: "The gray wolf is a large canine native to Eurasia and North America. It is the largest extant member of Canidae, with males averaging 40 kg and females 37 kg.",
    habitat: "Wilderness and remote areas, including forests, tundra, and grasslands.",
    diet: "Carnivorous, preying on large hoofed mammals like deer, elk, and moose.",
    conservationStatus: "Least Concern",
    imageUrl: "https://placehold.co/600x600.png",
    aiHint: "gray wolf",
  },
  {
    name: "Bottlenose Dolphin",
    slug: "bottlenose-dolphin",
    scientificName: "Tursiops truncatus",
    description: "The common bottlenose dolphin is the most well-known species of the family Delphinidae. They are intelligent and social animals.",
    habitat: "Temperate and tropical waters worldwide.",
    diet: "A variety of fish, squid, and crustaceans.",
    conservationStatus: "Least Concern",
    imageUrl: "https://placehold.co/600x600.png",
    aiHint: "bottlenose dolphin",
  },
  {
    name: "Giant Panda",
    slug: "giant-panda",
    scientificName: "Ailuropoda melanoleuca",
    description: "The giant panda is a bear native to south central China. It is characterised by its bold black-and-white coat and rotund body.",
    habitat: "Temperate bamboo forests in the mountains of southwestern China.",
    diet: "Almost entirely bamboo (99%).",
    conservationStatus: "Vulnerable",
    imageUrl: "https://placehold.co/600x600.png",
    aiHint: "giant panda",
  },
    {
    name: "African Elephant",
    slug: "african-elephant",
    scientificName: "Loxodonta africana",
    description: "The African bush elephant is the larger of the two species of African elephant. They are the largest land animals on Earth.",
    habitat: "Savannas, forests, and woodlands across sub-Saharan Africa.",
    diet: "Herbivorous. Their diet consists of grasses, leaves, bark, and fruit.",
    conservationStatus: "Endangered",
    imageUrl: "https://placehold.co/600x600.png",
    aiHint: "african elephant",
  },
];
