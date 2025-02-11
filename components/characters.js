const characters = [
    {
      name: "Coconut",
      type: "Chihuahua",
      description: "",
      pictures: [
        "pictures/coconut.webp" // Add more paths as needed
      ],
      power: "Intimidation",
      weakness: "Action"
    },
    {
      name: "Brutus",
      type: "Doberman",
      description: "",
      pictures: [
        "pictures/brutus.webp"
      ],
      power: "Aggression",
      weakness: "Singing"
    },
    {
      name: "Matches",
      type: "Doberman",
      description: "",
      pictures: [
        "pictures/matches.webp"
      ],
      power: "Chaos",
      weakness: "Ice Cream"
    },
    {
      name: "AppleHead",
      type: "Chihuahua",
      description: "",
      pictures: [
        "pictures/apple.webp"
      ],
      power: "Persistence",
      weakness: "Unknown"
    },
    {
      name: "Cliff Howler",
      type: "German Shepherd",
      description: "",
      pictures: [
        "pictures/cliff_howler.webp"
      ],
      power: "Infiltrator/ Reconnaissance",
      weakness: "Camera Flashes"
    },
    {
      name: "Marbles",
      type: "Maine Coon",
      description: "",
      pictures: [
        "pictures/marbles.webp"
      ],
      power: "Intel",
      weakness: "Ball of yarn"
    },
    {
      name: "Pearl(s)",
      type: "Poodle",
      description: "",
      pictures: [
        "pictures/pearl.webp"
      ],
      power: "Cunningness/ Duplication",
      weakness: "Shiny objects"
    },
    {
      name: "Raizor / Slicer",
      type: "Bearded Lizard",
      description: "",
      pictures: [
        "pictures/razor.webp",
        "pictures/slicer.webp"
      ],
      power: "Wisdom",
      weakness: "???"
    },
    {
      name: "Brix Bruiser",
      type: "Cane Corso Mastiff",
      description: "",
      pictures: [
        "pictures/brix.webp"
      ],
      power: "Brute Force",
      weakness: "Agility"
    },
    {
      name: "Duke",
      type: "Kangal",
      description: "",
      pictures: [
        "pictures/macho.webp"
      ],
      power: "Durability",
      weakness: "Team Work"
    },
    {
      name: "Raizor",
      type: "Beared Lizard",
      description: "",
      pictures: [
        "pictures/razor.webp"
      ],
      power: "Wisdom",
      weakness: "???"
    },
    {
      name: "Slicer",
      type: "Beared Lizard",
      description: "",
      pictures: [
        "pictures/slicer.webp"
      ],
      power: "Wisdom",
      weakness: "???"
    },
  ];

export function showDetails(characterName) {
  const character = characters.find((char) => char.name === characterName);
  if (character) {
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.pictures[0]}" alt="${character.name}" style="width:200px;">
      <p><strong>Type:</strong> ${character.type}</p>
      <p><strong>Power:</strong> ${character.power}</p>
      <p><strong>Weakness:</strong> ${character.weakness}</p>
      <p>${character.description}</p>
    `;
  } else {
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
      <p>Character not found.</p>
      <a href="index.html">Back to List</a>
    `;
    console.error("Character not found");
  }
}

export default characters;