var o=document.getElementById("oURSERVICES");o&&o.addEventListener("click",function(){var o=document.querySelector("[data-scroll-to='servicesContainer']");o&&o.scrollIntoView({block:"start"})});var e=document.getElementById("dEPARTMENT");e&&e.addEventListener("click",function(){var o=document.querySelector("[data-scroll-to='departmentSectionContainer']");o&&o.scrollIntoView({block:"start"})});var t=document.getElementById("bookAnAppointment");t&&t.addEventListener("click",function(){var o=document.querySelector("[data-scroll-to='bookAnAppointmentButton']");o&&o.scrollIntoView({block:"start"})}),document.addEventListener("DOMContentLoaded",function(){let{specialization:o,location:e,date:t}=function(){let o=new URLSearchParams(window.location.search);return{specialization:o.get("specialization"),location:o.get("location"),date:o.get("date")}}();if(console.log(e),o&&e&&t){let n=document.querySelector(".we-found-the");n?n.textContent=`We found the following doctors in ${e} specializing in ${o} on ${t}.`:console.warn("Header element with class '.we-found-the' not found.");let c=(console.log(e,"before"),console.log(e.toLowerCase().replace(/-/g,", "),"after"),e.toLowerCase().replace(/-/g,", "));fetch("https://mocki.io/v1/6628d024-ad17-415e-9f50-f3ae6718676a").then(o=>{if(console.log("Fetch Response:",o),!o.ok)throw Error("Network response was not ok");return o.json()}).then(e=>{console.log("Fetched Data:",e,o,c);let t=e.filter(e=>e.specialization.toLowerCase()===o.toLowerCase()&&e.location.toLowerCase()===c.toLowerCase());console.log(t,"Filtered Doctors");let n=document.querySelector(".how-to-work-section1");n?(n.innerHTML="",t.length>0?t.forEach(o=>{let e=`
              <div class="how-to-work-section1">

                <div class="doctor">
                  <div class="doctor-bg1">
                  <img class="doctor-icon1" alt="Doctor" src="./public/doctor@2x.png" />
                  </div>
                  <b class="doctor-name">${o.name}</b>
                  <div class="doctor-information">
                    Specialization: ${o.specialization}<br>
                    Experience: ${o.experience} years<br>
                    Contact: ${o.contact}<br>
                    Location: ${o.location}
                  </div>
                </div>
      </div>
      `;n.innerHTML+=e}):n.innerHTML="<p>No doctors found for the selected criteria.</p>"):console.warn("Doctor section with class '.how-to-work-section1' not found.")}).catch(o=>{console.error("Error fetching data:",o)})}else console.warn("Specialization, location, or date not provided in query params.")});
//# sourceMappingURL=result.9f7aa545.js.map
