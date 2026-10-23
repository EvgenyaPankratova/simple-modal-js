const containerButton = document.querySelector(".containerButton");
const modalButton = document.querySelectorAll(".modalButton");
const modal = document.querySelector(".modal");

containerButton.addEventListener("click", () => modal.showModal());
modalButton.forEach((elem) =>
  elem.addEventListener("click", () => modal.close()),
);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
