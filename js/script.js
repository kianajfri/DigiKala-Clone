function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Convert numbers to Persian numerals
    let persianHours = hours.toLocaleString('fa-IR', { useGrouping: false });
    let persianMinutes = minutes.toLocaleString('fa-IR', { useGrouping: false });
    let persianSeconds = seconds.toLocaleString('fa-IR', { useGrouping: false });

    document.getElementById("hours").innerText = persianHours;
    document.getElementById("minutes").innerText = persianMinutes;
    document.getElementById("seconds").innerText = persianSeconds;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately when the page loads
updateClock();