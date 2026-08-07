document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const destinations = [
    {
        name: "Cocora Valley",
        image: "images/valledelcocora.webp",
        alt: "Wax palm trees in Cocora Valley",
        description: "Home to the world`s tallest wax palm trees and one of Colombia`s most iconic natural attractions.",
    
        highlights: [
        "Wax palm trees",
        "Hiking trails",
        "Coffee region"
        ]
    },
    {
        name: "Cartagena",
        image: "images/cartagena.webp",
        alt: "Historic center of Cartagena",
        description: "A colorful colonial city on Colombia's Caribbean coast.",

        highlights: [
            "Historic Walled City",
            "Caribbean beaches",
            "Local cuisine"
        ]
    },
    {
        name: "Guatapé",
        image: "images/guatape.webp",
        alt: "Guatapé and El Peñon Rock",
        description: "known for its vibrant streets and breathtaking views.",
        
        highlights: [
            "El Peñon Rock",
            "Colorful streets",
            "Boat tours"
        ]
    },
    {
        name: "Las Lajas Sanctuary",
        image: "images/laslajas.webp",
        alt: "Las Lajas Sanctuary",
        description: "A magnificent Gothic church built over a canyon.",
        
        highlights: [
            "Gothic architecture",
            "Scenic canyon",
            "Pilgrimage site"
        ]
    },
    {
        name: "Tatacoa Desert",
        image: "images/tatacoa.webp",
        alt: "Tatacoa Desert",
        description: "A unique desert famous for incredible landscapes and stargazing.",
    
        highlights: [
        "Stargazing",
        "Unique rock formations",
        "Nature photography"
        ]
    }
];

function displayDestinations () {

    const container = document.querySelector("#destinationCards");
    destinations.forEach(destination => {
        const card = document.createElement("section");
        
        card.innerHTML = `
        <img src="${destination.image}" alt="${destination.alt}" loading="lazy" width="1200" height="600">
        
        <div class="card-content">
            <h3>${destination.name}</h3>

            <p>${destination.description}</p>

            <a href="destinations.html" class="button">Learn More</a>
        
        </div>
    `;

        container.appendChild(card);
    });
}

const homeCards = document.querySelector("#destinationCards");
if (homeCards){
    displayDestinations();
}

function displayDestinationDetails() {
    const container = document.querySelector("#destinationList");
    destinations.forEach(destination => {
        const card = document.createElement("section");
        const highlights = destination.highlights
        .map(item => `<li>${item}</li>`)
        .join("");

        card.innerHTML = `
        <img 
        src="${destination.image}"
        alt="${destination.alt}"
        loading="lazy"
        width="1200"
        height="600">

        <div class="destination-info">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <h4>Highlights</h4>
            <ul>
            ${highlights}
            </ul>
        </div>
        `;

        container.appendChild(card);
    });

}

const destinationPage = document.querySelector("#destinationList");
if (destinationPage) {
    displayDestinationDetails();
}

const favoriteSelect = document.querySelector("#favoriteDestination");

if (favoriteSelect) {
    loadDestinationOptions();
}

function loadDestinationOptions() {
    const select = document.querySelector("#favoriteDestination");
    
    destinations.forEach(destination => {
        const option = document.createElement("option");
        option.value = destination.name;
        option.textContent = destination.name;
        select.appendChild(option);
    });
}

const contactForm = document.querySelector(".contact-form form");

if(contactForm) {
    contactForm.addEventListener("submit", saveContact);

function saveContact(event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;

    const destination = document.querySelector("#favoriteDestination").value;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    localStorage.setItem("visitorName", name);
    localStorage.setItem("favoriteDestination", destination);

    const message = document.querySelector("#confirmationMessage");
    message.textContent = 
    `Thank you, ${name}! We hope you enjoy visiting ${destination}! 🇨🇴`;

    message.style.display = "block";

    contactForm.reset();
    }
}

const welcome = document.querySelector("#welcomeMessage");

if (welcome) {

    const visitor = localStorage.getItem("visitorName");

    if (visitor) {
        welcome.innerHTML = `
            <h2>Welcome back, ${visitor}! 🇨🇴</h2>
            <p>Ready to continue exploring Colombia?</p>
        `;
    } else {
        welcome.style.display = "none";
    }
}


