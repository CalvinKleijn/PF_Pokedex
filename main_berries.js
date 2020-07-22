const berry_container = document.getElementById('berry_container');

const fetchBerries = async () => {
	for (let i = 1; i <= 12; i++) {
		await getBerry(i);
	}
};

const getBerry = async id => {
	const url = `https://pokeapi.co/api/v2/berry/${id}`;
	const res = await fetch(url);
	const berry = await res.json();
    createBerryCard(berry);
};

function createBerryCard(berry) {
	const berryEl = document.createElement('div');
	berryEl.classList.add('berry');

    const name = berry.item.name[0].toUpperCase() + berry.item.name.slice(1);
	const berryInnerHTML = `
        <div class="info">
        <span class="number">#${berry.id}</span>
            <h3 class="name">${name}</h3>
            <p>Size: ${berry.size}</p>
            <p>Firmness: ${berry.firmness.name}</p>
            <p>Growthtime: ${berry.growth_time} hours</p>
        </div>
    `

	berryEl.innerHTML = berryInnerHTML;

	berry_container.appendChild(berryEl);
}
fetchBerries();
