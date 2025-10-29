/*
=================================================================
 VDoctor - Local Storage Authentication & Homepage Logic
=================================================================
 This file handles all client-side logic for the VDoctor project.
 It uses the browser's localStorage for user authentication,
 removing the need for a backend service like Firebase for this feature.

 Features:
 - User Registration (stores user data locally)
 - User Login (checks credentials against local data)
 - Session Management (maintains login state across pages)
 - Dynamic Navbar (shows Login/Register or Logout)
 - Doctor Search/Filter
 - Testimonial Slider
=================================================================
*/

/**
 * Displays a message in a designated message container.
 * @param {string} message - The message to display.
 * @param {boolean} isError - True if the message is an error, false for success.
 */
const showMessage = (message, isError = false) => {
    const messageContainer = document.getElementById('message-container');
    if (!messageContainer) return;

    messageContainer.textContent = message;
    messageContainer.className = 'message-container'; // Reset classes
    if (isError) {
        messageContainer.classList.add('error');
    } else {
        messageContainer.classList.add('success');
    }
    messageContainer.style.display = 'block';
};

/**
 * Toggles the loading spinner visibility on a button.
 * @param {HTMLButtonElement} button - The button element.
 * @param {boolean} isLoading - True to show the spinner, false to hide it.
 */
const toggleLoading = (button, isLoading) => {
    if (!button) return;
    const btnText = button.querySelector('.btn-text');
    const spinner = button.querySelector('.spinner');

    if (isLoading) {
        btnText.style.display = 'none';
        spinner.style.display = 'block';
        button.disabled = true;
    } else {
        btnText.style.display = 'inline';
        spinner.style.display = 'none';
        button.disabled = false;
    }
};

// --- AUTHENTICATION LOGIC ---
// Moved inside DOMContentLoaded below

/**
 * Checks auth state from localStorage and updates the navbar accordingly.
 */
