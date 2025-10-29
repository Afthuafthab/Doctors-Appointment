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
  // Convert the location to lowercase and replace spaces with hyphens
  console.log(location, "before")
  console.log(location.toLowerCase().replace(/-/g, ', '), "after")
  return location.toLowerCase().replace(/-/g, ', ');
}

// Function to parse query parameters
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    specialization: params.get("specialization"),
    location: params.get("location"),
    date: params.get("date"),
  };
}

// Doctor Data - Comprehensive database with 3-6 doctors per specialization-location combination
const doctors = [
    // Cardiologists
    // Canada - Cardiologist (4 doctors)
    {
        name: 'Dr. Mehnaz',
        specialization: 'Cardiologist',
        location: 'Canada',
        availableDates: ['2024-10-15', '2024-10-16', '2024-10-17'],
        image: 'public/448fb44937b4973fffc5202effb13d3c91eae9c7@2x.png',
        rating: 5.0
    },
    {
        name: 'Dr. Amanda White',
        specialization: 'Cardiologist',
        location: 'Canada',
        availableDates: ['2024-10-18', '2024-10-19', '2024-10-20'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.8
    },
    {
        name: 'Dr. Robert Davis',
        specialization: 'Cardiologist',
        location: 'Canada',
        availableDates: ['2024-10-21', '2024-10-22', '2024-10-23'],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.7
    },
    {
        name: 'Dr. Jennifer Liu',
        specialization: 'Cardiologist',
        location: 'Canada',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    // USA - Cardiologist (5 doctors)
    {
        name: 'Dr. Emily Carter',
        specialization: 'Cardiologist',
        location: 'USA',
        availableDates: ['2024-10-18', '2024-10-19', '2024-10-20'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.9
    },
    {
        name: 'Dr. Michael Johnson',
        specialization: 'Cardiologist',
        location: 'USA',
        availableDates: ['2024-10-21', '2024-10-22', '2024-10-23'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.8
    },
    {
        name: 'Dr. Sarah Williams',
        specialization: 'Cardiologist',
        location: 'USA',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.7
    },
    {
        name: 'Dr. David Brown',
        specialization: 'Cardiologist',
        location: 'USA',
        availableDates: ['2024-10-27', '2024-10-28', '2024-10-29'],
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    {
        name: 'Dr. Lisa Garcia',
        specialization: 'Cardiologist',
        location: 'USA',
        availableDates: ['2024-10-30', '2024-10-31', '2024-11-01'],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.5
    },
    // UK - Cardiologist (4 doctors)
    {
        name: 'Dr. Michael Lee',
        specialization: 'Cardiologist',
        location: 'UK',
        availableDates: ['2024-10-21', '2024-10-22', '2024-10-23'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.8
    },
    {
        name: 'Dr. James Wilson',
        specialization: 'Cardiologist',
        location: 'UK',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.7
    },
    {
        name: 'Dr. Emma Thompson',
        specialization: 'Cardiologist',
        location: 'UK',
        availableDates: ['2024-10-27', '2024-10-28', '2024-10-29'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    {
        name: 'Dr. Oliver Harris',
        specialization: 'Cardiologist',
        location: 'UK',
        availableDates: ['2024-10-30', '2024-10-31', '2024-11-01'],
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.5
    },
    // Australia - Cardiologist (3 doctors)
    {
        name: 'Dr. Sarah Johnson',
        specialization: 'Cardiologist',
        location: 'Australia',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.7
    },
    {
        name: 'Dr. Kevin Mitchell',
        specialization: 'Cardiologist',
        location: 'Australia',
        availableDates: ['2024-10-27', '2024-10-28', '2024-10-29'],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    {
        name: 'Dr. Rachel Green',
        specialization: 'Cardiologist',
        location: 'Australia',
        availableDates: ['2024-10-30', '2024-10-31', '2024-11-01'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.5
    },
    // Singapore - Cardiologist (3 doctors)
    {
        name: 'Dr. David Chen',
        specialization: 'Cardiologist',
        location: 'Singapore',
        availableDates: ['2024-10-27', '2024-10-28', '2024-10-29'],
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    {
        name: 'Dr. Mei Ling',
        specialization: 'Cardiologist',
        location: 'Singapore',
        availableDates: ['2024-10-30', '2024-10-31', '2024-11-01'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.5
    },
    {
        name: 'Dr. Raj Kumar',
        specialization: 'Cardiologist',
        location: 'Singapore',
        availableDates: ['2024-11-02', '2024-11-03', '2024-11-04'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.4
    },
    // Mexico - Cardiologist (3 doctors)
    {
        name: 'Dr. Carlos Rodriguez',
        specialization: 'Cardiologist',
        location: 'Mexico',
        availableDates: ['2024-10-21', '2024-10-22', '2024-10-23'],
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.5
    },
    {
        name: 'Dr. Maria Sanchez',
        specialization: 'Cardiologist',
        location: 'Mexico',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.4
    },
    {
        name: 'Dr. Jose Martinez',
        specialization: 'Cardiologist',
        location: 'Mexico',
        availableDates: ['2024-10-27', '2024-10-28', '2024-10-29'],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.3
    },
    // Kerala - Cardiologist (4 doctors)
    {
        name: 'Dr. Rajesh Kumar',
        specialization: 'Cardiologist',
        location: 'Kerala',
        availableDates: ['2024-10-15', '2024-10-16', '2024-10-17'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.9
    },
    {
        name: 'Dr. Priya Nair',
        specialization: 'Cardiologist',
        location: 'Kerala',
        availableDates: ['2024-10-18', '2024-10-19', '2024-10-20'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.8
    },
    {
        name: 'Dr. Arjun Menon',
        specialization: 'Cardiologist',
        location: 'Kerala',
        availableDates: ['2024-10-21', '2024-10-22', '2024-10-23'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.7
    },
    {
        name: 'Dr. Meera Pillai',
        specialization: 'Cardiologist',
        location: 'Kerala',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    // India - Cardiologist (5 doctors)
    {
        name: 'Dr. Vikram Singh',
        specialization: 'Cardiologist',
        location: 'India',
        availableDates: ['2024-10-15', '2024-10-16', '2024-10-17'],
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.8
    },
    {
        name: 'Dr. Anjali Sharma',
        specialization: 'Cardiologist',
        location: 'India',
        availableDates: ['2024-10-18', '2024-10-19', '2024-10-20'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.7
    },
    {
        name: 'Dr. Rohan Gupta',
        specialization: 'Cardiologist',
        location: 'India',
        availableDates: ['2024-10-21', '2024-10-22', '2024-10-23'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    {
        name: 'Dr. Kavita Patel',
        specialization: 'Cardiologist',
        location: 'India',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.5
    },
    {
        name: 'Dr. Amit Kumar',
        specialization: 'Cardiologist',
        location: 'India',
        availableDates: ['2024-10-27', '2024-10-28', '2024-10-29'],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.4
    },
    // Neurologists
    // USA - Neurologist (4 doctors)
    {
        name: 'Dr. Robert Wilson',
        specialization: 'Neurologist',
        location: 'USA',
        availableDates: ['2024-10-15', '2024-10-16', '2024-10-17'],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.9
    },
    {
        name: 'Dr. Jennifer Adams',
        specialization: 'Neurologist',
        location: 'USA',
        availableDates: ['2024-10-18', '2024-10-19', '2024-10-20'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.8
    },
    {
        name: 'Dr. Mark Thompson',
        specialization: 'Neurologist',
        location: 'USA',
        availableDates: ['2024-10-21', '2024-10-22', '2024-10-23'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.7
    },
    {
        name: 'Dr. Laura Davis',
        specialization: 'Neurologist',
        location: 'USA',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    // Canada - Neurologist (3 doctors)
    {
        name: 'Dr. Lisa Anderson',
        specialization: 'Neurologist',
        location: 'Canada',
        availableDates: ['2024-10-18', '2024-10-19', '2024-10-20'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.8
    },
    {
        name: 'Dr. Paul Martin',
        specialization: 'Neurologist',
        location: 'Canada',
        availableDates: ['2024-10-21', '2024-10-22', '2024-10-23'],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.7
    },
    {
        name: 'Dr. Susan Clark',
        specialization: 'Neurologist',
        location: 'Canada',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    // UK - Neurologist (4 doctors)
    {
        name: 'Dr. James Mitchell',
        specialization: 'Neurologist',
        location: 'UK',
        availableDates: ['2024-10-21', '2024-10-22', '2024-10-23'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.7
    },
    {
        name: 'Dr. Helen Roberts',
        specialization: 'Neurologist',
        location: 'UK',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    {
        name: 'Dr. Andrew Evans',
        specialization: 'Neurologist',
        location: 'UK',
        availableDates: ['2024-10-27', '2024-10-28', '2024-10-29'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.5
    },
    {
        name: 'Dr. Fiona Walker',
        specialization: 'Neurologist',
        location: 'UK',
        availableDates: ['2024-10-30', '2024-10-31', '2024-11-01'],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.4
    },
    // Spain - Neurologist (3 doctors)
    {
        name: 'Dr. Maria Garcia',
        specialization: 'Neurologist',
        location: 'Spain',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    {
        name: 'Dr. Antonio Lopez',
        specialization: 'Neurologist',
        location: 'Spain',
        availableDates: ['2024-10-27', '2024-10-28', '2024-10-29'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.5
    },
    {
        name: 'Dr. Carmen Fernandez',
        specialization: 'Neurologist',
        location: 'Spain',
        availableDates: ['2024-10-30', '2024-10-31', '2024-11-01'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.4
    },
    // Japan - Neurologist (3 doctors)
    {
        name: 'Dr. Yuki Tanaka',
        specialization: 'Neurologist',
        location: 'Japan',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.5
    },
    {
        name: 'Dr. Hiroshi Sato',
        specialization: 'Neurologist',
        location: 'Japan',
        availableDates: ['2024-10-27', '2024-10-28', '2024-10-29'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.4
    },
    {
        name: 'Dr. Aiko Yamamoto',
        specialization: 'Neurologist',
        location: 'Japan',
        availableDates: ['2024-10-30', '2024-10-31', '2024-11-01'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.3
    },
    // Dentists
    // USA - Dentist (5 doctors)
    {
        name: 'Dr. Jennifer Brown',
        specialization: 'Dentist',
        location: 'USA',
        availableDates: ['2024-10-15', '2024-10-16', '2024-10-17'],
        image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.8
    },
    {
        name: 'Dr. Michael Davis',
        specialization: 'Dentist',
        location: 'USA',
        availableDates: ['2024-10-18', '2024-10-19', '2024-10-20'],
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.7
    },
    {
        name: 'Dr. Sarah Miller',
        specialization: 'Dentist',
        location: 'USA',
        availableDates: ['2024-10-21', '2024-10-22', '2024-10-23'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    {
        name: 'Dr. David Wilson',
        specialization: 'Dentist',
        location: 'USA',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.5
    },
    {
        name: 'Dr. Lisa Taylor',
        specialization: 'Dentist',
        location: 'USA',
        availableDates: ['2024-10-27', '2024-10-28', '2024-10-29'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.4
    },
    // UAE - Dentist (4 doctors)
    {
        name: 'Dr. Ahmed Hassan',
        specialization: 'Dentist',
        location: 'UAE',
        availableDates: ['2024-10-18', '2024-10-19', '2024-10-20'],
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.7
    },
    {
        name: 'Dr. Fatima Al-Rashid',
        specialization: 'Dentist',
        location: 'UAE',
        availableDates: ['2024-10-21', '2024-10-22', '2024-10-23'],
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db723f8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.6
    },
    {
        name: 'Dr. Omar Al-Zahra',
        specialization: 'Dentist',
        location: 'UAE',
        availableDates: ['2024-10-24', '2024-10-25', '2024-10-26'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.5
    },
    {
        name: 'Dr. Layla Al-Mansoori',
        specialization: 'Dentist',
        location: 'UAE',
        availableDates: ['2024-10-27', '2024-10-28', '2024-10-29'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=250&q=80',
        rating: 4.4
    }
];

// Display results based on query params
function displayResults() {
  const { specialization, location, date } = getQueryParams();
  console.log(location)

  if (specialization && location) {
    // Update header text
    const headerElement = document.querySelector(".we-found-the");
    if (headerElement) {
      headerElement.textContent = `We found the following doctors in ${location} specializing in ${specialization}${date ? ` on ${date}` : ''}.`;
    } else {
      console.warn("Header element with class '.we-found-the' not found.");
    }

    // Filter doctors based on specialization and location
    let filteredDoctors = doctors.filter(
      (doctor) =>
        doctor.specialization.toLowerCase() === specialization.toLowerCase() &&
        doctor.location.toLowerCase() === location.toLowerCase() &&
        (!date || doctor.availableDates.includes(date))
    );

    console.log(filteredDoctors, "Filtered Doctors");

    // Sort doctors by rating (high to low) initially
    filteredDoctors.sort((a, b) => b.rating - a.rating);

    // Function to render doctors
    const renderDoctors = (doctorsToRender) => {
      const doctorResults = document.getElementById("doctor-results");
      if (doctorResults) {
        doctorResults.innerHTML = ""; // Clear previous content

        if (doctorsToRender.length > 0) {
          doctorsToRender.forEach((doctor) => {
            const doctorCard = `
              <div class="doctor-card">
                <img src="${doctor.image}" alt="${doctor.name}" class="doctor-image">
                <div class="doctor-info">
                  <h3 class="doctor-name">${doctor.name}</h3>
                  <p class="doctor-specialization">${doctor.specialization}</p>
                  <p class="doctor-location">${doctor.location}</p>
                  <p class="doctor-rating">Rating: ${doctor.rating} <i class="fa-solid fa-star"></i></p>
                  <p class="doctor-availability">Available: ${doctor.availableDates.join(', ')}</p>
                  <button class="btn btn-primary book-btn" data-doctor="${doctor.name}">Book Appointment</button>
                </div>
              </div>
            `;
            doctorResults.innerHTML += doctorCard;
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
        } else {
          doctorResults.innerHTML = `<p>No doctors found for the selected criteria.</p>`;
        }
      } else {
        console.warn("Doctor results element not found.");
      }
    };

    // Initial render
    renderDoctors(filteredDoctors);

    // Add sort functionality
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        const sortBy = e.target.value;
        let sortedDoctors = [...filteredDoctors];

        switch (sortBy) {
          case 'rating':
            sortedDoctors.sort((a, b) => b.rating - a.rating);
            break;
          case 'name':
            sortedDoctors.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case 'location':
            sortedDoctors.sort((a, b) => a.location.localeCompare(b.location));
            break;
          default:
            break;
        }

        renderDoctors(sortedDoctors);
      });
    }
  } else {
    console.warn("Specialization or location not provided in query params.");
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", displayResults);
