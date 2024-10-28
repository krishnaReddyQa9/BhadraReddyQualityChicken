window.onload = () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("display");
    }, 3000);
  };
  
  document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });
  
  document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });
  function changeLanguage(language) {
    const translations = {
        en: {
            title: "Bhadra Reddy Quality Chicken",
            description: "We are excited to provide our customers with fresh, high-quality chicken.",
            discover: "Discover Now",
            menuHome: "Home",
            menuAboutUs: "About Us",
            menuTeam: "Team",
            menuPricing: "Pricing",
            menuContact: "Contact",
            aboutUsHeading: "About Us",
            aboutUsText: "With over 12 years of experience in delivering top-quality, fresh chicken, we are dedicated to ensuring customer satisfaction for every occasion. Our commitment to sourcing the finest ingredients and adhering to strict quality standards guarantees that each product meets our customers' expectations.",
            teamHeading: "Our Team",
            teamMember1: "Bhadra Reddy - Owner",
            teamMember1Desc: "Reddy is a nice and cool genius who works hard to provide high-quality service to customers for their complete satisfaction.",
            teamMember2: "Raghava Reddy - Owner",
            teamMember2Desc: "Raghava Reddy has completed his graduation and is successfully working with his team to help deliver services efficiently.",
            customerFeedback: "Customer Feedback - Excellent products with outstanding quality",
            customerFeedbackDesc: "This is an amazing product, consistently maintained with high quality. They provide top-grade, fresh chicken that stands out for its taste and quality.",
            contactHeading: "Contact Us",
            contactRaghava: "Raghava Reddy",
            contactBhadra: "Bhadra Reddy",
            email: "Email",
            googleMaps: "Find us on Google Maps",
            copyright: "Copyright © 2024Oct, krishnareddyDeveloper - All Rights Reserved"
        },
        te: {
            title: "భద్రా రెడ్డి క్వాలిటీ చికెన్",
            description: "తాజా, అధిక నాణ్యత గల చికెన్ అందించడంలో మేము సంతోషిస్తున్నాము.",
            discover: "ఇప్పుడు కనుగొనండి",
            menuHome: "హోమ్",
            menuAboutUs: "మా గురించి",
            menuTeam: "జట్టు",
            menuPricing: "ధరలు",
            menuContact: "సంప్రదించండి",
            aboutUsHeading: "మా గురించి",
            aboutUsText: "మేము 12 ఏళ్లకు పైగా నాణ్యతతో కూడిన, తాజా చికెన్ ను అందిస్తున్నాము. ప్రతిఒక్కరూ సంతృప్తిగా ఉండేందుకు కృషి చేస్తాము.",
            teamHeading: "మా జట్టు",
            teamMember1: "భద్రా రెడ్డి - యజమాని",
            teamMember1Desc: "భద్రా రెడ్డి కస్టమర్లకు ఉత్తమ సేవ అందించడంలో కృషి చేస్తున్నాడు.",
            teamMember2: "రాఘవ రెడ్డి - యజమాని",
            teamMember2Desc: "రాఘవ రెడ్డి విజయవంతంగా తన బృందంతో సేవలను సమర్థవంతంగా అందించడానికి పని చేస్తున్నాడు.",
            customerFeedback: "కస్టమర్ ఫీడ్బ్యాక్ - అద్భుతమైన నాణ్యతతో ఉన్న ఉత్పత్తులు",
            customerFeedbackDesc: "ఇది ఒక అద్భుతమైన ఉత్పత్తి, నాణ్యత కలిగిన తాజా చికెన్ అందిస్తారు.",
            contactHeading: "సంప్రదించండి",
            contactRaghava: "Raghava Reddy: 7416616572",
            contactBhadra: "Bhadra Reddy:9347975568 ",
            contactEmail: "mailto:Raghava2any1@gmail.com",
            googleMaps: "గూగుల్ మ్యాప్స్ లో మమ్మల్ని కనుగొనండి https://g.co/kgs/a6Zc6Rg",
            copyright: "కాపీరైట్ © 2024Oct, కృష్ణరెడ్డి డెవలపర్ - అన్ని హక్కులు రిజర్వ్."
        },
       
    };

    const elements = {
        title: document.querySelector("h1"),
        description: document.querySelector(".banner p"),
        discover: document.querySelector(".banner button"),
        menuHome: document.querySelector("a[href='#home']"),
        menuAboutUs: document.querySelector("a[href='#about-us']"),
        menuTeam: document.querySelector("a[href='#team']"),
        menuPricing: document.querySelector("a[href='#pricing']"),
        menuContact: document.querySelector("a[href='#contact']"),
        aboutUsHeading: document.querySelector(".about-us .section-heading"),
        aboutUsText: document.querySelector(".about-us .service-text"),
        teamHeading: document.querySelector(".team .section-heading"),
        teamMember1: document.querySelectorAll(".team .card-info h2")[0],
        teamMember1Desc: document.querySelectorAll(".team .card-info p")[0],
        teamMember2: document.querySelectorAll(".team .card-info h2")[1],
        teamMember2Desc: document.querySelectorAll(".team .card-info p")[1],
        customerFeedback: document.querySelectorAll(".team .card-info h2")[2],
        customerFeedbackDesc: document.querySelectorAll(".team .card-info p")[2],
        contactHeading: document.querySelector(".contact-heading"),
        contactRaghava: document.querySelectorAll(".contact-right p")[0],
        contactBhadra: document.querySelectorAll(".contact-right p")[1],
        email: document.querySelectorAll(".contact-right p")[2],
        googleMaps: document.querySelectorAll(".contact-right p")[3],
        copyright: document.querySelector(".footer-content p")
    };

    for (const key in elements) {
        if (elements[key]) elements[key].textContent = translations[language][key];
    }
}


function orderNow() {
    // Customer Welcome Message
    alert("Welcome to Bhadra Reddy Quality Chicken's!");

    // Redirect to WhatsApp chat with the admin’s phone number and pre-filled message
    let adminPhoneNumber = "917416616572"; // Replace with the admin's phone number
    let message = "New order placed by a customer!";
    window.open(`https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}


