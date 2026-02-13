const form = document.getElementById("eventForm");
const container = document.getElementById("eventContainer");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const demoContent = document.getElementById("demoContent");

const titleInput = document.getElementById("eventTitle");
const dateInput = document.getElementById("eventDate");
const categoryInput = document.getElementById("eventCategory");
const descInput = document.getElementById("eventDescription");

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 50);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 2000);
}

function updateEmptyState() {
    if (container.children.length === 0) {
        container.innerHTML = `<div class="empty-state">No events yet. Add your first event!</div>`;
    }
}

function createEventCard(title, date, category, description) {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>${description}</p>
        <button class="delete-btn">Delete</button>
    `;

    card.querySelector(".delete-btn").addEventListener("click", () => {
        card.remove();
        updateEmptyState();
        showToast("Event deleted");
    });

    return card;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove();

    const title = titleInput.value;
    const date = dateInput.value;
    const category = categoryInput.value;
    const description = descInput.value;

    const card = createEventCard(title, date, category, description);
    container.appendChild(card);

    form.reset();
    showToast("Event added successfully 🎉");
});

clearAllBtn.addEventListener("click", () => {
    container.innerHTML = "";
    updateEmptyState();
    showToast("All events cleared");
});

addSampleBtn.addEventListener("click", () => {
    container.innerHTML = "";

    const samples = [
        ["Tech Conference", "2026-03-12", "Conference", "Annual technology summit"],
        ["UI/UX Workshop", "2026-02-20", "Workshop", "Hands-on design session"],
        ["Startup Meetup", "2026-04-05", "Meetup", "Networking with founders"]
    ];

    samples.forEach(event => {
        const card = createEventCard(...event);
        container.appendChild(card);
    });

    showToast("Sample events added ✨");
});

document.addEventListener("keydown", (e) => {
    demoContent.innerHTML = `
        <h3>Key Pressed:</h3>
        <p><strong>${e.key}</strong></p>
    `;
});

function createBubble() {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const size = Math.random() * 60 + 20;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;

    document.body.appendChild(bubble);

    setTimeout(() => bubble.remove(), 15000);
}

setInterval(createBubble, 800);

 
