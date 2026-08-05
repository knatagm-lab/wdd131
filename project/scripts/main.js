document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const destinations = [
    {
        name: "Cartagena",
        image: "images/cartagena.webp",
        alt: "Historic center of Cartagena",
        description: "A colorful colonial city on Colombia's Caribbean coast."
    },
    {
        name: "Guatapé",
        image: "images/guatape.webp",
        alt: "Guatapé and El Peñon Rock",
        description: "known for its vibrant streets and breathtaking views."
    },
    {
        name: "Las Lajas Sanctuary",
        image: "images/laslajas.webp",
        alt: "Las Lajas Sanctuary",
        description: "A magnificent Gothic church built over a canyon."
    },
    {
        name: "Tatacoa Desert",
        image: "images/tatacoa.webp",
        alt: "Tatacoa Desert",
        description: "A unique desert famous for incredible landscapes and stargazing."
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
