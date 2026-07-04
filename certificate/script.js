/* ============================================================
   CERTIFICATES PAGE - FINAL SCRIPT (FIXED)
   ============================================================ */

const certificates = [
    {
        title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
        issuer: "Oracle",
        color: "#0056D2",
        icon: "fa-graduation-cap",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=99CD0F75847F8EFAC1BEA255C2C63E886AFDEDCAA655A3EFB19DB11E7B749716"
    },

    {
        title: "ISO/IEC 27001:2022 Lead Auditor",
        issuer: "Credly",
        color: "#0056D2",
        icon: "fa-shield-halved",
        image: "images/ISO 27001.jpg.jpg"
    },

    {
        title: "AWS Educate Introduction to Generative AI",
        issuer: "AWS Educate",
        color: "#0056D2",
        icon: "fa-robot",
        link: "https://www.credly.com/badges/717924de-82e5-4d62-b856-9c2953e89cc6/linked_in_profile"
    },

    {
        title: "Foundations of Project Management",
        issuer: "Coursera",
        color: "#0056D2",
        icon: "fa-diagram-project",
        link: "https://coursera.org/share/1ff655b905cf50b7317dbee976a9f2f9"
    },

    {
        title: "Google IT Support Professional Certificate",
        issuer: "Coursera",
        color: "#0056D2",
        icon: "fa-headset",
        link: "https://coursera.org/verify/professional-cert/8FG7WUUXL6SW"
    },

    {
        title: "Technical Support Fundamentals",
        issuer: "Coursera",
        color: "#0056D2",
        icon: "fa-screwdriver-wrench",
        link: "https://www.coursera.org/account/accomplishments/certificate/HPGV3D22PNQ3"
    },

    {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Coursera",
        color: "#0056D2",
        icon: "fa-network-wired",
        link: "https://www.coursera.org/account/accomplishments/certificate/V5YYLQT488TB"
    },

    {
        title: "Operating Systems and You: Becoming a Power User",
        issuer: "Coursera",
        color: "#0056D2",
        icon: "fa-computer",
        link: "https://www.coursera.org/account/accomplishments/verify/TK455R7M3ZYX"
    },

    {
        title: "System Administration and IT Infrastructure Services",
        issuer: "Coursera",
        color: "#0056D2",
        icon: "fa-server",
        link: "https://www.coursera.org/account/accomplishments/records/9C3BS2XJM4ZN"
    },

    {
        title: "IT Security: Defense Against the Digital Dark Arts",
        issuer: "Coursera",
        color: "#0056D2",
        icon: "fa-lock",
        link: ""
    },

    {
        title: "Fundamentals of Digital Marketing",
        issuer: "Google Digital Garage",
        color: "#0056D2",
        icon: "fa-chart-line",
        image: "images/google-marketing.jpg.jpg"
    },

    {
        title: "Professional Diploma in Digital Marketing",
        issuer: "Online Business Hub Institute",
        color: "#0056D2",
        icon: "fa-bullhorn",
        image: "images/digital-marketing.jpg.jpg"
    },

    {
        title: "Web Development and Programming",
        issuer: "E-Rozgar Institute",
        color: "#0056D4",
        icon: "fa-code",
        image: "images/Web Development.jpg.jpg"
    },

    {
        title: "Graphic Design and Web Design",
        issuer: "DigiSkill Institute",
        color: "#0056D4",
        icon: "fa-pen-ruler",
        image: "images/Graphic-Design Certificate.jpg.jpg"
    },

    {
        title: "Digital Freelancing",
        issuer: "DigiSkill Institute",
        color: "#0056D4",
        icon: "fa-briefcase",
        image: "images/Freelancing Certificate.jpg.jpg"
    }
];

/* ==================== DOM ==================== */

const grid = document.getElementById("certificates-grid");

/* ==================== RENDER ==================== */

function renderCertificates(list) {

    if (!grid) return;

    grid.innerHTML = "";

    list.forEach((cert, index) => {

        const card = document.createElement("div");
        card.className = "certificate-card";
        card.style.animationDelay = `${index * 0.05}s`;

        let buttonHTML = "";

        // IMAGE CERTIFICATE (LOCAL FILE)
        if (cert.image) {

            buttonHTML = `
                <a href="#" onclick="openModal('${cert.image}')">
                    View Certificate <i class="fas fa-eye"></i>
                </a>
            `;

        }
        // ONLINE LINK CERTIFICATE
        else if (cert.link) {

            buttonHTML = `
                <a href="${cert.link}" target="_blank">
                    View Certificate <i class="fas fa-external-link-alt"></i>
                </a>
            `;
        }
        // FALLBACK
        else {
            buttonHTML = `
                <span class="certificate-id">Certificate Not Available</span>
            `;
        }

        card.innerHTML = `
            <div class="card-icon" style="background:${cert.color}">
                <i class="fas ${cert.icon}"></i>
            </div>

            <h3>${cert.title}</h3>

            <p>${cert.issuer}</p>

            ${buttonHTML}
        `;

        grid.appendChild(card);
    });
}

/* ==================== MODAL ==================== */

function openModal(image) {
    const modal = document.getElementById("cert-modal");
    const modalImg = document.getElementById("modal-img");

    if (!modal || !modalImg) return;

    modal.style.display = "block";
    modalImg.src = image;
}

function closeModal() {
    const modal = document.getElementById("cert-modal");
    if (modal) {
        modal.style.display = "none";
    }
}

/* ==================== INIT ==================== */

document.addEventListener("DOMContentLoaded", () => {
    renderCertificates(certificates);
});