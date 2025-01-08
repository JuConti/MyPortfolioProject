document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });
    
// Image growth animation for highlight section
const highlightImages = document.querySelectorAll(".highlight-images .image-container img");

highlightImages.forEach((img, index) => {
    img.style.transformOrigin = index % 2 === 0 ? "left center" : "right center";
    img.style.transform = "scaleY(0)";
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = "transform 1.2s ease-out";
            entry.target.style.transform = "scaleY(1)";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

highlightImages.forEach(img => observer.observe(img));
      
  

    // Parallax effect for about section
    const parallaxContainer = document.querySelector(".parallax-container");
    const parallaxBackground = parallaxContainer.querySelector(".parallax");

    window.addEventListener("scroll", () => {
        const offset = window.pageYOffset;
        const parallaxSpeed = 0.3;
        parallaxBackground.style.transform = `translateY(${offset * parallaxSpeed}px)`;
    });

    // Grid image animations in portfolio section
    const gridImages = document.querySelectorAll(".portfolio-grid .grid-image-container img");

    gridImages.forEach(img => {
        img.style.transform = "scale(0)";
        img.style.transition = "transform 0.8s ease-out";
    });

    const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "scale(1)";
                gridObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    gridImages.forEach(img => gridObserver.observe(img));
});
