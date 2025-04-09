quotes = [
    "Жизнь — это то, что происходит, пока вы заняты строить другие планы. — Джон Леннон",
    "Не бойтесь быть медленными; бойтесь оставаться на месте. — Китайская пословица",
    "Успех — это не конечная точка, неудача — это не фатально: важно только мужество продолжать. — Уинстон Черчилль",
    "Секрет успеха в том, чтобы начать. — Марк Твен",
    "Вы никогда не сможете пересечь океан, если не осмелитесь потерять берег из виду. — Христофор Колумб",
    "Не бей по тормозам на разгоне — кент",
    "Взял ножик - реж, взял дошик - ешь — Одноклассник"
];

quoteElement = document.getElementById('quote');
historyElement = document.getElementById('history');

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
    quote = getRandomQuote();
    quoteElement.textContent = quote;

    const historyItem = document.createElement('li');
    historyItem.textContent = quote;
    historyElement.appendChild(historyItem);
}

document.getElementById('copy-quote').addEventListener('click', () => {
    navigator.clipboard.writeText(quoteElement.textContent).then(() => {
        alert('Цитата скопирована в буфер обмена!');
    });
});

document.getElementById('new-quote').addEventListener('click', displayQuote);
displayQuote();
