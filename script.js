var bookAnAppointment = document.getElementById("bookAnAppointment");
if (bookAnAppointment) {
    bookAnAppointment.addEventListener("click", function () {
        window.open("https://forms.gle/5wWvhfe4NNLit21A7");
    });
}

var bookAnAppointmentButton = document.getElementById(
    "bookAnAppointmentButton"
);
if (bookAnAppointmentButton) {
    bookAnAppointmentButton.addEventListener("click", function () {
        window.open("https://forms.gle/5wWvhfe4NNLit21A7");
    });
}

var oURSERVICES = document.getElementById("oURSERVICES");
if (oURSERVICES) {
    oURSERVICES.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='servicesContainer']");
        if (anchor) {
            anchor.scrollIntoView({ block: "start" });
        }
    });
}

var dEPARTMENT = document.getElementById("dEPARTMENT");
if (dEPARTMENT) {
    dEPARTMENT.addEventListener("click", function () {
        var anchor = document.querySelector(
            "[data-scroll-to='departmentSectionContainer']"
        );
        if (anchor) {
            anchor.scrollIntoView({ block: "start" });
        }
    });
}

var bookAnAppointment = document.getElementById("bookAnAppointment");
if (bookAnAppointment) {
    bookAnAppointment.addEventListener("click", function () {
        var anchor = document.querySelector(
            "[data-scroll-to='bookAnAppointmentButton']"
        );
        if (anchor) {
            anchor.scrollIntoView({ block: "start" });
        }
    });
}



// !!!!! Display the result function

// Redirect to result.html with selected specialization and location
var searchButton = document.getElementById("searchButton");
if (searchButton) {
    searchButton.addEventListener("click", function () {
        var specializationSelect = document.getElementById("specialization");
        var locationSelect = document.getElementById("location");

        if (specializationSelect && locationSelect) {
            var selectedSpecialization = specializationSelect.value;
            var selectedLocation = locationSelect.value;

            // Redirect to result.html with query parameters
            window.location.href = `result.html?specialization=${encodeURIComponent(
                selectedSpecialization
            )}&location=${encodeURIComponent(selectedLocation)}`;
        }
    });
}