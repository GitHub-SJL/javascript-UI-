const tabBtn = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

const handleTab = (num) => {
  for (let j = 0; j < tabBtn.length; j++) {
    tabBtn[j].classList.remove("orange");
    tabContent[j].classList.remove("show");
  }
  tabBtn[num].classList.add("orange");
  tabContent[num].classList.add("show");
};

for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener("click", () => {
    handleTab(i);
  });
}
