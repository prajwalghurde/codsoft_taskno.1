
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const targetId = event.currentTarget.getAttribute("href");
            if (targetId !== "#home") {
                smoothScroll(event, targetId);
            }
        });
    });

    function smoothScroll(event, targetId) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const targetPosition = targetElement.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000; 
            let startTimestamp = null;

            function animation(timestamp) {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = timestamp - startTimestamp;
                const percentage = Math.min(progress / duration, 1);
                window.scrollTo(0, startPosition + distance * percentage);
                if (progress < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);
        }
    }
});

