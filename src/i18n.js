import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    EN: {
        translation: {
            navbar: {
                home: "Home",
                about: "About Us",
                services: "Services",
                contact: "Contact Us"
            },
            about: {
                title: "About Us",
                subtitle: "Learn more about our company and our mission.",
                hero: {
                    certified: "German Quality Certified",
                    title: "About",
                    titleHighlight: "Nova Service",
                    subtitle: "Germany's premium cleaning service delivering eco-friendly excellence since 2015."
                },
                story: {
                    title: "Nova Service: Excellence that goes beyond cleaning",
                    text: "In 2015 in Berlin, the founder of Nova Service started with a clear mission: to deliver exceptional cleaning services that not only meet but exceed expectations. What began as a small, dedicated team has today developed into one of Germany's most trusted brands.",
                    principle: {
                        title: "What we stand for: The NOVA Principle",
                        subtitle: "Our name is no coincidence, but a promise. NOVA defines our daily way of working:",
                        items: [
                            { letter: "N", word: "New", desc: "We think processes fresh and innovative." },
                            { letter: "O", word: "Optimized", desc: "Efficiency and highest quality come first." },
                            { letter: "V", word: "Responsible", desc: "We act sustainably towards the environment and society." },
                            { letter: "A", word: "Ambitious", desc: "We are never satisfied with the status quo." }
                        ]
                    },
                    expansion: {
                        title: "More than just cleanliness: Your partner for skilled personnel",
                        text: "Today Nova Service is far more than a classic cleaning service. We have developed into a professional personnel agency that convinces through first-class quality."
                    }
                },
                values: {
                    title: "Our Values",
                    items: [
                        { title: "Quality", desc: "Uncompromising standards in every service" },
                        { title: "Reliability", desc: "Consistent, dependable service you can trust" },
                        { title: "Sustainability", desc: "Eco-friendly practices for a cleaner future" }
                    ]
                },
                stats: {
                    clients: "Happy Clients",
                    experience: "Years Experience",
                    staff: "Professional Staff",
                    certified: "Insured & Certified",
                    badge: "German Quality Certified"
                },
                transformation: {
                    title: "Before & After: The Transformation",
                    slideText: "Slide to see the difference Nova Service makes",
                    before: "Before",
                    after: "After",
                    caption: "Before: Dusty condition → After: Nova Service professional cleaning"
                },
                whyChoose: {
                    title: "Why Choose Nova Service",
                    subtitle: "We combine expertise, eco-friendly practices, and German precision to deliver exceptional cleaning services.",
                    features: [
                        { title: "Trained Professionals", description: "Our team consists of certified cleaning experts with extensive training and experience." },
                        { title: "Eco-Friendly Products", description: "We use environmentally safe cleaning products that are gentle on your space and the planet." },
                        { title: "Affordable Pricing", description: "Competitive rates with transparent pricing and no hidden fees." },
                        { title: "On-Time Service", description: "We respect your schedule and always arrive on time, every time." },
                        { title: "Satisfaction Guarantee", description: "100% satisfaction guaranteed - we'll make it right if you're not happy." },
                        { title: "Quality Certified", description: "Fully insured and certified to meet German quality standards." }
                    ]
                },
                testimonials: {
                    title: "What Our Clients Say",
                    subtitle: "Trusted by houses worldwide",
                    items: [
                        { name: "Schmidt Family", location: "Munich", text: "Nova Service transformed our home. Their attention to detail is unmatched, and the team is always professional and courteous.", service: "Residential Cleaning" },
                        { name: "TechHub GmbH", location: "Berlin", text: "We've been using Nova Service for our office for over a year. Consistent quality, reliable service, and excellent communication.", service: "Commercial Cleaning" },
                        { name: "Maria Weber", location: "Hamburg", text: "The eco-friendly products were a game-changer for our family. Our home has never been cleaner or safer!", service: "Deep Cleaning" },
                        { name: "Restaurant Goldener Löffel", location: "Frankfurt", text: "Outstanding service for our restaurant. They understand the specific needs of food service establishments.", service: "Commercial Cleaning" }
                    ]
                },
                contact: {
                    title: "Ready to Experience the",
                    titleHighlight: "Nova Service Difference?",
                    teamTitle: "Our Team",
                    subtitle: "Join hundreds of satisfied customers across Germany who trust us for professional, reliable, and eco-friendly cleaning services.",
                    quoteBtn: "Get Free Quote",
                    contactBtn: "Contact Us"
                }
            },
            home: {
                title: "PREMIER",
                titleHighlight: "CLEANING",
                titleEnd: "SOLUTION",
                reviewText: "BEST CLEANING SERVICES FOR YOUR BUSINESS AND HOUSE",
                rating: "4.5",
                cta: "GET OUR SERVICE",
                minimal: "MINIMAL",
                feature: "Feature",
                description: "Description of the feature",
                serviceType: "Service Type",
                selectDate: "Select Date",
                seeDetails: "See Details",
                serviceOptions: {
                    residential: "Residential Cleaning",
                    commercial: "Commercial Cleaning",
                    deep: "Deep Cleaning",
                    move: "Move In/Out"
                },
                bookNow: "Book Now",
                totalReviews: "12M+ Total Reviews",
                videoFallback: "Your browser does not support the video tag.",
                work: {
                    title: "OUR",
                    titleHighlight: "WORK",
                    titleEnd: "THAT WE DO",
                    description: "discover the joy of a pristine space with Nova Service. Contact us Today to schedule your cleaning appointment and experience",
                    item01: "COMMERCIAL CLEANING",
                    item02: "REGULAR CLEANING",
                    item03: "KITCHEN CLEANING",
                    item03: "KITCHEN CLEANING",
                    explore: "25+ SERVICES YOU CAN EXPLORE",
                    exploreText: "SERVICE YOU CAN EXPLORE"
                },
                game: {
                    status: "Status",
                    progress: "Cleaning",
                    successTitle: "Great job!",
                    successText: "This is how we clean professionally.",
                    reset: "Reset Game",
                    instruction: "DRAG",
                    instructionSuffix: "to clean the surface",
                    interactiveExperience: "Interactive Experience",
                    headingPrimary: "Experience",
                    headingSecondary: "Cleanliness",
                    description: "Try our interactive window cleaning tool. See how we transform even the dirtiest surfaces!",
                    video: {
                        headingPrimary: "OUR BEST",
                        headingHighlight: "CLEANING",
                        headingEnd: "SERVICES"
                    }
                }
            },
            footer: {
                premier: "PREMIER",
                cleaning: "CLEANING",
                copyright: "@NOVA SERVICE. ALL RIGHTS RESERVED",
                design: "Developed BY ",
                designer: "LEPTOTECH.COM"
            },
            services: {
                ticker: {
                    iso: "ISO", isoSuffix: "9001",
                    eco: "ECO", ecoSuffix: "FRIENDLY",
                    certified: "CERTIFIED", certifiedSuffix: "PRO",
                    safety: "SAFETY", safetySuffix: "FIRST"
                },
                title: "Our Services",
                subtitle: "Curated Cleaning Services",
                expertise: "Our Expertise",
                hero: {
                    title: "Experience Our Premium Cleaning Services",
                    subtitle: "Discover the perfect cleaning solution for your home and business. tailored to your needs with excellence in every detail.",
                    cta: "Book Now",
                    learnMore: "Learn More",
                    trusted: "Trusted by 500+ Clients"
                },
                categories: {
                    all: "All",
                    residential: "Residential",
                    commercial: "Commercial",
                    specialized: "Specialized",
                    industrial: "Industrial",
                    outdoor: "Outdoor",
                    sanitation: "Sanitation",
                    manpower: "Manpower"
                },
                items: {
                    residential: {
                        title: "Residential Cleaning",
                        description: "Comprehensive cleaning solutions for homes of all sizes. From cozy apartments to expansive estates, we ensure every corner sparkles.",
                        features: ["House cleaning", "Apartment cleaning", "Deep cleaning", "Move-in / Move-out cleaning"]
                    },
                    commercial: {
                        title: "Commercial Cleaning",
                        description: "Maintain a professional image with our office and corporate cleaning services. We create healthy, productive workspaces.",
                        features: ["Office cleaning", "Corporate building cleaning", "Bank & showroom cleaning"]
                    },
                    specialized: {
                        title: "Specialized Cleaning",
                        description: "Expert care for your valuable assets. Our specialized techniques revive carpets, upholstery, and delicate surfaces.",
                        features: ["Window cleaning", "Carpet & upholstery cleaning", "Sofa & mattress cleaning", "Floor polishing"]
                    },
                    industrial: {
                        title: "Industrial Cleaning",
                        description: "Heavy-duty cleaning for factories and warehouses. We handle specific industrial requirements and safety standards.",
                        features: ["Factory cleaning", "Warehouse cleaning", "Machine & equipment cleaning"]
                    },
                    outdoor: {
                        title: "Outdoor & Maintenance",
                        description: "Enhance your curb appeal with our outdoor maintenance. We keep your exterior areas clean, safe, and welcoming.",
                        features: ["Pressure washing", "Garden / yard cleaning", "Snow removal / winter services"]
                    },
                    sanitation: {
                        title: "Sanitation & Hygiene",
                        description: "Protect health with our thorough sanitization services. We use certified methods to eliminate pathogens and pests.",
                        features: ["Disinfection & sanitization", "Pest control cleaning", "Post-COVID / bio-cleaning"]
                    },
                    manpower: {
                        title: "Man Power Supply",
                        description: "Reliable staffing solutions for your facility needs. We provide skilled and trained personnel for various roles.",
                        features: ["Skilled labor supply", "General cleaning staff", "Maintenance personnel"]
                    },
                    warehouseWorkers: {
                        title: "Warehouse Workers",
                        description: "Warehouse Workforce Supply - Efficient and reliable manpower for smooth warehouse operations. We provide trained workers for inventory handling, packing, loading, and dispatch to keep your supply chain running without delays.",
                        features: ["Inventory handling", "Packing & sorting", "Loading & unloading"]
                    },
                    forkliftDrivers: {
                        title: "Forklift Drivers",
                        description: "Forklift Driver Supply - Certified and experienced forklift operators for safe and efficient material movement. Our drivers ensure proper handling of goods, reducing damage and improving operational speed.",
                        features: ["Certified operators", "Material handling", "Warehouse logistics"]
                    },
                    constructionWorkers: {
                        title: "Construction Workers",
                        description: "Construction Manpower Supply - Skilled and semi-skilled workers for all types of construction projects. From residential to commercial sites, we provide reliable manpower to meet your project timelines.",
                        features: ["Skilled labor", "Site workers", "Project support"]
                    },
                    servers: {
                        title: "Servers (Hotel / Catering)",
                        description: "Hospitality Staff Supply - Professional and well-trained servers for hotels, restaurants, and catering services. We ensure quality service, customer satisfaction, and smooth hospitality operations.",
                        features: ["Hotel staff", "Event servers", "Catering support"]
                    },
                    eventAssistants: {
                        title: "Event Management Assistants",
                        description: "Event Support Staff Supply - Dedicated event assistants to manage crowd handling, registrations, coordination, and on-ground support for all types of events and functions.",
                        features: ["Event crew", "Crowd management", "On-ground support"]
                    },
                    nonSkilledWorkforce: {
                        title: "Non-Skilled Workforce (All Works)",
                        description: "General Manpower Supply - Reliable non-skilled workforce for all types of general tasks. Ideal for cleaning, shifting, loading, helper roles, and temporary labor requirements.",
                        features: ["Helper staff", "General labor", "Temporary workforce"]
                    }
                },
                whyChoose: {
                    title: "Why Choose Us",
                    subtitle: "We deliver excellence in every swipe and scrub.",
                    heading: "Excellence in",
                    headingItalic: "Every Detail.",
                    discover: "Discover",
                    features: [
                        { title: "Eco-Friendly", desc: "We use sustainable products safe for your family and pets." },
                        { title: "Expert Staff", desc: "Our team is professionally trained and background checked." },
                        { title: "Satisfaction Guaranteed", desc: "If you're not happy, we'll make it right." }
                    ]
                },
                process: {
                    title: "Our Process",
                    subtitle: "Simple steps to a cleaner environment.",
                    steps: [
                        { title: "Book Online", desc: "Choose your service and preferred time." },
                        { title: "We Clean", desc: "Our experts arrive and make your space shine." },
                        { title: "You Relax", desc: "Enjoy your fresh, clean environment." }
                    ]
                },
                promise: {
                    title: "Our Promise",
                    heading: "Professional Standards You Can Trust.",
                    desc: "We balance our premium aesthetics with rigorous operational standards. Safety, reliability, and quality are the pillars of our service.",
                    stats: [
                        { value: "100%", label: "Insured" },
                        { value: "24/7", label: "Support" },
                        { value: "50+", label: "Experts" }
                    ],
                    features: [
                        { title: "Safety First", desc: "Rigorous background checks and ongoing safety training for all staff." },
                        { title: "Eco-Conscious", desc: "We exclusively use biodegradable and non-toxic cleaning agents." },
                        { title: "Quality Control", desc: "Regular site inspections and satisfaction follow-ups ensure consistency." },
                        { title: "Fully Insured", desc: "Comprehensive liability coverage for your complete peace of mind." }
                    ]
                },
                testimonials: {
                    title: "Client Success Stories",
                    subtitle: "Real feedback from our satisfied partners.",
                    items: [
                        { category: 'Residential', name: "Sarah M.", role: "Homeowner", text: "Absolutely stunning service. My house has never looked this clean! They paid attention to every little detail." },
                        { category: 'Residential', name: "David L.", role: "Tenant", text: "The move-out cleaning was perfect. Got my full deposit back thanks to their hard work." },
                        { category: 'Commercial', name: "James P.", role: "Office Manager", text: "Professional, reliable, and thorough. Highly recommended for corporate needs. Our office feels brand new." },
                        { category: 'Commercial', name: "TechStart Inc.", role: "Startup", text: "Great team. They clean our workspace every evening without disrupting our late-night shifts." },
                        { category: 'Specialized', name: "Emily R.", role: "Restaurant Owner", text: "They deep cleaned our kitchen to perfection. Passed inspection with flying colors." },
                        { category: 'Specialized', name: "Hotel Grand", role: "Manager", text: "Our carpets look impeccable. The upholstery cleaning brought our lobby furniture back to life." },
                        { category: 'Industrial', name: "Manufacturing Co.", role: "Plant Supervisor", text: "Strict adherence to safety protocols. They handle our heavy machinery cleaning with great expertise." },
                        { category: 'Outdoor', name: "Green Gardens HOA", role: "Board Member", text: "Our community walkways and driveways are spotless after their pressure washing service." },
                        { category: 'Sanitation', name: "City Clinic", role: "Administrator", text: "Critical sanitation services we rely on. Their disinfection standards are medical-grade." },
                        { category: 'Manpower', name: "Event Horizon", role: "Event Planner", text: "Provided excellent support staff for our annual conference. Professional and well-uniformed." }
                    ]
                },
                faq: {
                    title: "Frequently Asked Questions",
                    subtitle: "Find answers to your specific service questions.",
                    stillHaveQuestions: "Still have questions?",
                    contactSupport: "Contact our support team 24/7 for immediate assistance.",
                    supportLabel: "SUPPORT",
                    noGeneric: "No generic FAQs for this specific category found.",
                    items: [
                        { category: 'All', q: "Are your cleaners insured?", a: "Yes, all our staff are fully insured and background-checked for your peace of mind." },
                        { category: 'All', q: "How do I book a service?", a: "You can book directly through our website or give us a call for a custom quote." },
                        { category: 'Residential', q: "Do I need to be home during the cleaning?", a: "No, as long as we have access to your home, you can enjoy your day while we clean." },
                        { category: 'Residential', q: "Do you bring your own supplies?", a: "Yes, we bring all necessary high-quality, eco-friendly cleaning supplies and equipment." },
                        { category: 'Commercial', q: "Can you clean after business hours?", a: "Absolutely. We offer flexible scheduling, including evenings and weekends, to minimize disruption." },
                        { category: 'Commercial', q: "Do you offer contract rates?", a: "Yes, we have customized contract plans for regular commercial cleaning needs." },
                        { category: 'Specialized', q: "How long does carpet drying take?", a: "Typically 4-6 hours, depending on humidity and airflow. We use high-speed fans to accelerate the process." },
                        { category: 'Industrial', q: "Do your staff have safety certifications?", a: "Yes, our industrial team is OSHA certified and trained in hazardous material handling." },
                        { category: 'Outdoor', q: "Is your pressure washing safe for old brick?", a: "We adjust pressure levels to ensure effective cleaning without damaging sensitive surfaces." },
                        { category: 'Manpower', q: "What distinguishes your staff?", a: "Our manpower is rigorously screened, trained in hospitality and safety, and uniformly presented." }
                    ]
                },
                ctaSection: {
                    title: "Ready to get started?",
                    subtitle: "Book your service today and experience the difference.",
                    button: "Book Now"
                }
            },
            contact: {
                title: "Contact Us",
                subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
                name: "Name",
                namePlaceholder: "Your Name",
                email: "Email",
                emailPlaceholder: "your@email.com",
                message: "Message",
                messagePlaceholder: "How can we help?",
                send: "Send Message"
            },
            booking: {
                title: "Instant",
                titleHighlight: "Booking",
                subtitle: "Professional cleaning service at your doorstep.",
                nameLabel: "Your Name",
                namePlaceholder: "John Doe",
                phoneLabel: "Phone Number",
                phonePlaceholder: "+49 170...",
                locationLabel: "Service Location",
                locationPlaceholder: "Enter address...",
                currentLocation: "Current Location",
                viewMap: "View Map",
                dateLabel: "Date",
                datePlaceholder: "Select date",
                timeLabel: "Time",
                serviceLabel: "Service Requested",
                servicePlaceholder: "Service name...",
                submitButton: "Confirm via WhatsApp",
                mapAlert: "Please find your location on Google Maps, copy the address, and paste it here.",
                locationError: "Unable to retrieve your location. Please check your browser permissions.",
                geoError: "Geolocation is not supported by your browser"
            }
        }
    },
    DE: {
        translation: {
            navbar: {
                home: "Startseite",
                about: "Über uns",
                services: "Dienstleistungen",
                contact: "Kontakt"
            },
            about: {
                title: "Über uns",
                subtitle: "Erfahren Sie mehr über unser Unternehmen und unsere Mission.",
                hero: {
                    certified: "Deutsche Qualität zertifiziert",
                    title: "Über",
                    titleHighlight: "Nova Service",
                    subtitle: "Deutschlands Premium-Reinigungsdienst liefert umweltfreundliche Exzellenz seit 2015."
                },
                story: {
                    title: "Nova Service: Exzellenz, die über die Reinigung hinausgeht",
                    text: "Im Jahr 2015 in Berlin, startete der Gründer von Nova Service mit einer klaren Mission: außergewöhnliche Reinigungsdienste zu liefern, die Erwartungen nicht nur erfüllen, sondern übertreffen. Was als kleines, engagiertes Team begann, hat sich heute zu einer der vertrauenswürdigsten Marken Deutschlands entwickelt.",
                    principle: {
                        title: "Wofür wir stehen: Das NOVA-Prinzip",
                        subtitle: "Unser Name ist für uns kein Zufall, sondern ein Versprechen. NOVA definiert unsere tägliche Arbeitsweise:",
                        items: [
                            { letter: "N", word: "Neu", desc: "Wir denken Prozesse frisch und innovativ." },
                            { letter: "O", word: "Optimiert", desc: "Effizienz und höchste Qualität stehen an erster Stelle." },
                            { letter: "V", word: "Verantwortungsvoll", desc: "Wir handeln nachhaltig gegenüber Umwelt und Gesellschaft." },
                            { letter: "A", word: "Ambitioniert", desc: "Wir geben uns nie mit dem Status quo zufrieden." }
                        ]
                    },
                    expansion: {
                        title: "Mehr als nur Sauberkeit: Ihr Partner für Fachpersonal",
                        text: "Heute ist Nova Service weit mehr als ein klassischer Reinigungsdienst. Wir haben uns zu einer professionellen Personalvermittlung entwickelt, die durch erstklassige Qualität überzeugt."
                    }
                },
                values: {
                    title: "Unsere Werte",
                    items: [
                        { title: "Qualität", desc: "Kompromisslose Standards bei jedem Service" },
                        { title: "Zuverlässigkeit", desc: "Konsistenter, verlässlicher Service, dem Sie vertrauen können" },
                        { title: "Nachhaltigkeit", desc: "Umweltfreundliche Praktiken für eine sauberere Zukunft" }
                    ]
                },
                stats: {
                    clients: "Zufriedene Kunden",
                    experience: "Jahre Erfahrung",
                    staff: "Professionelles Personal",
                    certified: "Versichert & Zertifiziert",
                    badge: "Deutsche Qualität zertifiziert"
                },
                transformation: {
                    title: "Vorher & Nachher",
                    slideText: "Schieben Sie, um den Unterschied zu sehen",
                    before: "Vorher",
                    after: "Nachher",
                    caption: "Vorher: Staubig → Nachher: Professionelle Reinigung durch Nova Service"
                },
                whyChoose: {
                    title: "Warum Nova Service wählen",
                    subtitle: "Wir kombinieren Fachwissen, umweltfreundliche Praktiken und deutsche Präzision, um außergewöhnliche Reinigungsdienste zu liefern.",
                    features: [
                        { title: "Geschulte Profis", description: "Unser Team besteht aus zertifizierten Reinigungsexperten mit umfangreicher Ausbildung und Erfahrung." },
                        { title: "Umweltfreundliche Produkte", description: "Wir verwenden umweltsichere Reinigungsprodukte, die sanft zu Ihrem Raum und dem Planeten sind." },
                        { title: "Erschwingliche Preise", description: "Wettbewerbsfähige Preise mit transparenter Preisgestaltung und ohne versteckte Gebühren." },
                        { title: "Pünktlicher Service", description: "Wir respektieren Ihren Zeitplan und kommen immer pünktlich." },
                        { title: "Zufriedenheitsgarantie", description: "100% Zufriedenheitsgarantie - wir machen es wieder gut, wenn Sie nicht zufrieden sind." },
                        { title: "Qualität zertifiziert", description: "Voll versichert und zertifiziert nach deutschen Qualitätsstandards." }
                    ]
                },
                testimonials: {
                    title: "Was unsere Kunden sagen",
                    subtitle: "Weltweit von Haushalten vertraut",
                    items: [
                        { name: "Familie Schmidt", location: "München", text: "Nova Service hat unser Zuhause verwandelt. Ihre Liebe zum Detail ist unübertroffen und das Team ist immer professionell und höflich.", service: "Privatreinigung" },
                        { name: "TechHub GmbH", location: "Berlin", text: "Wir nutzen Nova Service seit über einem Jahr für unser Büro. Konstante Qualität, zuverlässiger Service und hervorragende Kommunikation.", service: "Gewerbereinigung" },
                        { name: "Maria Weber", location: "Hamburg", text: "Die umweltfreundlichen Produkte waren ein Wendepunkt für unsere Familie. Unser Zuhause war noch nie sauberer oder sicherer!", service: "Tiefenreinigung" },
                        { name: "Restaurant Goldener Löffel", location: "Frankfurt", text: "Hervorragender Service für unser Restaurant. Sie verstehen die spezifischen Bedürfnisse von Gastronomiebetrieben.", service: "Gewerbereinigung" }
                    ]
                },
                contact: {
                    title: "Bereit, den",
                    titleHighlight: "Unterschied zu erleben?",
                    teamTitle: "Unser Team",
                    subtitle: "Schließen Sie sich hunderten zufriedener Kunden in ganz Deutschland an, die uns für professionelle, zuverlässige und umweltfreundliche Reinigungsdienste vertrauen.",
                    quoteBtn: "Angebot einholen",
                    contactBtn: "Kontaktieren Sie uns"
                }
            },
            home: {
                title: "ERSTKLASSIGE",
                titleHighlight: "REINIGUNG",
                titleEnd: "LÖSUNG",
                reviewText: "BESTE REINIGUNGSDIENSTE FÜR IHR UNTERNEHMEN UND ZUHAUSE",
                rating: "4.5",
                cta: "SERVICE BUCHEN",
                minimal: "MINIMAL",
                feature: "Merkmal",
                description: "Beschreibung des Merkmals",
                serviceType: "Dienstleistungstyp",
                selectDate: "Datum wählen",
                seeDetails: "Details sehen",
                serviceOptions: {
                    residential: "Privatreinigung",
                    commercial: "Gewerbereinigung",
                    deep: "Tiefenreinigung",
                    move: "Einzug/Auszug"
                },
                bookNow: "Jetzt buchen",
                totalReviews: "12M+ Bewertungen",
                videoFallback: "Ihr Browser unterstützt das Video-Tag nicht.",
                work: {
                    title: "UNSERE",
                    titleHighlight: "ARBEIT",
                    titleEnd: "DIE WIR TUN",
                    description: "Entdecken Sie die Freude an einem makellosen Raum mit Nova Service. Kontaktieren Sie uns noch heute, um Ihren Reinigungstermin zu vereinbaren.",
                    item01: "GEWERBEREINIGUNG",
                    item02: "REGELMÄSSIGE REINIGUNG",
                    item03: "KÜCHENREINIGUNG",
                    item03: "KÜCHENREINIGUNG",
                    explore: "25+ DIENSTLEISTUNGEN ENTDECKEN",
                    exploreText: "DIENSTLEISTUNGEN ENTDECKEN"
                },
                game: {
                    status: "Zustand",
                    progress: "Reinigung",
                    successTitle: "Gute Arbeit!",
                    successText: "So reinigen wir professionell.",
                    reset: "Spiel zurücksetzen",
                    instruction: "ZIEHEN",
                    instructionSuffix: "um die Oberfläche zu reinigen",
                    interactiveExperience: "Interaktive Erfahrung",
                    headingPrimary: "Erlebe",
                    headingSecondary: "Sauberkeit",
                    description: "Probieren Sie unser interaktives Fensterreinigungstool aus. Sehen Sie, wie wir selbst die schmutzigsten Oberflächen verwandeln!",
                    video: {
                        headingPrimary: "UNSERE BESTEN",
                        headingHighlight: "REINIGUNGS",
                        headingEnd: "DIENSTLEISTUNGEN"
                    }
                }
            },
            footer: {
                premier: "ERSTKLASSIGE",
                cleaning: "REINIGUNG",
                copyright: "@NOVA SERVICE. ALLE RECHTE VORBEHALTEN",
                design: "DESIGN VON ",
                designer: "LEPTOTECH.COM"
            },
            services: {
                ticker: {
                    iso: "ISO", isoSuffix: "9001",
                    eco: "UMWELT", ecoSuffix: "FREUNDLICH",
                    certified: "ZERTIFIZIERT", certifiedSuffix: "PRO",
                    safety: "SICHERHEIT", safetySuffix: "ZUERST"
                },
                title: "Unsere Dienstleistungen",
                subtitle: "Kuratierte Reinigungsdienste",
                expertise: "Unsere Kompetenz",
                hero: {
                    title: "Erleben Sie unsere Premium-Reinigungsdienste",
                    subtitle: "Entdecken Sie die perfekte Reinigungslösung für Ihr Zuhause und Ihr Unternehmen. Maßgeschneidert auf Ihre Bedürfnisse mit Exzellenz in jedem Detail.",
                    cta: "Jetzt buchen",
                    learnMore: "Mehr erfahren",
                    trusted: "Vertraut von 500+ Kunden"
                },
                categories: {
                    all: "Alle",
                    residential: "Privat",
                    commercial: "Gewerblich",
                    specialized: "Spezialisiert",
                    industrial: "Industriell",
                    outdoor: "Außenbereich",
                    sanitation: "Sanitär",
                    manpower: "Personal"
                },
                items: {
                    residential: {
                        title: "Privatreinigung",
                        description: "Umfassende Reinigungslösungen für Haushalte aller Größen. Von gemütlichen Wohnungen bis zu weitläufigen Anwesen sorgen wir dafür, dass jede Ecke funkelt.",
                        features: ["Hausreinigung", "Wohnungsreinigung", "Grundreinigung", "Umzugsreinigung"]
                    },
                    commercial: {
                        title: "Gewerbliche Reinigung",
                        description: "Pflegen Sie ein professionelles Image mit unseren Büro- und Firmenreinigungsdiensten. Wir schaffen gesunde, produktive Arbeitsbereiche.",
                        features: ["Büroreinigung", "Firmengebäudereinigung", "Bank- & Ausstellungsraumreinigung"]
                    },
                    specialized: {
                        title: "Spezialreinigung",
                        description: "Expertenpflege für Ihre wertvollen Vermögenswerte. Unsere spezialisierten Techniken beleben Teppiche, Polstermöbel und empfindliche Oberflächen.",
                        features: ["Fensterreinigung", "Teppich- & Polsterreinigung", "Sofa- & Matratzenreinigung", "Bodenpolitur"]
                    },
                    industrial: {
                        title: "Industriereinigung",
                        description: "Schwerlastreinigung für Fabriken und Lagerhallen. Wir kümmern uns um spezifische industrielle Anforderungen und Sicherheitsstandards.",
                        features: ["Fabrikreinigung", "Lagerreinigung", "Maschinen- & Anlagenreinigung"]
                    },
                    outdoor: {
                        title: "Außenbereich & Wartung",
                        description: "Verbessern Sie Ihre Außenwirkung mit unserer Außenwartung. Wir halten Ihre Außenbereiche sauber, sicher und einladend.",
                        features: ["Hochdruckreinigung", "Garten- / Hofreinigung", "Schneeräumung / Winterdienste"]
                    },
                    sanitation: {
                        title: "Hygiene & Desinfektion",
                        description: "Schützen Sie die Gesundheit mit unseren gründlichen Desinfektionsdiensten. Wir verwenden zertifizierte Methoden.",
                        features: ["Desinfektion & Hygiene", "Schädlingsbekämpfung", "Post-COVID / Bioreinigung"]
                    },
                    manpower: {
                        title: "Personalbereitstellung",
                        description: "Zuverlässige Personallösungen für Ihre Gebäudeanforderungen. Wir stellen qualifiziertes und geschultes Personal bereit.",
                        features: ["Fachkräftebereitstellung", "Allgemeines Reinigungspersonal", "Wartungspersonal"]
                    },
                    warehouseWorkers: {
                        title: "Lagerarbeiter",
                        description: "Lagerbelegschaft - Effiziente und zuverlässige Arbeitskräfte für reibungslose Lagerabläufe. Wir stellen geschulte Mitarbeiter für Bestandsführung, Verpackung, Verladung und Versand bereit.",
                        features: ["Bestandsführung", "Verpackung & Sortierung", "Be- & Entladen"]
                    },
                    forkliftDrivers: {
                        title: "Staplerfahrer",
                        description: "Staplerfahrer-Service - Zertifizierte und erfahrene Gabelstaplerfahrer für den sicheren und effizienten Materialtransport. Unsere Fahrer sorgen für eine ordnungsgemäße Handhabung der Waren.",
                        features: ["Zertifizierte Bediener", "Materialtransport", "Lagerlogistik"]
                    },
                    constructionWorkers: {
                        title: "Bauarbeiter",
                        description: "Bau-Personalgestellung - Fachkräfte und angelernte Kräfte für alle Arten von Bauprojekten. Von Wohn- bis zu Gewerbeprojekten bieten wir zuverlässiges Personal.",
                        features: ["Fachkräfte", "Baustellenhelfer", "Projektunterstützung"]
                    },
                    servers: {
                        title: "Servicekräfte (Hotel / Catering)",
                        description: "Gastronomie-Personal - Professionelle und gut geschulte Servicekräfte für Hotels, Restaurants und Catering-Dienste. Wir sorgen für Qualität und Kundenzufriedenheit.",
                        features: ["Hotelpersonal", "Event-Server", "Catering-Support"]
                    },
                    eventAssistants: {
                        title: "Event-Management-Assistenten",
                        description: "Event-Support-Personal - Engagierte Event-Assistenten für Crowd-Management, Registrierungen, Koordination und Unterstützung vor Ort für alle Arten von Veranstaltungen.",
                        features: ["Event-Crew", "Crowd-Management", "On-Ground-Support"]
                    },
                    nonSkilledWorkforce: {
                        title: "Ungelernte Arbeitskräfte (Alle Arbeiten)",
                        description: "Allgemeine Personalgestellung - Zuverlässige ungelernte Arbeitskräfte für alle Arten von allgemeinen Aufgaben. Ideal für Reinigung, Umzüge, Verladung und Hilfstätigkeiten.",
                        features: ["Hilfspersonal", "Allgemeine Arbeiten", "Temporäre Arbeitskräfte"]
                    }
                },
                whyChoose: {
                    title: "Warum uns wählen",
                    subtitle: "Wir liefern Exzellenz bei jedem Wischen und Schrubben.",
                    heading: "Exzellenz in",
                    headingItalic: "jedem Detail.",
                    discover: "Entdecken",
                    features: [
                        { title: "Umweltfreundlich", desc: "Wir verwenden nachhaltige Produkte, die sicher für Ihre Familie und Haustiere sind." },
                        { title: "Expertenpersonal", desc: "Unser Team ist professionell ausgebildet und hintergrundüberprüft." },
                        { title: "Zufriedenheit garantiert", desc: "Wenn Sie nicht zufrieden sind, machen wir es wieder gut." }
                    ]
                },
                process: {
                    title: "Unser Prozess",
                    subtitle: "Einfache Schritte zu einer saubereren Umgebung.",
                    steps: [
                        { title: "Online buchen", desc: "Wählen Sie Ihren Service und Ihre bevorzugte Zeit." },
                        { title: "Wir reinigen", desc: "Unsere Experten kommen und lassen Ihren Raum strahlen." },
                        { title: "Sie entspannen", desc: "Genießen Sie Ihre frische, saubere Umgebung." }
                    ]
                },
                promise: {
                    title: "Unser Versprechen",
                    heading: "Professionelle Standards, denen Sie vertrauen können.",
                    desc: "Wir gleichen unsere erstklassige Ästhetik mit strengen betrieblichen Standards aus. Sicherheit, Zuverlässigkeit und Qualität sind die Säulen unseres Service.",
                    stats: [
                        { value: "100%", label: "Versichert" },
                        { value: "24/7", label: "Support" },
                        { value: "50+", label: "Experten" }
                    ],
                    features: [
                        { title: "Sicherheit zuerst", desc: "Strenge Hintergrundprüfungen und laufende Sicherheitsschulungen." },
                        { title: "Umweltbewusst", desc: "Wir verwenden ausschließlich biologisch abbaubare Reinigungsmittel." },
                        { title: "Qualitätskontrolle", desc: "Regelmäßige Inspektionen und Zufriedenheitsnachverfolgung." },
                        { title: "Voll versichert", desc: "Umfassender Haftpflichtschutz für Ihre vollkommene Sicherheit." }
                    ]
                },
                testimonials: {
                    title: "Kundenerfolgsgeschichten",
                    subtitle: "Echtes Feedback von unseren zufriedenen Partnern.",
                    items: [
                        { category: 'Residential', name: "Sarah M.", role: "Hausbesitzerin", text: "Absolut atemberaubender Service. Mein Haus sah noch nie so sauber aus! Sie haben auf jedes kleine Detail geachtet." },
                        { category: 'Residential', name: "David L.", role: "Mieter", text: "Die Umzugsreinigung war perfekt. Habe meine volle Kaution zurückbekommen." },
                        { category: 'Commercial', name: "James P.", role: "Büroleiter", text: "Professionell, zuverlässig und gründlich. Sehr empfehlenswert für Unternehmensbedürfnisse." },
                        { category: 'Commercial', name: "TechStart Inc.", role: "Startup", text: "Tolles Team. Sie reinigen unseren Arbeitsbereich jeden Abend, ohne unsere Spätschichten zu stören." },
                        { category: 'Specialized', name: "Emily R.", role: "Restaurantbesitzerin", text: "Sie haben unsere Küche perfekt grundgereinigt. Inspektion mit Bravour bestanden." },
                        { category: 'Specialized', name: "Hotel Grand", role: "Manager", text: "Unsere Teppiche sehen tadellos aus. Die Polsterreinigung hat unsere Lobbymöbel zum Leben erweckt." },
                        { category: 'Industrial', name: "Manufacturing Co.", role: "Werksleiter", text: "Strikte Einhaltung von Sicherheitsprotokollen. Sie erledigen unsere Maschinenreinigung mit großer Fachkompetenz." },
                        { category: 'Outdoor', name: "Green Gardens HOA", role: "Vorstandsmitglied", text: "Unsere Gemeinschaftswege und Einfahrten sind nach ihrem Hochdruckreinigungsservice makellos." },
                        { category: 'Sanitation', name: "City Clinic", role: "Administrator", text: "Kritische Desinfektionsdienste, auf die wir uns verlassen. Ihre Standards sind medizinisch einwandfrei." },
                        { category: 'Manpower', name: "Event Horizon", role: "Eventplaner", text: "Stellten exzellentes Supportpersonal für unsere Jahreskonferenz bereit. Professionell und gut uniformiert." }
                    ]
                },
                faq: {
                    title: "Häufig gestellte Fragen",
                    subtitle: "Finden Sie Antworten auf Ihre spezifischen Fragen.",
                    stillHaveQuestions: "Haben Sie noch Fragen?",
                    contactSupport: "Kontaktieren Sie unser Support-Team rund um die Uhr für sofortige Hilfe.",
                    supportLabel: "KUNDENSERVICE",
                    noGeneric: "Keine allgemeinen FAQs für diese spezifische Kategorie gefunden.",
                    items: [
                        { category: 'All', q: "Sind Ihre Reinigungskräfte versichert?", a: "Ja, alle unsere Mitarbeiter sind voll versichert und hintergrundüberprüft." },
                        { category: 'All', q: "Wie buche ich einen Service?", a: "Sie können direkt über unsere Website buchen oder uns für ein individuelles Angebot anrufen." },
                        { category: 'Residential', q: "Muss ich während der Reinigung zu Hause sein?", a: "Nein, solange wir Zugang haben, können Sie Ihren Tag genießen." },
                        { category: 'Residential', q: "Bringen Sie Ihre eigenen Mittel mit?", a: "Ja, wir bringen alle notwendigen hochwertigen, umweltfreundlichen Reinigungsmittel und Geräte mit." },
                        { category: 'Commercial', q: "Können Sie nach Geschäftsschluss reinigen?", a: "Absolut. Wir bieten flexible Planung, einschließlich Abenden und Wochenenden." },
                        { category: 'Commercial', q: "Bieten Sie Vertragstarife an?", a: "Ja, wir haben maßgeschneiderte Vertragspläne für regelmäßige gewerbliche Reinigungsbedarfe." },
                        { category: 'Specialized', q: "Wie lange dauert das Trocknen von Teppichen?", a: "Normalerweise 4-6 Stunden. Wir verwenden Hochgeschwindigkeitslüfter, um den Prozess zu beschleunigen." },
                        { category: 'Industrial', q: "Hat Ihr Personal Sicherheitszertifizierungen?", a: "Ja, unser Industrieteam ist zertifiziert und geschult im Umgang mit Gefahrstoffen." },
                        { category: 'Outdoor', q: "Ist die Hochdruckreinigung sicher für alte Ziegel?", a: "Wir passen den Druck an, um eine effektive Reinigung ohne Beschädigung empfindlicher Oberflächen zu gewährleisten." },
                        { category: 'Manpower', q: "Was zeichnet Ihr Personal aus?", a: "Unser Personal ist streng überprüft, in Gastfreundschaft und Sicherheit geschult und einheitlich präsentiert." }
                    ]
                },
                ctaSection: {
                    title: "Bereit anzufangen?",
                    subtitle: "Buchen Sie Ihren Service noch heute und erleben Sie den Unterschied.",
                    button: "Jetzt buchen"
                }
            },
            contact: {
                title: "Kontaktieren Sie uns",
                subtitle: "Wir freuen uns, von Ihnen zu hören. Senden Sie uns eine Nachricht und wir antworten so schnell wie möglich.",
                name: "Name",
                namePlaceholder: "Ihr Name",
                email: "E-Mail",
                emailPlaceholder: "ihre@email.com",
                message: "Nachricht",
                messagePlaceholder: "Wie können wir helfen?",
                send: "Nachricht senden"
            },
            booking: {
                title: "Sofortige",
                titleHighlight: "Buchung",
                subtitle: "Professioneller Reinigungsservice vor Ihrer Haustür.",
                nameLabel: "Ihr Name",
                namePlaceholder: "Max Mustermann",
                phoneLabel: "Telefonnummer",
                phonePlaceholder: "+49 170...",
                locationLabel: "Einsatzort",
                locationPlaceholder: "Adresse eingeben...",
                currentLocation: "Aktueller Standort",
                viewMap: "Auf Karte zeigen",
                dateLabel: "Datum",
                datePlaceholder: "Datum wählen",
                timeLabel: "Uhrzeit",
                serviceLabel: "Gewünschter Service",
                servicePlaceholder: "Service Name...",
                submitButton: "Per WhatsApp bestätigen",
                mapAlert: "Bitte suchen Sie Ihren Standort auf Google Maps, kopieren Sie die Adresse und fügen Sie sie hier ein.",
                locationError: "Standort konnte nicht ermittelt werden. Bitte prüfen Sie Ihre Browser-Berechtigungen.",
                geoError: "Geolokalisierung wird von Ihrem Browser nicht unterstützt"
            }
        }
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'EN',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
