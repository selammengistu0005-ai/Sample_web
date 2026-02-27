/**
 * Showcase Logic - Makes the "Static" site feel "Dynamic"
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animate the Response Time Counter
    const animateCounter = (id, target, speed) => {
        const el = document.getElementById(id);
        let current = 0;
        const interval = setInterval(() => {
            if (current >= target) {
                clearInterval(interval);
            } else {
                current += Math.ceil(target / 50);
                el.innerText = current;
            }
        }, speed);
    };

    // 2. Simulate Active Sessions changing
    const simulateSessions = () => {
        const el = document.getElementById('active-sessions');
        setInterval(() => {
            let count = parseInt(el.innerText.replace(',', ''));
            // Randomly add or subtract a few users
            const change = Math.floor(Math.random() * 5) - 2; 
            el.innerText = (count + change).toLocaleString();
        }, 3000);
    };

    // 3. Randomize Latency Bars slightly
    const wobbleBars = () => {
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            const originalHeight = bar.style.height;
            setInterval(() => {
                const fluctuation = Math.floor(Math.random() * 10) - 5;
                const base = parseInt(originalHeight);
                bar.style.height = (base + fluctuation) + "%";
            }, 2000);
        });
    };

    // Initialize the "Fake" activity
    animateCounter('counter', 420, 30); // Sets response time to 420ms
    simulateSessions();
    wobbleBars();

});
