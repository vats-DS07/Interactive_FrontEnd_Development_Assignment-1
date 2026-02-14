const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");


let sampleEvent =
    [
        {
            title: "Tech Prac",
            date: "04-12-2026",
            category: "workshop",
            description: "Hey Welcome to Event!"
        },
        {
            title: "Beauty Workshop",
            date: "04-12-2026",
            category: "conference",
            description: "Hey welcome to Event!"
        }
    ]

addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(addEvent);
})


//   create event card  
function createEventCard(eventData) {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
    <button class=delete-btn>Delete</button>
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.description}</p>
    `
    return card;

}

function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));

}

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    }

    addEvent(eventData);
    eventForm.reset();

})

// clear all event
clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = `<div class="empty-state">No events yet. Add your first event!</div>`
})



eventContainer.addEventListener("click", (event) => {
    // console use to target the closest evnt card child element of the targetes element
    const card = event.target.closest(".event-card");
    console.log(card);//

    if (event.target.classList.contains("delete-btn")) {
        card.remove()
    }

    if (!eventContainer.querySelector(".event-card")) {
        eventContainer.innerHTML = `
    <div class="empty-state">No events yet. Add your first event!</div>`
    }



})

const demoContent = document.getElementById("demoContent");

document.addEventListener("keydown", (e) => {
    demoContent.textContent = `You pressed: ${e.key}`;
});

function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 60 + 20;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.left = Math.random() * window.innerWidth + "px";
    bubble.style.animationDuration = Math.random() * 5 + 5 + "s";

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

setInterval(createBubble, 500);

 
