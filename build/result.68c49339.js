var o=document.getElementById("oURSERVICES");o&&o.addEventListener("click",function(){var o=document.querySelector("[data-scroll-to='servicesContainer']");o&&o.scrollIntoView({block:"start"})});var e=document.getElementById("dEPARTMENT");e&&e.addEventListener("click",function(){var o=document.querySelector("[data-scroll-to='departmentSectionContainer']");o&&o.scrollIntoView({block:"start"})});var t=document.getElementById("bookAnAppointment");t&&t.addEventListener("click",function(){var o=document.querySelector("[data-scroll-to='bookAnAppointmentButton']");o&&o.scrollIntoView({block:"start"})}),document.addEventListener("DOMContentLoaded",function(){let{specialization:o,location:e}=function(){let o=new URLSearchParams(window.location.search);return{specialization:o.get("specialization"),location:o.get("location")}}();if(console.log(e),o&&e){let t=document.querySelector(".we-found-the");t?t.textContent=`We found the following doctors in ${e} specializing in ${o}.`:console.warn("Header element with class '.we-found-the' not found.");let n=(console.log(e,"before"),console.log(e.toLowerCase().replace(/-/g,", "),"after"),e.toLowerCase().replace(/-/g,", "));fetch("https://mocki.io/v1/0f8e3b7e-e8bf-438e-9e44-44bcd3f7d2e3").then(o=>{if(console.log("Fetch Response:",o),!o.ok)throw Error("Network response was not ok");return o.json()}).then(e=>{console.log("Fetched Data:",e,o,n);let t=e.filter(e=>e.specialization.toLowerCase()===o.toLowerCase()&&e.location.toLowerCase()===n.toLowerCase());console.log(t,"Filtered Doctors");let c=document.querySelector(".how-to-work-section1");c?(c.innerHTML="",t.length>0?t.forEach(o=>{let e=`
                <button class="doctor">
                  <div class="doctor-bg1"></div>
                  <img class="doctor-icon1" alt="Doctor" src="./public/doctor@2x.png" />
                  <b class="doctor-name">${o.name}</b>
                  <div class="doctor-information">
                    Specialization: ${o.specialization}<br>
                    Experience: ${o.experience} years<br>
                    Contact: ${o.contact}<br>
                    Location: ${o.location}
                  </div>
                </button>`;c.innerHTML+=e}):c.innerHTML="<p>No doctors found for the selected criteria.</p>"):console.warn("Doctor section with class '.how-to-work-section1' not found.")}).catch(o=>{console.error("Error fetching data:",o)})}else console.warn("Specialization or location not provided in query params.")});
//# sourceMappingURL=result.68c49339.js.map
