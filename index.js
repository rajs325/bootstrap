fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(charcters => {
	renderCharacters(charcters.results)
});

function renderCharacters(characters) {
  characters.forEach(character => {
    const cardsContainer = document.querySelector('#cards-container');
    const div = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('h3');
    const species = document.createElement('h3');
    const like = document.createElement('button');
    div.classList = 'card'
    image.classList = 'card-img'
    like.classList = 'empty'
    image.src = character.image
    name.innerText = `Name: ${character.name}`
    species.innerText =`Species: ${character.species}`
    like.textContent = 'like'
    div.appendChild(image)
    div.appendChild(name)
    div.appendChild(species)
    div.appendChild(like)
    cardsContainer.appendChild(div)
  });
};
