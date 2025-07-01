interface TimelineEvent {
  title: string;
  description: string;
  image: string;
}

const timeline: TimelineEvent[] = [
  {
    title: "💌 A Message Made Me Impress",
    description: "This message means a lot to me baby..There were tons of messages that are unforgettable and made me cry..Unfortunately they were deleted mistakenly🥺🥺...",
    image: "assets/msg.png"
  },
  {
    title: "🍰 First Date",
    description: "Nervous smiles, sweet laughs — like a dream.",
    image: "assets/first.jpg"
  },
  {
    title: "💋 First Kiss",
    description: "The whole world stopped and it was just us.",
    image: "assets/first-kiss.jpg"
  },
  {
    title: "🌄 Baker's Bend",
    description: "A day of lessons, nature, and memories.",
    image: "assets/hike.jpg"
  }
];

const loveLetter: string = `
  My Love,<br/><br/>
  Happy 15 months to us — 15 months of memories, laughter, lessons, and a love that means the world to me.<br/><br/>
  I never wanted to cause you pain. That boy on the hike felt like a younger brother, nothing more. But if it hurt you, then I hurt with you too.<br/><br/>
  You are the only one in my heart. I love you purely, truly, and forever.<br/><br/>
  On this special day, I’m not just saying sorry — I’m promising to protect what we have, every single day.<br/><br/>
  Forever yours,<br/>
  <strong>[Your Name]</strong>
`;

function renderTimeline() {
  const container = document.getElementById("timeline");
  if (!container) return;

  timeline.forEach(event => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <img src="${event.image}" alt="${event.title}" class="timeline-img"/>
      <div class="timeline-text">
        <h3>${event.title}</h3>
        <p>${event.description}</p>
      </div>
    `;
    container.appendChild(item);
  });
}


function renderLetter() {
  const letterDiv = document.getElementById("letter");
  if (letterDiv) letterDiv.innerHTML = loveLetter;
}

window.onload = () => {
  renderTimeline();
  renderLetter();
};
