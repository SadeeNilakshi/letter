"use strict";
const timeline = [
   
  {
    title: "🍰 First Meet",
    description: "Nervous smiles, sweet laughs — like a dream.",
    image: "assets/first.jpg"
  },
  {
    title: "💋 First Date at Home",
    description: "The whole world stopped and it was just us.",
    image: "assets/home.jpg"
  },
  {
    title: "💌 First Date Out",
    description: "An unforgettable day and the best out date ever.",
    image: "assets/out.jpg"
  },
  {
    title: "🌄 Baker's Bend",
    description: "A day of lessons, nature, and memories.",
    image: "assets/bend.jpg"
  }
];
const loveLetter = `
  My Love,<br/><br/>

Happy 18 months to us🥺♥️😘 - 18 months of memories, laughter, lessons, and a love that means the world to me 🌎💖. I never thought someone could mean this much to me, but then you came into my life and became my safe place, my happiness, my everything 😩💗.

I know your heart was hurt and I don't like to remind it, and it breaks mine too. But I wanted to apologize. I never wanted to cause you pain — especially not on something that came so unintentionally 🥺. That idiot I met during the hike felt like a younger brother to me, just like my own and u know it. I never saw it as anything else, and I never thought it could be misunderstood or hurt you in any way. If I could go back, I would have been more aware, more cautious — not because I did anything wrong, but because your feelings matter deeply to me.

Please know, I love you purely, truly, and loyally. There is no space in my heart for anyone but you — not even a corner. You are my person, my dream, my future. And I will never let a moment like this come between us again 🔐♥️.

On our 18th month together, I want to say sorry not just with words, but with my heart. I want to keep learning to love you better every day, to protect our love from anything that could hurt it. You deserve that, and more 😘💖.

Thank you for being mine and understanding me. I love you endlessly mage sudu ayye. 💖
  On this special day, I’m not just saying sorry — I’m promising to protect what we have, every single day.<br/><br/>
  Forever yours,<br/>
  <strong>Sudu Bolee</strong>
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
    if (letterDiv)
        letterDiv.innerHTML = loveLetter;
}
window.onload = () => {
    renderTimeline();
    renderLetter();
};
