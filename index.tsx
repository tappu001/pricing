/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import ReactDOM from 'react-dom/client';

const cvData = {
  name: "Tapasvi Dudhrejiya",
  title: "Technical Implementation Engineer",
  contact: {
    location: "Ahmedabad, Gujarat",
    email: "dudhrejiyatapasvi@gmail.com",
    phone: "+91 85306 61583",
    linkedin: "https://www.linkedin.com/in/tapasvi-dudhrejiya/",
  },
  summary: "Results-driven Technical Implementation Engineer with 3 years of experience in GA4, GTM, server-side tagging, and data-driven marketing tech. Adept at implementing scalable tracking solutions across web and mobile platforms, building Looker dashboards, and integrating ad platforms. Known for ensuring data integrity, troubleshooting complex tag structures, and maximizing campaign ROI through accurate measurement framework.",
  experience: [
    {
      title: "Technical Analyst",
      company: "Dataslush",
      location: "Ahmedabad, Gujarat",
      period: "Jul 2022 – Present",
      duties: [
        "Led GA4, GTM, and server-side tagging implementations across clients from D2C, healthcare, education, and manufacturing domains.",
        "Built data layers and validated events using Chrome DevTools, Tag Assistant, and Omnibug.",
        "Created Looker Studio dashboards for campaign and funnel analytics; integrated marketing tags (Meta Pixel, Google Ads, VWO).",
        "Improved tagging governance via audits and implemented documentation for stakeholders.",
      ],
    },
  ],
  skills: {
    "Tracking & Analytics": ["GA4/GTM (Web + Server)", "Datalayer", "BigQuery", "Meta Pixel", "VWO", "Looker Studio", "Cookie Consent"],
    "Technologies": ["JavaScript", "Google Apps Script", "SQL", "Python", "CSS"],
    "Soft Skills": ["Problem Solving", "Data Visualization", "Critical Thinking", "Documentation"],
  },
  projects: [
      { title: "Digital Marketing Agency", period: "Ongoing", description: "Implemented GA4, GTM, and server-side tagging; reduced ad blocker data loss by 18%, improved LinkedIn ROAS." },
      { title: "Global Manufacturer", period: "2023", description: "Unified subdomain tracking via modular GTM; improved funnel visibility and session continuity." },
      { title: "Healthcare Provider", period: "2022-23", description: "Led site-wide tracking and dashboarding; increased lead attribution accuracy by 30%." },
      { title: "Consumer Electronics (Cooling Appliances)", period: "2024-25", description: "Setup GA4 Enhanced Ecommerce and unified dashboards; supported 17% uplift in attribution accuracy." },
      { title: "University K12 Learning Platform", period: "2023", description: "Built GA4 Advance event tracking and Looker dashboards for a K12 learning tool; led to a 15% boost in session time." },
      { title: "EMI Gateway Provider", period: "2025-Present", description: "Deployed GA4 Enhanced Ecommerce across gateway flow; improved drop-off recovery by 8%." },
      { title: "Marketing Technology", period: "2023-24", description: "Integrated Snapchat CAPI and GA4; improved ad attribution by 22%." },
      { title: "Learning Cloud", period: "2025-Present", description: "Enabled student interaction tracking; led to a 20% rise in content completion rates." }
  ],
  education: [
    { degree: "B.Sc. Mathematics", college: "Kamani Science College, Amreli", period: "2018–2022" },
  ],
  certifications: [
    "Google Analytics Individual Qualification (GAIQ)",
    "BigQuery Certification – Simo Ahava",
  ],
  achievements: [
      "Employee of the Quarter - Dataslush",
      "Winner, Hackathon 2024 - Developed automated content generator using OpenAI & Apps Script"
  ]
};

