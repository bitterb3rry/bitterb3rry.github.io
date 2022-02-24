(function() {
    Parse.initialize('cVrkrv0qAq90F6K087Atwn2lV4KDBJcNwRgPRmMA', 'oJpekGOaM9kFp9Su3vrAAlH2ZuZVE2ndSACR4ZVz');
    Parse.serverURL = 'https://parseapi.back4app.com/';

    const notesDisplay = document.querySelector("main ul");
    const addCardBtn = document.getElementById("add-card-btn");
    const addCardForm = document.getElementById("add-card-form");
    const background = document.getElementById("background");
    const backgroundBtn = document.getElementById("background-btn");

/*     const cancel = document.getElementsByClassName("cancel");

    cancel.addEventListener("click", function(event) {
        event.preventDefault();

        addCardForm.style.display = "none";
        background.style.display = "none";
    }) */

    addCardBtn.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("btn clicked")
        addCardForm.style.display = "block";
    });

    /* addCardForm.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("form submit")
        addCardForm.style.display = "none";
    }); */

    // listen for input form submit
    addCardForm.addEventListener('submit', function(event){
        event.preventDefault();

        // turn off form display
        console.log("form submit")
        addCardForm.style.display = "none";

        var name = document.getElementById("name").value;
        var note = document.getElementById("note").value;
        var flavor = document.getElementById("flavor").value;

        // check if there is input
        uploadInputForm(name, note, flavor);

        addCardForm.reset();
        /* window.location.reload(); */
    });


    async function uploadInputForm(name, note, flavor) {
        const card = new Parse.Object('Notes');

        card.set("Name", name);
        card.set("Notes", note);
        card.set("flavor", flavor);

        card.save().then((card) => {
            // Success
            console.log('New object created with objectId: ' + card.id);
        }, (error) => {
            // Save fails
            console.log('Failed to create new object, with error code: ' + error.message);
        });
    }

    async function displayCards() {
        const notes = Parse.Object.extend('Notes');
        const query = new Parse.Query(notes);
        try {
            const results = await query.find();
            results.forEach(function(eachCard) {
                // get the note, flavor, and name
                const id = eachCard.id;
                const note = eachCard.get('Notes');
                const flavor = eachCard.get('flavor');
                const displayCard = document.createElement("li");
                displayCard.setAttribute("class", `displayed-card`);
                displayCard.setAttribute("id", `r-${id}`);
                
                displayCard.innerHTML = `
                    <div class="card-flavor">
                        ${flavor}
                    </div>    

                    <div class="card-note">
                        <p>${note}</p>
                    </div>
                `;
                
                notesDisplay.append(displayCard);
            });
        } catch (error) {
            console.error('Error while fetching Notes', error);
        }
    };

    displayCards();

    backgroundBtn.addEventListener("click", function(event) {
        event.preventDefault();

        background.style.display = "block";
        addCardForm.style.display = "none";
    })
})();