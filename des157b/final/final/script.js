(function() {
    Parse.initialize('cVrkrv0qAq90F6K087Atwn2lV4KDBJcNwRgPRmMA', 'oJpekGOaM9kFp9Su3vrAAlH2ZuZVE2ndSACR4ZVz');
    Parse.serverURL = 'https://parseapi.back4app.com/';

    const body = document.querySelector("body");

    const charactersPg = document.getElementById("characters");

    const toMain = document.getElementById("btn-to-main");

    const header = document.querySelector("header");
    const main = document.querySelector("main");

    const title = document.getElementById("title-box");
    const notesDisplay = document.querySelector("main ul");
    const addCardBtn = document.getElementById("add-card-btn");
    const aboutBtn = document.getElementById("about-btn");
    const addCardForm = document.getElementById("add-card-form");
    const aboutOverlay = document.getElementById("about-overlay");

    const note = document.getElementById("note");

    const cancelForm = document.getElementById("cancel-form");
    const closeAbout = document.getElementById("close-about");

    const refresh = document.getElementById("refresh");

    toMain.addEventListener("click", function(event) {
        event.preventDefault();

        charactersPg.style.display = "none";
        
        header.className = "show-display";
        main.className = "show-display";

        window.scrollTo(0, 0);

        body.style.backgroundColor = "#FCF9F2";
        body.style.display = "flex";
    });

    /* interactive nav elements */
    title.addEventListener("mouseover", function(event) {
        title.src = "./media/color-title-box-action.svg";
    });
    title.addEventListener("mouseout", function(event) {
        title.src = "./media/color-title-box.svg";
    });

    addCardBtn.addEventListener("mouseover", function(event) {
        addCardBtn.src = "./media/add-card-btn-action.svg";
    });
    addCardBtn.addEventListener("mouseout", function(event) {
        addCardBtn.src = "./media/add-card-btn.svg";
    });

    aboutBtn.addEventListener("mouseover", function(event) {
        aboutBtn.src = "./media/about-action.svg";
    });
    aboutBtn.addEventListener("mouseout", function(event) {
        aboutBtn.src = "./media/about.svg";
    });

    /* open input form */
    addCardBtn.addEventListener("click", function(event) {
        event.preventDefault();
        /* console.log("btn clicked") */
        addCardForm.style.display = "block";
        aboutOverlay.style.display = "none";
    });

    cancelForm.addEventListener("click", function(event) {
        event.preventDefault();
        addCardForm.reset();
        document.querySelectorAll("#flavor-container input").checked= "false";
        addCardForm.style.display = "none";
    })

    aboutBtn.addEventListener("click", function(event) {
        event.preventDefault();
        addCardForm.style.display = "none";
        aboutOverlay.style.display = "block";
    })

    closeAbout.addEventListener("click", function(event) {
        event.preventDefault();
        aboutOverlay.style.display = "none";
    })

    note.addEventListener("keyup", function(event) {
        event.preventDefault();

        var curLen = note.value.length;
        var charsLeft = 280 - curLen;
        var count = document.getElementById("char-count");
        count.innerHTML = charsLeft;
    });

    function refreshNotes() {
        notesDisplay.innerHTML = ``;
        displayCards();
    }

    // request to refresh notes 
    refresh.addEventListener('click', function(event) {
        event.preventDefault();

        window.scrollTo(0, 0);
        refreshNotes();
    })

    // listen for input form submit
    addCardForm.addEventListener('submit', function(event){
        event.preventDefault();

        // turn off form display
        console.log("form submit")
        addCardForm.style.display = "none";

        var name = document.getElementById("name").value;
        var noteVal = note.value;
        var flavor = document.getElementById("flavor").value;

        // check if there is input
        uploadInputForm(name, noteVal, flavor);
       /*  uploadInputForm(name, note); */

        addCardForm.reset();
        document.querySelectorAll("#flavor-container input").checked= "false";

        /* add loading screen before this reload to inform the user */
        /* window.location.reload(); */
        
        refreshNotes();
    });

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
        })
    }

    function setSwatch(flav) {
        switch(flav) {
            case "sweet":
                return 0;
            case "sour":
                return 1;
            case "bitter":
                return 2;
            case "spicy":
                return 3;
            case "salty":
                return 4;
        }
    }

    async function displayCards() {
        const notes = Parse.Object.extend('Notes');
        const query = new Parse.Query(notes);

        const swatches = ["media/orange-swatch.svg", "media/green-swatch.svg" , "media/yellow-swatch.svg", "media/red-swatch.svg", "media/blue-swatch.svg"];
        const swatchClasses = ["orange", "green", "yellow", "red", "blue"];

        try {
            const results = await query.find();
            results.forEach(function(eachCard) {
                // get the note, flavor, and name
                const id = eachCard.id;
                const cardNote = eachCard.get('Notes');
                const flavor = eachCard.get('flavor');
                const displayCard = document.createElement("li");
                displayCard.setAttribute("class", `displayed-card`);
                displayCard.setAttribute("id", `r-${id}`);

                const swatchNum = setSwatch(flavor);
                
                displayCard.innerHTML = `
                
                    <div class="card-flavor">
                        ${flavor}
                    </div>    

                    <div class="card-note">
                        <p>${cardNote}</p>
                    </div>

                    <div class="swatch">
                        <img src=${swatches[swatchNum]} class=${swatchClasses[swatchNum]} alt="flavor swatch">
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

    addCardForm.reset();
})();