const LocationIcon = () => (<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>);
const EmailIcon = () => (<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>);
const PhoneIcon = () => (<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.75-.25 1.02l-2.2 2.2z"></path></svg>);
const LinkedInIcon = () => (<svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11.5 7v7h3v-7h-3zM9 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4.5 3.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5V17h3v-4.5c0-3-2.5-5.5-5.5-5.5S13.5 9.5 13.5 12.5v1h-3v-1z"></path></svg>);
const CheckIcon = () => (<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg>);

const Header = ({ activePage, onNavClick }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const handleLinkClick = (page) => {
        onNavClick(page);
        setIsMenuOpen(false);
    }
    
    return (
        <header className="app-header">
            <div className="container">
                <a href="#home" onClick={() => handleLinkClick('home')} className="logo">Tapasvi D.</a>
                <button className="mobile-nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation">
                    ☰
                </button>
                <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {['home', 'services', 'pricing', 'contact'].map(page => (
                            <li key={page}>
                                <a 
                                    href={`#${page}`} 
                                    className={activePage === page ? 'active' : ''} 
                                    onClick={() => handleLinkClick(page)}
                                >
                                    {page.charAt(0).toUpperCase() + page.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

const HomePage = () => (
    <div className="page">
        <section className="home-hero">
            <div className="container">
                <h1>{cvData.name}</h1>
                <h2>{cvData.title}</h2>
                <div className="contact-info">
                    <span className="contact-info-item"><LocationIcon />{cvData.contact.location}</span>
                    <a href={`mailto:${cvData.contact.email}`} className="contact-info-item"><EmailIcon />{cvData.contact.email}</a>
                    <a href={`tel:${cvData.contact.phone.replace(/\s/g, '')}`} className="contact-info-item"><PhoneIcon />{cvData.contact.phone}</a>
                    <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-info-item"><LinkedInIcon/>LinkedIn</a>
                </div>
            </div>
        </section>

        <section className="home-section">
            <div className="container">
                 <div className="cv-card">
                    <h3>Professional Summary</h3>
                    <p>{cvData.summary}</p>
                 </div>
            </div>
        </section>

        <section className="home-section">
            <div className="container">
                <div className="cv-card">
                    <h3>Experience</h3>
                    {cvData.experience.map(exp => (
                        <div key={exp.company} className="experience-item">
                            <div className="item-header">
                                <span className="item-title">{exp.title} - {exp.company}</span>
                                <span className="item-meta">{exp.period}</span>
                            </div>
                            <ul className="item-duties">
                                {exp.duties.map((duty, i) => <li key={i}>{duty}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="home-section">
            <div className="container">
                <div className="cv-card">
                    <h3>Project Highlights</h3>
                    <div className="home-grid">
                        {cvData.projects.map(proj => (
                            <div key={proj.title} className="project-item">
                                <div className="item-header">
                                     <span className="item-title">{proj.title}</span>
                                     <span className="item-meta">{proj.period}</span>
                                </div>
                                <p>{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="home-section">
            <div className="container">
                <div className="home-grid">
                    <div className="cv-card">
                        <h3>Skills & Tools</h3>
                        <div className="skills-container">
                            {Object.entries(cvData.skills).map(([category, skills]) => (
                                <div key={category} className="skill-category">
                                    <h4>{category}</h4>
                                    <ul>
                                        {skills.map(skill => <li key={skill}>{skill}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cv-card">
                        <h3>Education & Certifications</h3>
                        {cvData.education.map(edu => <p key={edu.college}><strong>{edu.degree}</strong>, {edu.college} ({edu.period})</p>)}
                        <br/>
                        <h4>Certifications</h4>
                        <ul>
                           {cvData.certifications.map(cert => <li key={cert}>{cert}</li>)}
                        </ul>
                        <br/>
                        <h4>Achievements</h4>
                        <ul>
                           {cvData.achievements.map(ach => <li key={ach}>{ach}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

const ServicesPage = () => (
    <div className="page">
        <div className="container">
            <h2 className="section-title">Services</h2>
            <div className="services-grid">
                <div className="service-card">
                    <h3>GA4 & GTM Implementation</h3>
                    <p>End-to-end setup of Google Analytics 4 and Google Tag Manager for both web and server-side, ensuring accurate and comprehensive data collection.</p>
                </div>
                <div className="service-card">
                    <h3>Data Layer & Event Tracking</h3>
                    <p>Building robust data layers and implementing custom event tracking to capture meaningful user interactions across your digital platforms.</p>
                </div>
                <div className="service-card">
                    <h3>Dashboarding & Visualization</h3>
                    <p>Creating insightful and easy-to-understand dashboards in Looker Studio to monitor KPIs, analyze funnels, and track campaign performance.</p>
                </div>
                <div className="service-card">
                    <h3>Ad Platform Integration</h3>
                    <p>Seamless integration of marketing tags like Meta Pixel, Google Ads, and VWO for precise conversion tracking and campaign optimization.</p>
                </div>
                <div className="service-card">
                    <h3>Tagging Audits & Governance</h3>
                    <p>Conducting comprehensive audits of your existing tagging infrastructure and establishing governance frameworks for data consistency and quality.</p>
                </div>
                <div className="service-card">
                    <h3>Custom Tracking Solutions</h3>
                    <p>Leveraging JavaScript, Google Apps Script, SQL, and Python to develop custom solutions for unique tracking requirements and automation.</p>
                </div>
            </div>
        </div>
    </div>
);

const PricingPage = () => {
    const [view, setView] = React.useState('packages'); // 'packages' or 'hourly'
    const [currency, setCurrency] = React.useState('inr'); // 'inr' or 'usd'

    const packages = {
        inr: [
            { name: 'Basic', price: '₹25,000', popular: false, features: ['GA4/GTM Audit', 'Basic Tag Implementation', '1 Looker Studio Dashboard', 'Email Support'] },
            { name: 'Pro', price: '₹60,000', popular: true, features: ['Everything in Basic', 'Server-Side Tagging Setup', 'Enhanced Ecommerce Tracking', '3 Custom Dashboards', 'Priority Support'] },
            { name: 'Premium', price: '₹1,25,000', popular: false, features: ['Everything in Pro', 'Monthly Retainer', 'A/B Testing Setup (VWO)', 'Custom Scripting', 'Dedicated Consultation'] },
        ],
        usd: [
            { name: 'Basic', price: '$500', popular: false, features: ['GA4/GTM Audit', 'Basic Tag Implementation', '1 Looker Studio Dashboard', 'Email Support'] },
            { name: 'Pro', price: '$1,200', popular: true, features: ['Everything in Basic', 'Server-Side Tagging Setup', 'Enhanced Ecommerce Tracking', '3 Custom Dashboards', 'Priority Support'] },
            { name: 'Premium', price: '$2,500', popular: false, features: ['Everything in Pro', 'Monthly Retainer', 'A/B Testing Setup (VWO)', 'Custom Scripting', 'Dedicated Consultation'] },
        ]
    };

    const hourlyRates = {
        inr: { rate: '₹2,400', per: '/hour' },
        usd: { rate: '$60', per: '/hour' },
    };

    return (
        <div className="page">
            <div className="container">
                <h2 className="section-title">Pricing</h2>
                <div className="pricing-toggle">
                    <div className="toggle-group">
                        <label>Currency:</label>
                        <button onClick={() => setCurrency('inr')} className={`toggle-btn ${currency === 'inr' ? 'active' : ''}`}>INR</button>
                        <button onClick={() => setCurrency('usd')} className={`toggle-btn ${currency === 'usd' ? 'active' : ''}`}>USD</button>
                    </div>
                    <div className="toggle-group" style={{marginLeft: '20px'}}>
                         <label>View:</label>
                        <button onClick={() => setView('packages')} className={`toggle-btn ${view === 'packages' ? 'active' : ''}`}>Packages</button>
                        <button onClick={() => setView('hourly')} className={`toggle-btn ${view === 'hourly' ? 'active' : ''}`}>Hourly</button>
                    </div>
                </div>

                {view === 'packages' ? (
                    <div className="pricing-grid">
                        {packages[currency].map(pkg => (
                            <div key={pkg.name} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
                                <h3>{pkg.name}</h3>
                                <p className="price">{pkg.price}<span>{pkg.name === 'Premium' ? '/month' : ''}</span></p>
                                <ul className="pricing-features">
                                    {pkg.features.map(feature => <li key={feature}><CheckIcon/>{feature}</li>)}
                                </ul>
                                <a href="#contact" className="cta-btn">Get Started</a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="pricing-grid">
                         <div className="pricing-card hourly-rate-card">
                            <h3>Hourly Rate</h3>
                            <p className="price">{hourlyRates[currency].rate}<span>{hourlyRates[currency].per}</span></p>
                            <ul className="pricing-features">
                                <li><CheckIcon/>Consultation & Strategy</li>
                                <li><CheckIcon/>Implementation & Development</li>
                                <li><CheckIcon/>Troubleshooting & Support</li>
                                <li><CheckIcon/>Flexible engagement</li>
                            </ul>
                            <a href="#contact" className="cta-btn">Book a Session</a>
                        </div>
                    </div>
                )}
                 <p className="pricing-disclaimer">
                    Prices are discounted by 40% for initial projects. Custom packages are available upon request.
                </p>
            </div>
        </div>
    );
}

const ContactPage = ({ onSuccess }) => {
    // IMPORTANT: Replace this with your actual Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzyWi-IYyQgZmD1RfjBNu98reWQu40B2I9C7pMff6FxBpAfw-RclRPDt1nNp8xjpSPX/exec';
    
    const [submissionStatus, setSubmissionStatus] = React.useState({
        submitting: false,
        status: null, // 'error'
        message: ''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        
        setSubmissionStatus({ submitting: true, status: null, message: '' });

        fetch(SCRIPT_URL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                form.reset();
                onSuccess();
            } else {
                throw new Error(data.error || 'An unknown error occurred.');
            }
        })
        .catch(error => {
            setSubmissionStatus({ submitting: false, status: 'error', message: `Oops! Something went wrong. ${error.message}` });
        });
    };

    return (
        <div className="page">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <div className="contact-container">
                    <div className="contact-form">
                        <h3>Send a Message</h3>
                        <p style={{marginBottom: '15px', color: 'var(--text-light)', fontSize: '0.9rem'}}>
                            Your message will be sent to my inbox and saved to a Google Sheet using Apps Script.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name" required disabled={submissionStatus.submitting} />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Your Email" required disabled={submissionStatus.submitting} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" placeholder="Subject" required disabled={submissionStatus.submitting} />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Your Message" required disabled={submissionStatus.submitting}></textarea>
                            </div>
                            <button type="submit" className="cta-btn" disabled={submissionStatus.submitting}>
                                {submissionStatus.submitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {submissionStatus.status === 'error' && (
                                <p className={`form-status ${submissionStatus.status}`}>
                                    {submissionStatus.message}
                                </p>
                            )}
                        </form>
                    </div>
                    <div className="contact-details">
                        <h3>Contact Information</h3>
                        <p>Feel free to reach out via email or connect with me on LinkedIn. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.</p>
                        <div className="contact-info" style={{justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <a href={`mailto:${cvData.contact.email}`} className="contact-info-item"><EmailIcon />{cvData.contact.email}</a>
                            <a href={`tel:${cvData.contact.phone.replace(/\s/g, '')}`} className="contact-info-item"><PhoneIcon />{cvData.contact.phone}</a>
                            <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-info-item"><LinkedInIcon/>linkedin.com/in/tapasvi-dudhrejiya</a>
                            <span className="contact-info-item"><LocationIcon />{cvData.contact.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ThankYouPage = ({ onReturnHome }) => (
    <div className="page thank-you-page">
        <div className="thank-you-content">
            <svg className="thank-you-icon" viewBox="0 0 52 52">
                <circle cx="26" cy="26" r="25"/>
                <path d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <h2>Thank You!</h2>
            <p>Your message has been received. I will get back to you shortly.</p>
            <button onClick={onReturnHome} className="cta-btn">Back to Home</button>
        </div>
    </div>
);


const Footer = () => (
    <footer className="app-footer">
        <div className="container">
            <div className="footer-socials">
                 <a href={`mailto:${cvData.contact.email}`} aria-label="Email"><EmailIcon /></a>
                 <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} Tapasvi Dudhrejiya. All Rights Reserved.</p>
        </div>
    </footer>
);


const App = () => {
    const [activePage, setActivePage] = React.useState('home');
    const [isThankYouVisible, setIsThankYouVisible] = React.useState(false);

    React.useEffect(() => {
        const handleHashChange = () => {
            if (isThankYouVisible) return;
            const hash = window.location.hash.replace('#', '') || 'home';
            setActivePage(hash);
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Initial load

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [isThankYouVisible]);

    const handleFormSuccess = () => {
        setIsThankYouVisible(true);
        window.scrollTo(0, 0);
    };

    const handleReturnHome = () => {
        setIsThankYouVisible(false);
        handleNavClick('home');
    };
    
    const handleNavClick = (page) => {
        if (isThankYouVisible) {
            setIsThankYouVisible(false);
        }
        setActivePage(page);
        window.location.hash = page;
    }

    const renderPage = () => {
        switch(activePage) {
            case 'services': return <ServicesPage />;
            case 'pricing': return <PricingPage />;
            case 'contact': return <ContactPage onSuccess={handleFormSuccess} />;
            case 'home':
            default:
                return <HomePage />;
        }
    };
    
    if (isThankYouVisible) {
        return <ThankYouPage onReturnHome={handleReturnHome} />;
    }

    return (
        <React.Fragment>
            <Header activePage={activePage} onNavClick={handleNavClick} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
