//
// Dane jest pole tekstowe, w którym użytkownik podaje frazę oczekując listy podobych słów. Dla przykładu
// fraza fra, powiązana jest z:
// “translate",
// "translation",
// "translator",
// "trap",
// "travel",
// "tray”.
// Implementacja strony serwerowej zastąpiona jest lokalnym sprawdzeniem słownika
// https://github.com/bevacqua/correcthorse/blob/master/wordlist.json
//

async function fetchDataFromServer() {
    const searchEndPoint = "https://raw.githubusercontent.com/bevacqua/correcthorse/refs/heads/master/wordlist.json";
    const response = await fetch(searchEndPoint);
    if (response.ok) {
        return await response.json();
    }
}

function filterData(query, dict) {
    return dict.filter(word => word.startsWith(query));
}

class App {
    #areListenersNotSet = true;
    #nodeResults;
    #queryInput;

    initialize() {
        this.#appendHTML();
        this.#addListeners();
    }

    #appendHTML() {
        const queryInput = document.createElement("input");
        this.#queryInput = queryInput;
        document.body.append(queryInput);

        const divResult  = document.createElement("div");
        this.#nodeResults = divResult;
        document.body.append(divResult);
    }
    
    #clearResults() {
        this.#nodeResults.replaceChildren([]);
    }
    
    #displayResults(wordList) {
        for(let wordTxt of wordList) {
            const wordDiv = document.createElement("div");
            wordDiv.textContent = wordTxt;
            this.#nodeResults.append(wordDiv);
        }
    }
    
    async #handleNewInput() {
        const json = await fetchDataFromServer();
        const wordList = filterData(this.#queryInput.value, json);
        this.#clearResults();
        this.#displayResults(wordList);
    }

    #addListeners() {
        if(this.#areListenersNotSet) {
            this.#queryInput.addEventListener("input", () => this.#handleNewInput());
            this.#areListenersNotSet = false;
        }
    }
}

new App().initialize();
