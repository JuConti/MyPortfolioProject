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
document.addEventListener("DOMContentLoaded", () => {
    const highlightImages = document.querySelectorAll(".highlight-images .image-container img");
    const imageTitles = document.querySelectorAll(".highlight-images .image-container .image-title");
  
    // Initial setup: Images start zoomed in and collapsed vertically; text is hidden
    highlightImages.forEach((img) => {
      img.style.transformOrigin = "center"; // Expand from the horizontal center
      img.style.transform = "scale(1.5) scaleY(0)"; // Zoomed in and collapsed
    });
  
    imageTitles.forEach((title) => {
      title.style.opacity = "0"; // Hide titles initially
    });
  
    // Intersection Observer to trigger animations when images and texts enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target.querySelector("img");
            const title = entry.target.querySelector(".image-title");
  
            // Trigger image animation
            img.style.transition = "transform 1.5s ease-out"; // Smooth animation
            img.style.transform = "scale(1) scaleY(1)"; // Full height and zoomed out
  
            // Trigger text animation
            title.style.transition = "opacity 1.5s ease-out"; // Smooth fade-in
            title.style.opacity = "1"; // Show text
  
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );
  
    // Observe each image container
    document.querySelectorAll(".image-container").forEach((container) => observer.observe(container));
  });
  

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
