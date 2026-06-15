var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Imports for text
import { aboutMeText, weddingText, ritualText } from "./content/home.js";
import { ceremonyBlurb, inclusivityText, serviceBaby, serviceFuneral, serviceNaming } from "./content/ceremonies.js";
import { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 } from "./content/faq.js";
import { feesText } from "./content/contact.js";
const app = document.getElementById("app");
if (!app)
    throw new Error("App container not found");
const container = document.createElement("div");
container.className = "container";
const mainContainer = document.createElement("div");
mainContainer.className = "main-container";
// Title
const titleContainer = document.createElement("div");
titleContainer.className = "title-container";
const title = document.createElement("img");
title.src = "assets/images/logos/RR-Celebrant-Logo-Long.png";
title.alt = "Rebecca Roach | Celebrant";
title.className = "main-title";
// Hamburger menu - used only for mobile view
const hamburger = document.createElement("button");
hamburger.className = "hamburger";
hamburger.setAttribute("aria-label", "Toggle menu");
hamburger.innerHTML = `<img src="assets/icons/hamburger.svg" alt="Menu" class="hamburger-icon" />`;
// Navbar
const navbar = document.createElement("nav");
navbar.className = "navbar";
hamburger.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("navbar--open");
    hamburger.classList.toggle("hamburger--open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
    titleContainer.classList.toggle("title-container--menu-open", isOpen);
});
function createNavItem(text, href) {
    const link = document.createElement("a");
    link.className = "nav-link";
    link.innerText = text;
    link.href = href;
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navbar.classList.remove("navbar--open");
        hamburger.classList.remove("hamburger--open");
        titleContainer.classList.remove("title-container--menu-open");
        document.body.style.overflow = "";
        window.history.pushState({}, "", href);
        renderPage();
    });
    return link;
}
// Creating divider - repeatable
function createDivider() {
    const divider = document.createElement("div");
    divider.className = "divider";
    divider.innerHTML = `
        <span class="divider-line-left"></span>
        <span class="divider-ornament">&#10047;</span>
        <span class="divider-line-right"></span>
    `;
    return divider;
}
const navItems = [
    { text: "About Me", href: "#/" },
    { text: "Ceremonies", href: "#/ceremonies" },
    { text: "FAQ", href: "#/faq" },
    { text: "Contact & Fees", href: "#/contact" }
];
navItems.forEach(({ text, href }) => {
    navbar.appendChild(createNavItem(text, href));
});
titleContainer.appendChild(title);
titleContainer.appendChild(hamburger);
titleContainer.appendChild(navbar);
// Content Container
const contentContainer = document.createElement("div");
contentContainer.className = "content-container";
// Pages
function homePage() {
    const wrapper = document.createElement("div");
    wrapper.className = "page-wrapper";
    // Main Title
    const pageTitle = document.createElement("h2");
    pageTitle.className = "page-title";
    pageTitle.innerText = "About Me";
    // About me section
    const aboutMe = document.createElement("div");
    aboutMe.className = "info-container";
    const aboutMeDesc = document.createElement("p");
    aboutMeDesc.className = "info-description";
    aboutMeDesc.innerText = aboutMeText;
    const aboutMeImage = document.createElement("img");
    aboutMeImage.src = "assets/images/placeholder.png";
    aboutMeImage.alt = "Rebecca Roach";
    aboutMeImage.className = "about-image";
    aboutMe.appendChild(aboutMeDesc);
    aboutMe.appendChild(aboutMeImage);
    // Wedding Subtitle
    const weddingTitle = document.createElement("h2");
    weddingTitle.className = "page-title";
    weddingTitle.innerText = "Weddings";
    // Wedding tagline
    const weddingTagline = document.createElement("p");
    weddingTagline.className = "page-tagline";
    weddingTagline.innerText = "Your Story. Your Day. Your Ceremony";
    // Brief Desc before services
    const weddingContainer = document.createElement("div");
    weddingContainer.className = "info-container";
    const weddingDescription = document.createElement("p");
    weddingDescription.className = "info-description";
    weddingDescription.innerHTML = weddingText;
    weddingContainer.appendChild(weddingDescription);
    // Rituals and Symbolic Moments
    const ritualTitle = document.createElement("h2");
    ritualTitle.className = "page-title";
    ritualTitle.innerText = "Meaningful Rituals & Symbolic Moments";
    // Container
    const ritualContainer = document.createElement("div");
    ritualContainer.className = "info-container";
    const ritualDescription = document.createElement("p");
    ritualDescription.className = "info-description";
    ritualDescription.innerHTML = ritualText;
    ritualContainer.appendChild(ritualDescription);
    wrapper.appendChild(pageTitle);
    wrapper.appendChild(aboutMe);
    wrapper.appendChild(createDivider());
    wrapper.appendChild(weddingTitle);
    wrapper.appendChild(weddingTagline);
    wrapper.appendChild(weddingContainer);
    wrapper.appendChild(createDivider());
    wrapper.appendChild(ritualTitle);
    wrapper.appendChild(ritualContainer);
    return wrapper;
}
function ceremoniesPage() {
    const wrapper = document.createElement("div");
    wrapper.className = "page-wrapper";
    const pageTitle = document.createElement("h2");
    pageTitle.className = "page-title";
    pageTitle.innerText = "Ceremonies";
    // Info before services
    const aboutContainer = document.createElement("div");
    aboutContainer.className = "info-container";
    const aboutMeDesc = document.createElement("p");
    aboutMeDesc.className = "info-description";
    aboutMeDesc.innerHTML = ceremonyBlurb;
    aboutContainer.appendChild(aboutMeDesc);
    // Services
    const serviceContainer = document.createElement("div");
    serviceContainer.className = "services-container";
    const services = [
        {
            title: "Funeral Services",
            desc: serviceFuneral,
            bg: "assets/images/funeral-bg.jpg"
        },
        {
            title: "Baby Naming Ceremonies",
            desc: serviceBaby,
            bg: "assets/images/baby-bg.jpg"
        },
        {
            title: "Other Naming Ceremonies",
            desc: serviceNaming,
            bg: "assets/images/other-bg.jpg"
        }
    ];
    services.forEach(({ title, desc, bg }) => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.style.setProperty("--card-bg", `url(${bg})`);
        const heading = document.createElement("h3");
        heading.className = "service-title";
        heading.innerText = title;
        const body = document.createElement("p");
        body.className = "service-body";
        body.innerHTML = desc;
        // Mobile accordion toggle
        card.addEventListener("click", () => {
            const wasOpen = card.classList.contains("service-card--open");
            serviceContainer.querySelectorAll(".service-card").forEach(c => {
                c.classList.remove("service-card--open");
            });
            if (!wasOpen)
                card.classList.add("service-card--open");
        });
        card.appendChild(heading);
        card.appendChild(body);
        serviceContainer.appendChild(card);
    });
    // Inclusivity Section
    const inclusivityTitle = document.createElement("h2");
    inclusivityTitle.className = "page-title";
    inclusivityTitle.innerText = "Celebrating Love in All Its Forms";
    const inclusivityContainer = document.createElement("div");
    inclusivityContainer.className = "info-container";
    const inclusivityDescription = document.createElement("p");
    inclusivityDescription.className = "info-description";
    inclusivityDescription.innerHTML = inclusivityText;
    inclusivityContainer.appendChild(inclusivityDescription);
    wrapper.appendChild(pageTitle);
    wrapper.appendChild(aboutContainer);
    wrapper.appendChild(createDivider());
    wrapper.appendChild(serviceContainer);
    wrapper.appendChild(createDivider());
    wrapper.appendChild(inclusivityTitle);
    wrapper.appendChild(inclusivityContainer);
    return wrapper;
}
function faqPage() {
    const wrapper = document.createElement("div");
    wrapper.className = "page-wrapper";
    const pageTitle = document.createElement("h2");
    pageTitle.className = "page-title";
    pageTitle.innerText = "FAQ";
    // FAQ data
    const faqs = [
        {
            q: "What exactly is a celebrant?",
            a: q1
        },
        {
            q: "Does a Celebrant need to be qualified?",
            a: q2
        },
        {
            q: "What's the difference between a Celebrant and a Registrar?",
            a: q3
        },
        {
            q: "How does this all work?",
            a: q4
        },
        {
            q: "Can we include Religious or Spiritual elements?",
            a: q5
        },
        {
            q: "How far in advance should we book?",
            a: q6
        },
        {
            q: "What area do your services cover?",
            a: q7
        },
        {
            q: "What does a Ceremony cost?",
            a: q8
        },
        {
            q: "Can we write our own vows?",
            a: q9
        },
        {
            q: "What about themed weddings?",
            a: q10
        }
    ];
    const faqContainer = document.createElement("div");
    faqContainer.className = "faq-container";
    faqs.forEach(({ q, a }) => {
        const item = document.createElement("div");
        item.className = "faq-item";
        const button = document.createElement("button");
        button.className = "faq-question";
        button.innerHTML = `
            <span>${q}</span>
            <span class="faq-icon">&#10047;</span>
        `;
        const content = document.createElement("div");
        content.className = "faq-answer";
        const answertext = document.createElement("p");
        answertext.innerHTML = a;
        content.appendChild(answertext);
        button.addEventListener("click", () => {
            const wasOpen = item.classList.contains("faq-item--open");
            faqContainer.querySelectorAll(".faq-item").forEach((faq) => {
                faq.classList.remove("faq-item--open");
            });
            if (!wasOpen) {
                item.classList.toggle("faq-item--open");
            }
        });
        item.appendChild(button);
        item.appendChild(content);
        faqContainer.appendChild(item);
    });
    wrapper.appendChild(pageTitle);
    wrapper.appendChild(faqContainer);
    return wrapper;
}
function contactPage() {
    const wrapper = document.createElement("div");
    wrapper.className = "page-wrapper";
    // Fees Section
    const feeTitle = document.createElement("h2");
    feeTitle.className = "page-title";
    feeTitle.innerText = "Fees";
    const feeContainer = document.createElement("div");
    feeContainer.className = "info-container";
    const feeInfo = document.createElement("p");
    feeInfo.className = "info-description";
    feeInfo.innerHTML = feesText;
    feeContainer.appendChild(feeInfo);
    const contactTitle = document.createElement("h2");
    contactTitle.className = "page-title";
    contactTitle.innerText = "Contact Me";
    // Contact Section
    // Email Form
    const formContainer = document.createElement("div");
    formContainer.className = "contact-form-container";
    const nameRow = document.createElement("div");
    nameRow.className = "contact-form-row";
    function createField(labelText, inputType, id, required = true) {
        const group = document.createElement("div");
        group.className = "contact-form-group";
        const label = document.createElement("label");
        label.htmlFor = id;
        label.innerText = labelText;
        label.className = "contact-label";
        const input = document.createElement("input");
        input.type = inputType;
        input.id = id;
        input.name = id;
        input.required = required;
        input.className = "contact-input";
        group.appendChild(label);
        group.appendChild(input);
        return group;
    }
    nameRow.appendChild(createField("First Name", "text", "firstName"));
    nameRow.appendChild(createField("Last Name", "text", "lastName"));
    const emailGroup = createField("Email Address", "email", "emailAddress");
    // Message Field
    const messageGroup = document.createElement("div");
    messageGroup.className = "contact-form-group";
    const messageLabel = document.createElement("label");
    messageLabel.htmlFor = "message";
    messageLabel.innerText = "Message";
    messageLabel.className = "contact-label";
    const messageInput = document.createElement("textarea");
    messageInput.id = "message";
    messageInput.name = "message";
    messageInput.required = true;
    messageInput.className = "contact-input contact-textarea";
    messageInput.rows = 6;
    messageGroup.appendChild(messageLabel);
    messageGroup.appendChild(messageInput);
    // Status Message
    const statusMsg = document.createElement("p");
    statusMsg.className = "contact-status";
    // Submit
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.innerText = "Send Message";
    submitButton.className = "contact-submit";
    // Emailing
    submitButton.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("emailAddress").value.trim();
        const message = document.getElementById("message").value.trim();
        if (!firstName || !lastName || !email || !message) {
            statusMsg.innerText = "Please fill in all fields.";
            statusMsg.className = "contact-status contact-status--error";
            return;
        }
        submitButton.disabled = true;
        submitButton.innerText = "Sending...";
        statusMsg.innerText = "";
        try {
            const response = yield fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    service_id: "service_3uqf8sw",
                    template_id: "template_ekml3cn",
                    user_id: "VkUd-iTmvNVCP3l32",
                    template_params: {
                        from_name: `${firstName} ${lastName}`,
                        from_email: email,
                        message: message,
                        to_email: "aarontjones4722@gmail.com" // Change
                    }
                })
            });
            if (response.ok) {
                statusMsg.innerText = "Message Sent! I'll be in contact soon.";
                statusMsg.className = "contact-status contact-status--success";
                submitButton.innerText = "Sent";
            }
            else {
                throw new Error("Send failed");
            }
        }
        catch (_a) {
            statusMsg.innerText = "Something went wrong. Please try again.";
            statusMsg.className = "contact-status contact-status--error";
            submitButton.disabled = false;
            submitButton.innerText = "Send Message";
        }
    }));
    formContainer.appendChild(nameRow);
    formContainer.appendChild(emailGroup);
    formContainer.appendChild(messageGroup);
    formContainer.appendChild(submitButton);
    formContainer.appendChild(statusMsg);
    wrapper.appendChild(feeTitle);
    wrapper.appendChild(feeContainer);
    wrapper.appendChild(createDivider());
    wrapper.appendChild(contactTitle);
    wrapper.appendChild(formContainer);
    return wrapper;
}
// Router
function router(path) {
    switch (path) {
        case "/ceremonies":
            return ceremoniesPage();
        case "/faq":
            return faqPage();
        case "/contact":
            return contactPage();
        case "/":
            return homePage();
        default:
            const div = document.createElement("div");
            div.innerText = "404 Not Found";
            return div;
    }
}
// Renderer
function renderPage() {
    var _a;
    contentContainer.innerHTML = "";
    const path = window.location.hash.slice(1) || "/";
    contentContainer.appendChild(router(path));
    // Updating page title
    const pageTitles = {
        "/": "Rebecca Roach | Celebrant",
        "/ceremonies": "Rebecca Roach | Celebrations",
        "/faq": "Rebecca Roach | FAQ",
        "/contact": "Rebecca Roach | Contact & Fees"
    };
    document.title = (_a = pageTitles[path]) !== null && _a !== void 0 ? _a : "Rebecca Roach | Celebrant";
    const currentHash = window.location.hash || "#/";
    // Update Active Nav Link
    document.querySelectorAll(".nav-link").forEach((link) => {
        const anchor = link;
        anchor.classList.toggle("nav-link--active", anchor.getAttribute("href") === currentHash);
    });
}
// Footer
// Footer needs to contain a couple ICPC symbols, 
const footerContainer = document.createElement("div");
footerContainer.className = "footer-container";
// Logos
const footerLogos = document.createElement("div");
footerLogos.className = "footer-logos";
const logos = [
    "assets/icons/ICPC_COLLEGE_BANNER.png",
    "assets/icons/ICPC_CELEBRANT_LOGO.png"
];
logos.forEach((src, index) => {
    const logo = document.createElement("img");
    logo.src = src;
    logo.alt = `Logo ${index + 1}`;
    logo.className = "footer-logo";
    footerLogos.appendChild(logo);
});
// Information and map
const footerContent = document.createElement("div");
footerContent.className = "footer-content";
const footerInfo = document.createElement("div");
footerInfo.className = "footer-info";
const footerLogo = document.createElement("img");
footerLogo.src = "assets/images/logos/RR-Celebrant-Logo-Short.png";
footerLogo.alt = "Rebecca Roach | Celebrant";
footerLogo.className = "footer-info-logo";
const footerInfoText = document.createElement("div");
footerInfoText.innerHTML = `
    <p class="footer-text">Based in Exeter, Devon</p>
    <p class="footer-text">rebeccaroachcelebrant@gmail.com</p>
    <p class="footer-text">01234 567890</p>
`;
footerInfo.appendChild(footerLogo);
footerInfo.appendChild(footerInfoText);
// Right side map
const footerMap = document.createElement("div");
footerMap.className = "footer-map";
footerMap.innerHTML = ` 
    <iframe
        src="https://www.google.com/maps?q=Exeter,Devon&output=embed"
        width="50%"
        height="400"
        style="border:0;"
        loading="lazy"
        allowfullscreen="">
    </iframe>
`; // Figure out how to align centre.
footerContent.appendChild(footerInfo);
footerContent.appendChild(footerMap);
footerContainer.appendChild(footerLogos);
footerContainer.appendChild(footerContent);
// Gradient between main content and footer
const gradientBridge = document.createElement("div");
gradientBridge.className = "gradient-bridge";
// Appending
mainContainer.appendChild(titleContainer);
mainContainer.appendChild(contentContainer);
mainContainer.appendChild(gradientBridge);
mainContainer.appendChild(footerContainer);
container.appendChild(mainContainer);
app.appendChild(container);
window.addEventListener("popstate", renderPage);
renderPage();
//# sourceMappingURL=main.js.map