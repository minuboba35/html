const btn = document.getElementById("btn");
// get~~은 아이디를 바로 부르므로 .을 찍을 필요 없지만
const menu = document.querySelector(".menu");
// qs는 class인지 id 인지 모르기때문에 점을 찍어줘야한다

// const close = btn.querySelector("i");
const close = document.querySelector(".bars i");

// uil-multiply

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
  close.classList.toggle("uil-multiply");
});
