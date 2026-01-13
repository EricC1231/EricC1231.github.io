const projectList = document.getElementById("project-list");
const jamList = document.getElementById("jam-list");
const schoolList = document.getElementById("school-list");

const projects = [
    {
        title: "Procedural Exploration Prototype",
        description: "Minecraft-like game which focouses on procedural generation, exploration, and crafting",
        tech: ["Godot", "C#", "GDScript", "Marching Cubes", "threading", "shaders"],
        images: ["Biomes.jpg"],
        link: "https://ericc1231.itch.io/around-the-horizon"
    },
    {
        title: "Multiplayer Networked PVP Game",
        description: "n v n, multiplayer game which implements rollback and simulate ahead to keep sync across devices. Uses a custom fork of the godot game engine to support manually stepping the physics system",
        tech: ["Godot", "GDScript"],
        images: ["BubleSumo.jpg"],
        link: ""
    },
    {
        title: "Portal-like puzzle game",
        description: "A variant on the portal genre which has puzzles and portals but the portals instead of teleporting, changes the rotation of the world seamlessley 180 degrees.",
        tech: ["Unity", "C#"],
        link: ""
    }
];

const game_jams = [
    {
        title: "Charring Chill",
        description: "Single player first person shooter. Made in 48hrs in a group of 4 people",
        tech: ["Godot", "GDScript"],
        images: ["CharringChill.jpg"],
        link: "https://rokonono.itch.io/charring-cold"
    },
    {
        title: "Bubble Sumo",
        description: "Networked Multiplayer game where the players goal is to navigate an arena and using powerups to push other players off the arena. Made in 48hrs in a group of 2 people",
        tech: ["Godot", "GDScript", "TCP"],
        images: ["OldBubble.jpg"],
        link: "https://kotelmach.itch.io/bubble-sumo"
    },
    {
        title: "Space Shootma",
        description: "Play as a single spaceship in enemy territory fight the incoming waves of enemies and attach their disabled ships to increase your firepower. Made in 48hrs in a group of 4 people",
        tech: ["Godot", "GDScript", "Physics"],
        images: ["SpaceSTMA.jpg"],
        link: "https://snowyshadow.itch.io/spaceshootma"
    },
    {
        title: "Jeff The Snowman",
        description: "Single player 3D first person platformer, play as jeff the snowman trying to escape a volcano. Made in 48hrs in a group of 3 people",
        tech: ["Godot", "GDScript"],
        images: ["JTS.jpg"],
        link: "https://ericc1231.itch.io/jeff-the-snowman"
    }
]

const school_projects = [
    {
        title: "Tomb Of Noctis",
        description: "A 3D sidescrolling platformer which has a story mode, a infinite mode, and limited networked multiplayer support, Made in a group of 5 people.",
        tech: ["Godot", "GDScript"],
        images: ["TON1.jpg"],
        link: "https://ericc1231.itch.io/tomb-of-noctis"
    },
    {
        title: "USST Rocket telemetry software",
        description: "Telemetry software for the USST rocket for a comprtition hosted every year. The project consists of hardware and software collaboration to make a working rocket before the July deadline.",
        tech: ["Git", "PlatformIO", "C++", "Teensy", "I2C"],
        link: "https://github.com/USSTRocketry/infozilla"
    },
    {
        title: "USST Rocket ground station software",
        description: "Ground station side of the telemetry software for the USST rocket for a comprtition hosted every year. The project consists of software and hardware collabaration to recieve data from the rocket and display it on the built-in screen. Currently in early development.",
        tech: ["Git", "PlatformIO", "C++", "Python", "ESP32", "PyQt6"],
        link: "https://github.com/USSTRocketry/Houston"
    }
]

function createCard(project){
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
        ${project.images ? `<img src="./Images/${project.images}">` : ""}
        ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ""}
    `;
    return card;
}

projects.forEach(project => {
    const card = createCard(project);

    projectList.appendChild(card);
});

game_jams.forEach(project => {
    const card = createCard(project);

    jamList.appendChild(card);
});

school_projects.forEach(project => {
    const card = createCard(project);

    schoolList.appendChild(card);
});