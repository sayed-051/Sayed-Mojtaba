// script.js
document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    let currentStep = 0;

    steps.forEach((step, index) => {
        const nextBtn = step.querySelector(".next");
        const input = step.querySelector("input, textarea");
        if (nextBtn && input) {
            // Initial state
            nextBtn.disabled = !input.value.trim();

            // Listen for input changes
            input.addEventListener("input", () => {
                nextBtn.disabled = !input.value.trim();
            });

            nextBtn.addEventListener("click", () => {
                if (!input.checkValidity()) {
                    input.reportValidity();
                    return;
                }
                steps[index].style.display = "none";
                if (steps[index + 1]) {
                    steps[index + 1].style.display = "block";
                    currentStep++;
                }
            });
        }
    });

    // Handle the nachricht (textarea) step
    const nachrichtStep = document.querySelector('.step[data-step="3"]');
    const nachricht = document.getElementById("nachricht");
    const submitBtn = nachrichtStep.querySelector('button[type="submit"]');
    // Initial state
    submitBtn.disabled = !nachricht.value.trim();
    nachricht.addEventListener("input", () => {
        submitBtn.disabled = !nachricht.value.trim();
    });

    const form = document.getElementById("kontaktformular");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Vielen Dank! Wir melden uns bald.");
        form.reset();
        steps.forEach((step, i) => {
            step.style.display = i === 0 ? "block" : "none";
            // Reset button state
            const nextBtn = step.querySelector(".next");
            const input = step.querySelector("input, textarea");
            if (nextBtn && input) {
                nextBtn.disabled = !input.value.trim();
            }
        });
        // Reset submit button state
        submitBtn.disabled = true;
        currentStep = 0;
    });
});