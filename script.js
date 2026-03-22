const list = document.querySelectorAll(".list");
const tabContents = document.querySelectorAll(".tab-content");

function activeLink() {
    // Remove active class from all list items
    list.forEach((item) => item.classList.remove("active"));
    // Add active class to clicked item
    this.classList.add("active");

    // Get the tab identifier from data attribute
    const tabId = this.getAttribute("data-tab");

    // Hide all tab contents
    tabContents.forEach((content) => content.classList.remove("active"));

    // Show the selected tab content
    const activeContent = document.getElementById(`${tabId}-content`);
    if (activeContent) {
        activeContent.classList.add("active");
    }
}

// Add click event to all list items
list.forEach((item) => item.addEventListener("click", activeLink));

// Add ripple effect to navigation items
list.forEach((item) => {
    item.addEventListener("click", function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles dynamically
const style = document.createElement("style");
style.textContent = `
    .list {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 107, 107, 0.4);
        transform: scale(0);
        animation: rippleAnim 0.6s linear;
        pointer-events: none;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
    }
    @keyframes rippleAnim {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Toggle demo functionality
const toggle = document.querySelector(".toggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        // Optional: Add a console message for effect
        console.log("✨ Magic Mode " + (toggle.classList.contains("active") ? "Activated" : "Deactivated"));
    });
}

// Add floating particle effect dynamically
function createParticles() {
    const particlesContainer = document.querySelector(".particles");
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = Math.random() * 5 + 2 + "px";
        particle.style.height = particle.style.width;
        particle.style.background = "rgba(255, 107, 107, 0.3)";
        particle.style.borderRadius = "50%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animation = `floatParticle ${Math.random() * 10 + 5}s infinite ease-in-out`;
        particle.style.animationDelay = Math.random() * 5 + "s";
        particlesContainer.appendChild(particle);
    }
}

// Add particle animation style
const particleStyle = document.createElement("style");
particleStyle.textContent = `
    @keyframes floatParticle {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        25% {
            opacity: 0.5;
        }
        75% {
            opacity: 0.3;
        }
        50% {
            transform: translateY(-50px) translateX(30px);
            opacity: 0.8;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
createParticles();

// Console log for God Level status
console.log("%c✨  NAVIGATION | Day 14 Part 02 ✨", "color: #ff6b6b; font-size: 16px; font-weight: bold;");
console.log("%cMade with ❤️ by codingwithvishesh", "color: #ffaa66; font-size: 12px;");