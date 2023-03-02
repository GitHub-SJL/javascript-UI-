const tabBtn = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");
const tabList = document.querySelector(".list");

const handleTab = (num) => {
  for (let j = 0; j < tabBtn.length; j++) {
    tabBtn[j].classList.remove("orange");
    tabContent[j].classList.remove("show");
  }
  tabBtn[num].classList.add("orange");
  tabContent[num].classList.add("show");
};

tabList.addEventListener("click", (e) => {
  num = parseInt(e.target.dataset.id);
  handleTab(num);
});
