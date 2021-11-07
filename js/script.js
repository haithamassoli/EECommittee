const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
let searchData = document.querySelector(".search-data");
let resultsBox = document.querySelector(".results-box");
let resultsDiv = document.querySelector(".results-box div");
// let searchData = document.querySelector(".search-data");
let subArr = [];
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
};
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
console.log(subjects[0].name);
searchData.addEventListener("keyup", (e) => {
  const lowerData = e.target.value.toLowerCase();
  subArr = subjects.filter((data) => {
    return data.name.toLowerCase().includes(lowerData.toLowerCase());
  });
  subArr = subArr.map((e) => {
    return `<li>${e.name}</li>`;
  });
  resultsBox.classList.add("active");
  resultsDiv.classList.add("active");
  showSub(subArr);
});

function showSub(list) {
  let listData;
  if (!list.length) {
    lowerData = searchData.value;
    list = lowerData;
  } else {
    listData = list.join("");
  }
  resultsDiv.innerHTML = listData;
}
