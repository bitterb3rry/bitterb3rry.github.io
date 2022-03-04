(function() {
    Parse.initialize('cVrkrv0qAq90F6K087Atwn2lV4KDBJcNwRgPRmMA', 'oJpekGOaM9kFp9Su3vrAAlH2ZuZVE2ndSACR4ZVz');
    Parse.serverURL = 'https://parseapi.back4app.com/';

    const body = document.querySelector("body");

    const instruct = document.getElementById("user-instruction");
    const closeInstruct = document.getElementById("close-instruction");

    const charactersPg = document.getElementById("characters");
    const backgroundPg = document.getElementById("background");
    const purposePg = document.getElementById("purpose");

    const toBg = document.getElementById("btn-to-bg");
    const toPurpose = document.getElementById("btn-to-purpose");
    const toMain = document.getElementById("btn-to-main");

    const header = document.querySelector("header");
    const main = document.querySelector("main");

    const title = document.getElementById("title-box");
    const notesDisplay = document.querySelector("main ul");
    const addCardBtn = document.getElementById("add-card-btn");
    const addCardForm = document.getElementById("add-card-form");
    const backgroundOverlay = document.getElementById("background-overlay");

    const cancelForm = document.getElementById("cancel-form");
    const cancelBg = document.getElementById("cancel-bg");

    const sweet = document.getElementById("fltr-sweet");

    /* user test overlay */

    closeInstruct.addEventListener("click", function(event) {
        event.preventDefault();

        instruct.className = "hidden-display";
        charactersPg.className = "show-display";
    })

    /* opening js */
/*     const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const characters = {
        start: [0, 5, 8],
        stop: [4, 7, 10],
        line: [line1, line2, line3]
    } */

    /* opening nav buttons */
    toBg.addEventListener("click", function(event) {
        event.preventDefault();

        charactersPg.className = "hidden-display";
        
        /* backgroundPg.className = "show-display"; */
        /* purposePg.className = "show-display" */
        header.className = "show-display";
        main.className = "show-display";

        body.style.backgroundColor = "#FCF9F2";
        body.style.display = "flex";
    });

/*     toPurpose.addEventListener("click", function(event) {
        event.preventDefault();

        backgroundPg.className = "hidden-display";

        purposePg.className = "show-display";
    }); */

/*     toMain.addEventListener("click", function(event) {
        event.preventDefault();

        purposePg.className = "hidden-display";
        
        header.className = "show-display";
        main.className = "show-display";

        body.style.backgroundColor = "#FCF9F2";
        body.style.display = "flex";
    }); */
    /* ---------------------------------------------------- */

    /* interactive nav elements */
    addCardBtn.addEventListener("mouseover", function(event) {
        addCardBtn.src = "./media/add-card-btn-action.svg";
    });
    addCardBtn.addEventListener("mouseout", function(event) {
        addCardBtn.src = "./media/add-card-btn.svg";
    });

    title.addEventListener("mouseover", function(event) {
        title.src = "./media/title-box-action.svg";
    });
    title.addEventListener("mouseout", function(event) {
        title.src = "./media/title-box.svg";
    });

    /* open input form */
    addCardBtn.addEventListener("click", function(event) {
        event.preventDefault();
        /* console.log("btn clicked") */
        addCardForm.style.display = "block";
    });

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
       /*  uploadInputForm(name, note); */

        addCardForm.reset();
        document.querySelectorAll("#flavor-container input").checked= "false";

        /* add loading screen before this reload to inform the user */
        /* window.location.reload(); */
        notesDisplay.innerHTML = ``;
        displayCards();
    });

    /* close overlays */
    cancelForm.addEventListener("click", function(event) {
        event.preventDefault();
        addCardForm.reset();
        document.querySelectorAll("#flavor-container input").checked= "false";
        addCardForm.style.display = "none";
    })

    cancelBg.addEventListener("click", function(event) {
        event.preventDefault();
        backgroundOverlay.style.display = "none";
    })

    /* database functions */
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

                    <!-- after every note, add a swatch -->
                    <div>
                    </div>
                `;
                
                notesDisplay.append(displayCard);
            });
        } catch (error) {
            console.error('Error while fetching Notes', error);
        }
    };

    displayCards();

    /* filters */
    /* sweet.addEventListener("click", function(event) {
        const notes = Parse.Object.extend('Notes');
        const query = new Parse.Query(notes);
        try {
            const results = await query.find();
            results.forEach(function(eachCard) {}
        }
    }); */
})();