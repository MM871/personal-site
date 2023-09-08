const greetingBank = ["Hi", "Hello", "Greetings", "Salutations", "Hey", "Bonjour", "Namaskaram", "Hola", "Hallo"];
const greetingElement = document.getElementById("hi");

const greetingChange = () => {
    const randomGreeting = greetingBank[Math.floor(Math.random() * greetingBank.length)];
    greetingElement.textContent = randomGreeting;
};

setInterval(greetingChange, 2000);

const greetingElementColour = document.getElementById("hi");

const changeHiColour = (color) => {
    document.documentElement.style.setProperty("--greeting-colour", color);
}
const randomColour = () => {
    const letters = "0123456789ABCDEF";
    let colour = "#";
    for (let i = 0; i < 6; i++){
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

function theNewColour() {
    const newColour = randomColour();
    changeHiColour(newColour);
}

setInterval(theNewColour, 2000);
