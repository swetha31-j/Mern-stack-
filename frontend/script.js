const container = document.getElementById("topicsContainer");

// Fetch topics from backend
fetch("http://localhost:3000/topics")
  .then(response => response.json())
  .then(data => {
    data.forEach(topic => {
      const card = document.createElement("div");
      card.className = "topic-card";

      card.innerHTML = `
        <h3>${topic.subject}</h3>
        <p><strong>Difficulty:</strong> ${topic.difficultyLevel}</p>
        <p><strong>Study Hours:</strong> ${topic.recommendedStudyHours}</p>
        <p><strong>Important:</strong> ${topic.important ? "Yes" : "No"}</p>
        <ul>
          ${topic.topics.map(t => `<li>${t}</li>`).join("")}
        </ul>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.log(error));