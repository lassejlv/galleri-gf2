// Din cool code here

const images = ["elephant", "great-white", "koala", "smithi", "tiger"];
let builds = [];
const container = document.getElementById("container");

for (const image of images) {
  builds.push(buildCard(image, false));
}

// On load
document.addEventListener("DOMContentLoaded", () => {
  container.classList.remove("hidden");
  document.getElementById("spinner").classList.add("hidden");
})


container.innerHTML = builds.join("");

// Listen for alle billederne med classen "cursor-pointer"
container.addEventListener("click", (event) => {
  const target = event.target;
  const resetAll = target.getAttribute("resetall");

  // Tjekker om der er klikket på "reset all" billedet
  if (resetAll) {
    builds = [];
    for (const image of images) {
      builds.push(buildCard(image, false));
    }

    container.innerHTML = builds.join("");
  } else {
    // Tjekker om der er klikket på et billede
    if (target.classList.contains("cursor-pointer")) {
      handleImageClick(target);
    }
  }
});

// Bygger HTML'en for hvert billede
function buildCard(image, resetAll) {
  return `
      <img src="./img/${image}.jpg" alt="${image}" class="h-1/2 rounded-sm cursor-pointer shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" 
        ${resetAll ? 'resetall="true"' : ""}
      />
    `;
}

// Finder det valgte billede og opdaterer HTML'en
function handleImageClick(element) {
  // Finder "src" attributten på billedet
  const src = element.getAttribute("src");
  // Fjerner "/img/" og ".jpg" fra src attributten
  const srcWithoutImg = src.replace("/img/", "").replace(".jpg", "").replace(".", "");

  builds = [];
  const image = buildCard(srcWithoutImg, true);
  builds.push(image);

  // Opdaterer HTML'en med det valgte billede
  container.innerHTML = builds.join("");
}
