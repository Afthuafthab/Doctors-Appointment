// Scroll to specific sections when clicking navigation buttons
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

// Function to format the location for API params
function formatLocation(location) {
  console.log(location, "before");
  const formatted = location.toLowerCase().replace(/-/g, ", ");
  console.log(formatted, "after");
  return formatted;
}

// Function to parse query parameters from URL
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    specialization: params.get("specialization"),
    location: params.get("location"),
  };
}

// Function to render doctors on the page
function renderDoctors(doctors) {
  const doctorSection = document.querySelector(".how-to-work-section1");

  if (doctorSection) {
    doctorSection.innerHTML = ""; // Clear previous content

    if (doctors.length > 0) {
      doctors.forEach((doctor) => {
        const doctorCard = `
          <div class="doctor">
            <div class="doctor-bg1"></div>
            <img class="doctor-icon1" alt="Doctor" src="${doctor.image || './default-image.png'}" />
            <b class="doctor-name">${doctor.name}</b>
            <div class="doctor-information">
              Specialization: ${doctor.specialization}<br>
              Experience: ${doctor.experience} years<br>
              Contact: ${doctor.contact}<br>
              Location: ${doctor.location}
            </div>
          </div>`;
        doctorSection.innerHTML += doctorCard;
      });
    } else {
      doctorSection.innerHTML = `<p>No doctors found for the selected criteria.</p>`;
    }
  } else {
    console.warn("Doctor section with class '.how-to-work-section1' not found.");
  }
}

// Display results based on query parameters
function displayResults() {
  const { specialization, location } = getQueryParams();

  if (specialization && location) {
    // Update header text
    const headerElement = document.querySelector(".we-found-the");
    if (headerElement) {
      headerElement.textContent = `We found the following doctors in ${location} specializing in ${specialization}.`;
    } else {
      console.warn("Header element with class '.we-found-the' not found.");
    }

    // Format the location
    const formattedLocation = formatLocation(location);

    // Fetch data and filter based on specialization and location
    fetch("https://mocki.io/v1/0f8e3b7e-e8bf-438e-9e44-44bcd3f7d2e3")
      .then((response) => {
        console.log("API Response Status:", response.status);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);

        // Filter doctors based on specialization and location
        const filteredDoctors = data.filter(
          (doctor) =>
            doctor.specialization.toLowerCase().includes(specialization.toLowerCase()) &&
            doctor.location.toLowerCase().includes(formattedLocation.toLowerCase())
        );

        console.log("Filtered Doctors:", filteredDoctors);

        // Render the doctors
        renderDoctors(filteredDoctors);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } else {
    console.warn("Specialization or location not provided in query params.");
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", displayResults);
