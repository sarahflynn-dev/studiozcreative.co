document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("typewriter");
    const messages = ["CREATE WITH PURPOSE.", "TELL WORTHY STORIES.", "PURSUE THE TRUTH."];
    let messageIndex = 0;
    let charIndex = 0;
    let typing = true;

    function type() {
        const currentMessage = messages[messageIndex];

        if (typing) {
            el.textContent = currentMessage.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentMessage.length) {
                typing = false;
                setTimeout(type, 5000); // Pause before backspacing
                return;
            }
        } else {
            el.textContent = currentMessage.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                typing = true;
                messageIndex = (messageIndex + 1) % messages.length;
                setTimeout(type,800); // Pause before typing next
                return;
            }
        }

        setTimeout(type, typing ? 100: 150); // Typing speed vs backspacing speed
    }

    type();
});