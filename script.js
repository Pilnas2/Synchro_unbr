// Získání elementu tlačítka pro přidání novinky
const addButton = document.querySelector('#add-button');

// Získání elementu pro vstup novinky
const newsInput = document.querySelector('#news-input');

// Získání elementu seznamu novinek
const newsList = document.querySelector('#news-list');

// Funkce pro přidání novinky
function addNews() {
  // Získání textu z vstupu novinky
  const newsText = newsInput.value;

  // Pokud je text novinky prázdný, nic se neprovede
  if (!newsText) {
    return;
  }

  // Vytvoření nového elementu pro novinku
  const newsItem = document.createElement('li');

  // Nastavení textu novinky
  newsItem.textContent = newsText;

  // Přidání nové novinky na konec seznamu novinek
  newsList.appendChild(newsItem);

  // Vymazání textu vstupu novinky
  newsInput.value = '';
}

// Přidání posluchače na tlačítko pro přidání novinky
addButton.addEventListener('click', addNews);
