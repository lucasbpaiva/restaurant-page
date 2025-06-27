export const loadReservations = function() {
    const container = document.querySelector("#content");

    const phonePara = document.createElement("p");
    phonePara.textContent = "Call (099) 987654321 from 6am - 10pm daily, or book online below.";

    const requiredPara = document.createElement("p");
    requiredPara.textContent = "Reservations required for parties of 6 or more.";
    
    const reservationForm = document.createElement("form");
    reservationForm.classList.add("reservation-form");

    //Party size-------------------------------------------
    const partySize = document.createElement("div");
    partySize.classList.add("form-item");

    const partyLabel = document.createElement("label");
    partyLabel.htmlFor = "party-size";
    partyLabel.textContent = "Party Size: ";

    const partyDropdown = document.createElement("select");
    partyDropdown.name = "party-size";
    partyDropdown.id = "party-size";

    //add all party sizes options
    addOption("1","1 guest", partyDropdown);
    for (let i = 2; i < 13; i++){
        const value = i;
        const text = `${i} guests`;
        addOption(value, text, partyDropdown);
    }

    partySize.appendChild(partyLabel);
    partySize.appendChild(partyDropdown);
    reservationForm.appendChild(partySize);
    //-----------------------------------------------------

    //Date-------------------------------------------------
    const date = document.createElement("div");
    date.classList.add("form-item");

    const dateLabel = document.createElement("label");
    dateLabel.htmlFor = "date";
    dateLabel.textContent = "Date: ";

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";

    date.appendChild(dateLabel);
    date.appendChild(dateInput);
    reservationForm.appendChild(date);
    //-----------------------------------------------------

    //Time-------------------------------------------
    const time = document.createElement("div");
    time.classList.add("form-item");

    const timeLabel = document.createElement("label");
    timeLabel.htmlFor = "time";
    timeLabel.textContent = "Time: ";

    const timeDropdown = document.createElement("select");
    timeDropdown.name = "time";
    timeDropdown.id = "time";

    //add all time options
    addOption("12:00", "12:00 PM", timeDropdown);
    addOption("12:30", "12:30 PM", timeDropdown);
    for (let i = 0; i < 7; i++) {
        const value1 = `${i+13}:00`;
        const value2 = `${i+13}:30`;
        const text1 = `0${i+1}:00 PM`;
        const text2 = `0${i+1}:30 PM`;
        addOption(value1, text1, timeDropdown);
        addOption(value2, text2, timeDropdown);
    }

    time.appendChild(timeLabel);
    time.appendChild(timeDropdown);
    reservationForm.appendChild(time);
    //-----------------------------------------------------

    const makeReservationbutton = document.createElement("button");
    makeReservationbutton.classList.add("book-now-button");
    makeReservationbutton.textContent = "Book Now";
    reservationForm.appendChild(makeReservationbutton);

    //add elements to container-------------------
    container.appendChild(phonePara);
    container.appendChild(requiredPara);
    container.appendChild(reservationForm);
};

function addOption(value, text, parent) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    parent.appendChild(option);
}