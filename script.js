
function changeHeading() {
    document.getElementById("heading").textContent =
        "Your Campus Adventure Starts Here!";
}

function changeColor() {
    let card = document.getElementById("card1");

    if (card.style.backgroundColor === "lightpink") {
        card.style.backgroundColor = "white";
    } else {
        card.style.backgroundColor = "lightpink";
    }
}

function toggleHighlights() {
    let section = document.getElementById("highlights");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function addEvent() {
    let name = document.getElementById("eventName").value;

    if (name.trim() === "") {
        document.getElementById("eventMessage").textContent =
            "Please enter an event name.";
        return;
    }

    let eventList = document.getElementById("eventList");

    let newEvent = document.createElement("p");
    newEvent.textContent = "Event added: " + name;

    eventList.appendChild(newEvent);

    document.getElementById("eventMessage").textContent =
        "Event added successfully!";

    document.getElementById("eventName").value = "";
}

function changeEventCard() {
    let card = document.getElementById("eventCard");

    if (card.style.backgroundColor === "lightblue") {
        card.style.backgroundColor = "white";
    } else {
        card.style.backgroundColor = "lightblue";
    }
}

function registerStudent() {
    let name = document.getElementById("studentName").value.trim();
    let roll = document.getElementById("rollNumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let event = document.getElementById("eventSelection").value;
    let message = document.getElementById("message");

    if (name === "" || roll === "" ||
        email === "" || event === "") {

        message.textContent = "Please fill in all fields.";
        message.style.color = "red";

    } else {
        message.textContent =
            "Thank you, " + name +
            "! You have registered your interest in " + event + ".";

        message.style.color = "green";
    }
}

function changeFontSize() {
    let heading = document.getElementById("registerHeading");

    if (heading.style.fontSize === "40px") {
        heading.style.fontSize = "32px";
    } else {
        heading.style.fontSize = "40px";
    }
}

function toggleForm() {
    let form = document.getElementById("registrationForm");

    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}
