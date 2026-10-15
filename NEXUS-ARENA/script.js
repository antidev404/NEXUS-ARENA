const modal = document.getElementById("bookingModal");
const closeModal = document.getElementById("closeModal");
const bookingName = document.getElementById("bookingName");
const bookingPhone = document.getElementById("bookingPhone");
const bookingTariff = document.getElementById("bookingTariff");
const submitBooking = document.getElementById("submitBooking");
const bookingMessage = document.getElementById("bookingMessage");
const bookingButtons = document.querySelectorAll(
    ".nav-button, .price-card button, .contact-button"
);

const tournamentButtons = document.querySelectorAll(".tournament-card button");

bookingButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        modal.style.display = "flex";
    });
});

document.querySelector(".hero-buttons button").addEventListener("click", function() {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

    ".pcs, .prices, .tournaments, .contacts, .footer"
);

function revealOnScroll() {
    revealElements.forEach(function(element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.addconst revealElements = document.querySelectorAll(("active");
        }
    });
}

revealElements.forEach(function(element) {
    element.classList.add("reveal");
});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
submitBooking.addEventListener("click", function() {

    const name = bookingName.value.trim();
    const phone = bookingPhone.value.trim();
    const tariff = bookingTariff.value;

    if (!name || !phone || !tariff) {
        bookingMessage.textContent = "Заполни все поля";
        return;
    }

    bookingMessage.textContent = "Заявка отправлена!";
    bookingName.value = "";
bookingPhone.value = "";
bookingTariff.value = "";

setTimeout(function() {
    modal.style.display = "none";
    bookingMessage.textContent = "";
}, 2000);
});
const tournamentModal = document.getElementById("tournamentModal");
const closeTournamentModal = document.getElementById("closeTournamentModal");
const selectedTournament = document.getElementById("selectedTournament");

tournamentButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const tournamentCard = button.closest(".tournament-card");
        const tournamentTitle = tournamentCard.querySelector("h3").textContent;

        selectedTournament.value = tournamentTitle;

        tournamentModal.style.display = "flex";
    });
});

closeTournamentModal.addEventListener("click", function() {
    tournamentModal.style.display = "none";
});

tournamentModal.addEventListener("click", function(event) {
    if (event.target === tournamentModal) {
        tournamentModal.style.display = "none";
    }
});
const tournamentName = document.getElementById("tournamentName");
const tournamentPhone = document.getElementById("tournamentPhone");
const submitTournament = document.getElementById("submitTournament");
const tournamentMessage = document.getElementById("tournamentMessage");

submitTournament.addEventListener("click", function() {

    const name = tournamentName.value.trim();
    const phone = tournamentPhone.value.trim();
    const tournament = selectedTournament.value;

    if (!name || !phone) {
        tournamentMessage.textContent = "Заполни все поля";
        return;
    }

    tournamentMessage.textContent = "Заявка на участие отправлена!";

    tournamentName.value = "";
    tournamentPhone.value = "";

    setTimeout(function() {
        tournamentModal.style.display = "none";
        tournamentMessage.textContent = "";
    }, 2000);
});