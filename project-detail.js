document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = (typeof PROJECTS !== "undefined") ? PROJECTS.find(p => p.id === id) : null;

  const wrap = document.getElementById("projectDetail");
  const notFound = document.getElementById("projectNotFound");

  if(!project){
    if(wrap) wrap.style.display = "none";
    if(notFound) notFound.style.display = "block";
    return;
  }

  document.title = `${project.title} — Raghad Khalid`;

  document.getElementById("detailTitle").textContent = project.title;
  document.getElementById("detailCategory").textContent = project.categoryLabel;

  const cover = document.getElementById("detailCover");
  cover.innerHTML = project.image
    ? `<img src="${project.image}" alt="${project.title}" onerror="this.parentElement.style.display='none'">`
    : "";

  document.getElementById("detailTools").innerHTML =
    project.tools.map(t => `<span>${t}</span>`).join("");

  const d = project.details || {};
  document.getElementById("detailProblem").textContent = d.problem || "—";
  document.getElementById("detailIdea").textContent = d.idea || "—";
  document.getElementById("detailHow").textContent = d.howItWorks || "—";
  document.getElementById("detailRole").textContent = d.myRole || "—";
  document.getElementById("detailResults").textContent = d.results || "—";

  const compList = document.getElementById("detailComponents");
  compList.innerHTML = (d.components || []).map(c => `<li>${c}</li>`).join("");

  const photoGrid = document.getElementById("detailPhotos");
  const photoSection = document.getElementById("photosBlock");
  if(d.photos && d.photos.length){
    photoGrid.innerHTML = d.photos.map(src => `<img src="${src}" alt="${project.title}" loading="lazy">`).join("");
  } else {
    photoSection.style.display = "none";
  }
});
