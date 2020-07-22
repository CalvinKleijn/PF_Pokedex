const location_container = document.getElementById('location_container');

const fetchLocations = async () => {
	for (let i = 1; i <= 15; i++) {
		await getLocation(i);
	}
};

const getLocation = async id => {
	const url = `https://pokeapi.co/api/v2/location/${id}`;
	const res = await fetch(url);
	const location = await res.json();
    createLocationCard(location);
};

function createLocationCard(location) {
	const locationEl = document.createElement('div');
	locationEl.classList.add('location');

    const locationInnerHTML = `
        <div class="info">
        <span class="number">#${location.id}</span>
            <h3 class="name">${location.names[1].name}</h3>
            <p>Region: ${location.region.name}</p>
            <p>Generation: ${location.game_indices[0].generation.name}</p>
        </div>
    `

	locationEl.innerHTML = locationInnerHTML;

	location_container.appendChild(locationEl);
}
fetchLocations();
