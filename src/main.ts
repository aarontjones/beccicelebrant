const app = document.getElementById("app")
if (!app) throw new Error("App container not found")

const container = document.createElement("div")
container.className = "container"

const mainContainer = document.createElement("div")
mainContainer.className = "main-container"

// Title
const titleContainer = document.createElement("div")
titleContainer.className = "title-container"

const title = document.createElement("h2")
title.className = "main-title"
title.innerText = "Rebecca Roach | Celebrant"
title.style.cursor = "pointer"
title.addEventListener("click", () => { // Clicking takes back to home-page
    window.history.pushState({}, "", "#/")
    renderPage()
})

// Hamburger menu - used only for mobile view
const hamburger = document.createElement("button")
hamburger.className = "hamburger"
hamburger.setAttribute("aria-label", "Toggle menu")
hamburger.innerHTML = `<img src="assets/icons/hamburger.svg" alt="Menu" class="hamburger-icon" />`

// Navbar
const navbar = document.createElement("nav")
navbar.className = "navbar"

hamburger.addEventListener("click", () => {
    const isOpen= navbar.classList.toggle("navbar--open")
    hamburger.classList.toggle("hamburger--open", isOpen)
})

function createNavItem(text: string, href: string): HTMLAnchorElement {
    const link = document.createElement("a")
    link.className = "nav-link"
    link.innerText = text
    link.href = href
    link.addEventListener("click", (e) => {
        e.preventDefault()
        navbar.classList.remove("navbar--open")
        hamburger.classList.remove("hamburger--open")
        window.history.pushState({}, "", href)
        renderPage()
    })
    return link
}

// Creating divider - repeatable
function createDivider(): HTMLElement {
    const divider = document.createElement("div")
    divider.className = "divider"
    divider.innerHTML = `
        <span class="divider-line-left"></span>
        <span class="divider-ornament">&#10047;</span>
        <span class="divider-line-right"></span>
    `
    return divider
}

const navItems = [
    { text: "Ceremonies", href: "#/ceremonies" },
    { text: "FAQ", href: "#/faq" },
    { text: "Contact & Fees", href: "#/contact" }
]

navItems.forEach(({ text, href }) => {
    navbar.appendChild(createNavItem(text, href))
})

titleContainer.appendChild(title)
titleContainer.appendChild(hamburger)
titleContainer.appendChild(navbar)

// Content Container
const contentContainer = document.createElement("div")
contentContainer.className = "content-container"

// Pages
function homePage(): HTMLElement {
    const wrapper = document.createElement("div")
    wrapper.className = "page-wrapper"

    // Main Title
    const pageTitle = document.createElement("h2")
    pageTitle.className = "page-title"
    pageTitle.innerText = "About Me"

    // About me section
    const aboutMe = document.createElement("div")
    aboutMe.className = "info-container"

    const aboutMeDesc = document.createElement("p")
    aboutMeDesc.className = "info-description"
    aboutMeDesc.innerText = `
    Put in information about yourself, what you "specialise" in, if thats how celebrants work. Wedding section below should be filled out as well. No information about fees on this page, ill put those on Contact & Fees section.
    `

    const aboutMeImage = document.createElement("img")
    aboutMeImage.src = "assets/images/placeholder.png"
    aboutMeImage.alt = "Rebecca Roach, Celebrant"
    aboutMeImage.className = "about-image"

    aboutMe.appendChild(aboutMeDesc)
    aboutMe.appendChild(aboutMeImage)
    
    // Wedding Subtitle
    const weddingTitle = document.createElement("h2")
    weddingTitle.className = "page-title"
    weddingTitle.innerText = "Weddings"

    // Brief Desc before services
    const weddingContainer = document.createElement("div")
    weddingContainer.className = "info-container"

    const description = document.createElement("p")
    description.className = "info-description"
    description.innerText = `
    This is just a placement text so that you may write your own description of your services. Services below can be changed, as per what you want to do with celebrancy.
    `

    weddingContainer.appendChild(description)

    wrapper.appendChild(pageTitle)
    wrapper.appendChild(aboutMe)
    wrapper.appendChild(createDivider())
    wrapper.appendChild(weddingTitle)
    wrapper.appendChild(weddingContainer)
    return wrapper
}

function ceremoniesPage(): HTMLElement {
    const wrapper = document.createElement("div")
    wrapper.className = "page-wrapper"

    const pageTitle = document.createElement("h2")
    pageTitle.className = "page-title"
    pageTitle.innerText = "Ceremonies"

    // Info before services
    const aboutContainer = document.createElement("div")
    aboutContainer.className = "info-container"

    const aboutMeDesc = document.createElement("p")
    aboutMeDesc.className = "info-description"
    aboutMeDesc.innerText = `
    I offer a variety of ceremonies.
    `

    aboutContainer.appendChild(aboutMeDesc)

    // Services
    const serviceContainer = document.createElement("div")
    serviceContainer.className = "services-container"

    const services = [
        { title: "Memorials", desc: "Lorem Ipsum..." },
        { title: "Vow Renewals", desc: "Lorem Ipsum..." },
        { title: "Baby Naming", desc: "Lorem Ipsum..." }
    ]

    services.forEach(({ title, desc }) => {
        const card = document.createElement("div")
        card.className = "service-card"

        const heading = document.createElement("h3")
        heading.className = "service-title"
        heading.innerText = title

        const body = document.createElement("p")
        body.className = "service-body"
        body.innerText = desc

        card.appendChild(heading)
        card.appendChild(body)
        serviceContainer.appendChild(card)
    })

    wrapper.appendChild(pageTitle)
    wrapper.appendChild(aboutContainer)
    wrapper.appendChild(createDivider())
    wrapper.appendChild(serviceContainer)
    return wrapper
}

