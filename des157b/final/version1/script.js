Parse.initialize('cVrkrv0qAq90F6K087Atwn2lV4KDBJcNwRgPRmMA', 'oJpekGOaM9kFp9Su3vrAAlH2ZuZVE2ndSACR4ZVz');
Parse.serverURL = 'https://parseapi.back4app.com/';

const notes = document.querySelector("main ol");
const addCardBtn = document.getElementById("add-card-btn");
const addCardForm = document.getElementById("add-card-form");

addCardBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("btn clicked")
    addCardForm.style.display = "block";
});

addCardForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("form submit")
    addCardForm.style.display = "none";
});

/* async function displayCards() {
    try {
        const results = await query.find();
        results.forEach(function(eachCard) {
            // get the note, flavor, and name
            const displayCard = document.createElement("li");
            displayCard.setAttribute("id", `r-${id}`);
            
            displayCard.innerHTML = `
            `;
            
            notes.append(displayCard);
        });
    } catch (error) {
        console.error('Error while fetching Friend', error);
    }
};

displayCards(); */