const checkAuthState = () => {
    const authLinksContainer = document.getElementById('auth-links');
    if (!authLinksContainer) return;

    const user = JSON.parse(localStorage.getItem('vdoctor_currentUser'));

    if (user) {
        // User is signed in
        authLinksContainer.innerHTML = `
            <button id="logout-btn" class="btn btn-secondary nav-btn">LOGOUT</button>
        `;
        const logoutBtn = document.getElementById('logout-btn');
        logoutBtn?.addEventListener('click', async () => {
            localStorage.removeItem('vdoctor_currentUser');
            window.location.reload();
        });
    } else {
        // User is signed out
        authLinksContainer.innerHTML = `
            <a href="login.html" class="btn btn-secondary nav-btn">LOGIN</a>
            <a href="register.html" class="btn btn-secondary nav-btn">REGISTER</a>
        `;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Always check the authentication state on any page that loads this script.
    checkAuthState();

    // Handle Registration
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = registerForm.querySelector('button[type="submit"]');
            toggleLoading(button, true);

            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim().toLowerCase();
            const password = document.getElementById('password').value.trim();

            // Get existing users from localStorage or initialize an empty array
            const users = JSON.parse(localStorage.getItem('vdoctor_users')) || [];

            // Check if user already exists (case-insensitive email)
            const userExists = users.some(user => user.email.toLowerCase() === email);

            if (userExists) {
                showMessage('An account with this email already exists.', true);
                toggleLoading(button, false);
            } else {
                // Add new user
                users.push({ fullName, email, password });
                localStorage.setItem('vdoctor_users', JSON.stringify(users));

                showMessage('Registration successful! Redirecting to login...', false);
                setTimeout(() => window.location.href = 'login.html', 2000);
            }
        });
    }

    // Handle Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = loginForm.querySelector('button[type="submit"]');
            toggleLoading(button, true);

            const email = document.getElementById('email').value.trim().toLowerCase();
            const password = document.getElementById('password').value.trim();

            const users = JSON.parse(localStorage.getItem('vdoctor_users')) || [];

            // Find user with matching credentials (case-insensitive email)
            const user = users.find(u => u.email.toLowerCase() === email && u.password === password);

            if (user) {
                // Store current user's info to simulate a session
                localStorage.setItem('vdoctor_currentUser', JSON.stringify({ email: user.email, fullName: user.fullName }));
                showMessage('Login successful! Redirecting...', false);
                setTimeout(() => window.location.href = 'index.html', 1500);
            } else {
                showMessage('Invalid email or password.', true);
                toggleLoading(button, false);
            }
        });
    }



    // Expanded Symptom to Specialty Mapping with more comprehensive keywords
    const symptomMapping = {
        // Cardiologist
        'chest': 'Consult with a Cardiologist',
        'heart': 'Consult with a Cardiologist',
        'palpitations': 'Consult with a Cardiologist',
        'shortness': 'Consult with a Cardiologist',
        'breath': 'Consult with a Cardiologist',
        'cardiac': 'Consult with a Cardiologist',
        'hypertension': 'Consult with a Cardiologist',
        'blood pressure': 'Consult with a Cardiologist',

        // Dermatologist
        'skin': 'Consult with a Dermatologist',
        'rash': 'Consult with a Dermatologist',
        'acne': 'Consult with a Dermatologist',
        'eczema': 'Consult with a Dermatologist',
        'hair': 'Consult with a Dermatologist',
        'loss': 'Consult with a Dermatologist',
        'dermatitis': 'Consult with a Dermatologist',
        'psoriasis': 'Consult with a Dermatologist',

        // Dentist
        'tooth': 'Consult with a Dentist',
        'teeth': 'Consult with a Dentist',
        'dental': 'Consult with a Dentist',
        'mouth': 'Consult with a Dentist',
        'gum': 'Consult with a Dentist',
        'cavity': 'Consult with a Dentist',
        'pain': 'Consult with a Dentist', // Note: This might conflict, but context matters

        // Neurology
        'headache': 'Consult with a Neurologist',
        'migraine': 'Consult with a Neurologist',
        'dizziness': 'Consult with a Neurologist',
        'seizure': 'Consult with a Neurologist',
        'neurological': 'Consult with a Neurologist',
        'brain': 'Consult with a Neurologist',
        'numbness': 'Consult with a Neurologist',

        // Pediatrics
        'child': 'Consult with a Pediatrician',
        'baby': 'Consult with a Pediatrician',
        'pediatric': 'Consult with a Pediatrician',
        'vaccination': 'Consult with a Pediatrician',
        'fever': 'Consult with a Pediatrician', // Children specific
        'growth': 'Consult with a Pediatrician',

        // Gynecology
        'pregnancy': 'Consult with a Gynecologist',
        'menstrual': 'Consult with a Gynecologist',
        'gynecological': 'Consult with a Gynecologist',
        'women': 'Consult with a Gynecologist',
        'female': 'Consult with a Gynecologist',
        'period': 'Consult with a Gynecologist',

        // Orthopedics
        'joint': 'Consult with an Orthopedic Surgeon',
        'back': 'Consult with an Orthopedic Surgeon',
        'bone': 'Consult with an Orthopedic Surgeon',
        'fracture': 'Consult with an Orthopedic Surgeon',
        'arthritis': 'Consult with an Orthopedic Surgeon',
        'knee': 'Consult with an Orthopedic Surgeon',
        'shoulder': 'Consult with an Orthopedic Surgeon',

        // Urology
        'urinary': 'Consult with a Urologist',
        'kidney': 'Consult with a Urologist',
        'bladder': 'Consult with a Urologist',
        'prostate': 'Consult with a Urologist',
        'urine': 'Consult with a Urologist',

        // General Medicine
        'stomach': 'Consult with a General Physician',
        'cough': 'Consult with a General Physician',
        'cold': 'Consult with a General Physician',
        'fever': 'Consult with a General Physician',
        'general': 'Consult with a General Physician'
    };

    // Function to check symptoms and suggest specialties
    const checkSymptoms = () => {
        const symptomsInput = document.getElementById('symptoms-input');
        const symptomResults = document.getElementById('symptom-results');
        const suggestedSpecialties = document.getElementById('suggested-specialties');

        if (!symptomsInput || !symptomResults || !suggestedSpecialties) return;

        const symptoms = symptomsInput.value.trim().toLowerCase();
        if (!symptoms) {
            suggestedSpecialties.innerHTML = '<li>Please enter some symptoms.</li>';
            symptomResults.style.display = 'block';
            return;
        }

        const words = symptoms.split(/\s+/);
        const suggestions = new Set();

        words.forEach(word => {
            if (symptomMapping[word]) {
                suggestions.add(symptomMapping[word]);
            }
        });

        if (suggestions.size > 0) {
            suggestedSpecialties.innerHTML = '';
            suggestions.forEach(suggestion => {
                const li = document.createElement('li');
                li.textContent = suggestion;
                suggestedSpecialties.appendChild(li);
            });
        } else {
            suggestedSpecialties.innerHTML = '<li>No specific specialty suggested. Please consult a General Physician.</li>';
        }

        symptomResults.style.display = 'block';
    };

    // Event listener for symptom checker button
    const checkSymptomsBtn = document.getElementById('check-symptoms-btn');
    if (checkSymptomsBtn) {
        checkSymptomsBtn.addEventListener('click', checkSymptoms);
    }

    // Event listener for search suggested button
    const searchSuggestedBtn = document.getElementById('search-suggested-btn');
    if (searchSuggestedBtn) {
        searchSuggestedBtn.addEventListener('click', () => {
            const suggestedItems = document.querySelectorAll('#suggested-specialties li');
            if (suggestedItems.length > 0) {
                const firstSpecialty = suggestedItems[0].textContent;
                // Extract specialty from "Consult with a [Specialty]"
                const specialtyMatch = firstSpecialty.match(/Consult with a (.+)/);
                const specialty = specialtyMatch ? specialtyMatch[1] : firstSpecialty;

                const specializationSearch = document.getElementById('specialization-search');
                const locationSearch = document.getElementById('location-search');

                if (specializationSearch) {
                    specializationSearch.value = specialty;
                }

                // Set default location if not set
                if (locationSearch && !locationSearch.value) {
                    locationSearch.value = 'USA'; // Default location
                }

                // Trigger search
                const searchBtn = document.getElementById('search-btn');
                if (searchBtn) {
                    searchBtn.click();
                }
            }
        });
    }

    // Testimonial Slider Logic
    const testimonials = [{
            quote: "VDoctor made booking a consultation so easy. The virtual consultation saved me so much time!",
            author: "Jennifer Robinson, LELEANDM USA",
            image: "https://picsum.photos/200/200?random=1"
        },
        {
            quote: "The doctors are highly professional and caring. I had a wonderful experience and would highly recommend this platform.",
            author: "John Doe, HealthFirst UK",
            image: "https://picsum.photos/200/200?random=2"
        },
        {
            quote: "A seamless and efficient way to get medical advice. The platform is user-friendly and the service is top-notch.",
            author: "Priya Sharma, MediConnect India",
            image: "https://picsum.photos/200/200?random=3"
        }
    ];

    const sliderContainer = document.querySelector('.testimonial-card-container');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentSlide = 0;

    const renderTestimonials = () => {
        if (!sliderContainer) return;
        sliderContainer.innerHTML = '';
        testimonials.forEach((t, index) => {
            const card = document.createElement('div');
            card.classList.add('testimonial-card');
            if (index === currentSlide) {
                card.classList.add('active');
            }
            card.innerHTML = `
                <div class="testimonial-profile">
                    <img src="${t.image}" alt="${t.author}" class="testimonial-avatar">
                    <div class="testimonial-info">
                        <p class="testimonial-quote">"${t.quote}"</p>
                        <p class="testimonial-author">- ${t.author}</p>
                    </div>
                </div>
            `;
            sliderContainer.appendChild(card);
        });
    };

    const showSlide = (index) => {
        const slides = document.querySelectorAll('.testimonial-card');
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
    };

    if (nextBtn && prevBtn) {
        renderTestimonials(); // Initial render

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }

    // Floating Chatbot Logic
    const chatIcon = document.getElementById('chat-icon');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    // Toggle chat window
    if (chatIcon) {
        chatIcon.addEventListener('click', () => {
            chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
        });
    }

    if (closeChat) {
        closeChat.addEventListener('click', () => {
            chatWindow.style.display = 'none';
        });
    }

    // Medical Q&A Knowledge Base
    const medicalResponses = {
        'hello': 'Hello! How can I help you with your health questions today?',
        'hi': 'Hi there! I\'m here to answer your medical questions. What would you like to know?',
        'headache': 'Headaches can have many causes including stress, dehydration, lack of sleep, or medical conditions. If persistent or severe, consult a doctor. Try resting in a dark room and staying hydrated.',
        'fever': 'A fever is your body\'s natural response to infection. Rest, stay hydrated, and monitor your temperature. If over 103°F (39.4°C) or lasting more than 3 days, see a doctor.',
        'cough': 'Coughs can be caused by colds, allergies, or infections. Stay hydrated, use honey for soothing, and rest. If persistent with chest pain or shortness of breath, consult a healthcare provider.',
        'stomach pain': 'Stomach pain can result from indigestion, gas, or more serious conditions. Try eating smaller meals and avoiding trigger foods. If severe or persistent, seek medical attention.',
        'blood pressure': 'Blood pressure measures the force of blood against artery walls. Normal is less than 120/80 mmHg. High blood pressure often has no symptoms but can lead to serious health issues.',
        'diabetes': 'Diabetes is a condition where blood sugar levels are too high. Type 1 is autoimmune, Type 2 is lifestyle-related. Management includes diet, exercise, and sometimes medication.',
        'heart disease': 'Heart disease includes conditions affecting the heart. Risk factors include high blood pressure, high cholesterol, smoking, and family history. Prevention focuses on healthy lifestyle.',
        'cancer': 'Cancer is abnormal cell growth that can spread. Early detection is crucial. Risk factors vary by type, but include genetics, lifestyle, and environmental factors.',
        'vaccines': 'Vaccines help prevent infectious diseases by stimulating immunity. They\'re safe and effective. Consult your doctor about recommended vaccinations for your age and health conditions.',
        'mental health': 'Mental health is as important as physical health. Common conditions include anxiety and depression. Therapy, medication, and lifestyle changes can help. Don\'t hesitate to seek professional help.',
        'exercise': 'Regular exercise improves cardiovascular health, strengthens muscles, and boosts mental health. Aim for 150 minutes of moderate activity per week.',
        'diet': 'A balanced diet includes fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods, sugar, and salt. Stay hydrated and eat mindfully.',
        'sleep': 'Adults need 7-9 hours of quality sleep per night. Poor sleep can affect mood, immunity, and cognitive function. Maintain a consistent sleep schedule.',
        'stress': 'Stress is normal but chronic stress can harm health. Practice relaxation techniques like deep breathing, meditation, or yoga. Seek support when needed.',
        'emergency': 'For medical emergencies, call emergency services immediately (911 in US). Signs include chest pain, difficulty breathing, severe bleeding, or loss of consciousness.',
        'appointment': 'To book an appointment, use our search feature to find doctors by specialty and location, then click "Book Appointment" on their profile.',
        'symptoms': 'Our AI Symptom Checker can help suggest medical specialties based on your symptoms. Try describing what you\'re experiencing.',
        'default': 'I\'m here to help with general health information. For personalized medical advice, please consult a qualified healthcare professional. What specific health topic would you like to know about?'
    };

    const addMessage = (message, isUser = false) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        if (isUser) {
            messageDiv.classList.add('user-message');
        } else {
            messageDiv.classList.add('bot-message');
        }

        messageDiv.innerHTML = `
            <div class="message-avatar">
                ${isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>'}
            </div>
            <div class="message-content">
                <p>${message}</p>
            </div>
        `;

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const getBotResponse = (userMessage) => {
        const message = userMessage.toLowerCase().trim();

        // Check for exact matches first
        if (medicalResponses[message]) {
            return medicalResponses[message];
        }

        // Check for keywords in the message
        for (const [key, response] of Object.entries(medicalResponses)) {
            if (key !== 'default' && message.includes(key)) {
                return response;
            }
        }

        // Default response
        return medicalResponses['default'];
    };

    const handleSendMessage = () => {
        const message = chatInput.value.trim();
        if (!message) return;

        addMessage(message, true);
        chatInput.value = '';

        // Simulate typing delay
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response);
        }, 500);
    };

    if (sendBtn && chatInput) {
        sendBtn.addEventListener('click', handleSendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });
    }

    // Only run this logic on the homepage
    if (document.getElementById('doctor-grid')) {
        // Doctor Data - Limited to 3 best doctors with high ratings
        const doctors = [
            {
                name: 'Dr. Mehnaz',
                specialization: 'Cardiologist',
                location: 'Canada',
                availableDates: ['2024-10-15', '2024-10-16', '2024-10-17'],
                image: 'public/448fb44937b4973fffc5202effb13d3c91eae9c7@2x.png',
                rating: 5.0
            },
            {
                name: 'Dr. Emily Carter',
                specialization: 'Cardiologist',
                location: 'USA',
                availableDates: ['2024-10-18', '2024-10-19', '2024-10-20'],
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80',
                rating: 4.9
            },
            {
                name: 'Dr. Michael Lee',
                specialization: 'Cardiologist',
                location: 'UK',
                availableDates: ['2024-10-21', '2024-10-22', '2024-10-23'],
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80',
                rating: 4.8
            },
        ];

        const doctorGrid = document.getElementById('doctor-grid');
        const noResultsMessage = document.getElementById('no-results-message');

        // Function to render doctors
        const renderDoctors = (filteredDoctors) => {
            doctorGrid.innerHTML = '';
            filteredDoctors.forEach(doc => {
                const doctorCard = `
                    <div class="doctor-card">
                        <img src="${doc.image}" alt="${doc.name}" class="doctor-image">
                        <div class="doctor-info">
                            <h3 class="doctor-name">${doc.name}</h3>
                            <p class="doctor-specialization">${doc.specialization}</p>
                            <p class="doctor-location">${doc.location}</p>
                            <p class="doctor-rating">Rating: ${doc.rating} <i class="fa-solid fa-star"></i></p>
                            <p class="doctor-availability">Available: ${doc.availableDates.join(', ')}</p>
                            <button class="btn btn-primary book-btn" data-doctor="${doc.name}">Book Appointment</button>
                        </div>
                    </div>
                `;
                doctorGrid.innerHTML += doctorCard;
            });

            // Add event listeners to book buttons
            const bookButtons = document.querySelectorAll('.book-btn');
            bookButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const doctorName = e.target.getAttribute('data-doctor');
                    const doctor = doctors.find(d => d.name === doctorName);
                    if (doctor) {
                        // Redirect to Google Form with pre-filled data if possible
                        const formUrl = `https://forms.gle/5wWvhfe4NNLit21A7?usp=pp_url&entry.123456789=${encodeURIComponent(doctorName)}`;
                        window.open(formUrl, '_blank');
                    }
                });
            });

            if (filteredDoctors.length === 0) {
                noResultsMessage.style.display = 'block';
            } else {
                noResultsMessage.style.display = 'none';
            }
        };

        // Initial render
        if (doctorGrid) {
            renderDoctors(doctors);
        }

        // Search/Filter Logic
        const searchForm = document.getElementById('doctor-search-form');
        const specializationSearch = document.getElementById('specialization-search');
        const locationSearch = document.getElementById('location-search');
        const dateSearch = document.getElementById('date-search');

        const filterDoctors = (e) => {
            e.preventDefault(); // Prevent form submission
            const specQuery = specializationSearch.value.toLowerCase();
            const locQuery = locationSearch.value.toLowerCase();
            const dateQuery = dateSearch.value;

            const filtered = doctors.filter(doc => {
                // If query is empty, it's a match. Otherwise, check for inclusion.
                const matchesSpec = specQuery === '' || doc.specialization.toLowerCase().includes(specQuery);
                const matchesLoc = locQuery === '' || doc.location.toLowerCase().includes(locQuery);
                const matchesDate = dateQuery === '' || doc.availableDates.includes(dateQuery);
                return matchesSpec && matchesLoc && matchesDate;
            });
            renderDoctors(filtered);
        };

        const searchBtn = document.getElementById('search-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const specialization = specializationSearch.value;
                const location = locationSearch.value;
                const date = dateSearch.value;

                const params = new URLSearchParams();
                if (specialization) params.append('specialization', specialization);
                if (location) params.append('location', location);
                if (date) params.append('date', date);

                window.location.href = `result.html?${params.toString()}`;
            });
        }

        if (searchForm) {
            searchForm.addEventListener('submit', filterDoctors);
            // Also filter on change for a more interactive feel
            specializationSearch.addEventListener('change', (e) => filterDoctors(e));
            locationSearch.addEventListener('change', (e) => filterDoctors(e));
            dateSearch.addEventListener('change', (e) => filterDoctors(e));
        }
    }
});