function faqPage(): HTMLElement {
    const wrapper = document.createElement("div")
    wrapper.className = "page-wrapper"

    const pageTitle = document.createElement("h2")
    pageTitle.className = "page-title"
    pageTitle.innerText = "FAQ"

    // FAQ data
    const faqs = [
        { q: "What exactly is a celebrant?", a: "Lorem Ipsum..." },
        { q: "What does the whole process look like?", a: "Lorem Ipsum..." },
        { q: "How long is a ceremony?", a: "Lorem Ipsum..." },
        { q: "Can we include religious or spiritual elements?", a: "Lorem Ipsum..." },
        { q: "How far in advance should we book?", a: "Lorem Ipsum..." },
        { q: "Where do your services cover?", a: "Lorem Ipsum..." },
        { q: "Can we write our own vows?", a: "Lorem Ipsum..." },
        { q: "Can you help write with our own vows too?", a: "Lorem Ipsum..." }
    ]

    const faqContainer = document.createElement("div")
    faqContainer.className = "faq-container"

    faqs.forEach(({ q, a }) => {
        const item = document.createElement("div")
        item.className = "faq-item"

        const button = document.createElement("button")
        button.className = "faq-question"
        button.innerHTML = `
            <span>${q}</span>
            <span class="faq-icon">&#10047;</span>
        `

        const content = document.createElement("div")
        content.className = "faq-answer"

        const answertext = document.createElement("p")
        answertext.innerText = a

        content.appendChild(answertext)

        button.addEventListener("click", () => {
            const wasOpen = item.classList.contains("faq-item--open")

            faqContainer.querySelectorAll(".faq-item").forEach((faq) => {
                faq.classList.remove("faq-item--open")
            })

            if (!wasOpen) {
                item.classList.toggle("faq-item--open")
            }
        })

        item.appendChild(button)
        item.appendChild(content)
        faqContainer.appendChild(item)
    })

    wrapper.appendChild(pageTitle)
    wrapper.appendChild(faqContainer)
    return wrapper
}

function contactPage(): HTMLElement {
    const wrapper = document.createElement("div")
    wrapper.className = "page-wrapper"

    const pageTitle = document.createElement("h2")
    pageTitle.className = "page-title"
    pageTitle.innerText = "Contact & Fees"

    wrapper.appendChild(pageTitle)
    return wrapper
}

// Router
function router(path: string): HTMLElement {
    switch (path) {
        case "/ceremonies":
            return ceremoniesPage()
        case "/faq":
            return faqPage()
        case "/contact":
            return contactPage()
        case "/":
        default:
            return homePage()
    }
}

// Renderer
function renderPage() {
    contentContainer.innerHTML = ""
    const path = window.location.hash.slice(1) || "/"
    contentContainer.appendChild(router(path))

    // Updating page title
    const pageTitles: Record<string, string> = {
        "/": "Rebecca Roach | Celebrant",
        "/ceremonies": "Rebecca Roach | Celebrations",
        "/faq": "Rebecca Roach | FAQ",
        "/contact": "Rebecca Roach | Contact & Fees"
    }
    document.title = pageTitles[path] ?? "Rebecca Roach | Celebrant"

    // Update Active Nav Link
    document.querySelectorAll(".nav-link").forEach((link) => {
        const anchor = link as HTMLAnchorElement
        anchor.classList.toggle("nav-link--active", anchor.href.endsWith(window.location.hash))
    })

    title.classList.toggle("main-title--active", path === "/")
}

// Footer
// Footer needs to contain a couple ICPC symbols, 
const footerContainer = document.createElement("div")
footerContainer.className = "footer-container"

// Logos
const footerLogos = document.createElement("div")
footerLogos.className = "footer-logos"

const logos = [
    "assets/icons/ICPC_COLLEGE_BANNER.png",
    "assets/icons/ICPC_CELEBRANT_LOGO.png"
]

logos.forEach((src, index) => {
    const logo = document.createElement("img")
    logo.src = src
    logo.alt = `Logo ${index + 1}`
    logo.className = "footer-logo"

    footerLogos.appendChild(logo)
})

// Information and map
const footerContent = document.createElement("div")
footerContent.className = "footer-content"

const footerInfo = document.createElement("div")
footerInfo.className = "footer-info"
footerInfo.innerHTML = `
    <h3>Rebecca Roach | Celebrant</h3>
    <p>Based in Exeter, Devon</p>
    <p>email@email.com</p>
    <p>01234 567890</p>
`

// Right side map
const footerMap = document.createElement("div")
footerMap.className = "footer-map"
footerMap.innerHTML = ` 
    <iframe
        src="https://www.google.com/maps?q=Exeter,Devon&output=embed"
        width="75%"
        height="250"
        style="border:0;"
        loading="lazy"
        allowfullscreen="">
    </iframe>
` // Figure out how to align centre.

footerContent.appendChild(footerInfo)
footerContent.appendChild(footerMap)

footerContainer.appendChild(footerLogos)
footerContainer.appendChild(footerContent)

// Appending
mainContainer.appendChild(titleContainer)
mainContainer.appendChild(contentContainer)
mainContainer.appendChild(footerContainer)
container.appendChild(mainContainer)
app.appendChild(container)

window.addEventListener("popstate", renderPage)
renderPage()