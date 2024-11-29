const onebButton = document.querySelector("#one-button");
const oneDialog = document.querySelector("#one-dialog");

const twobButton = document.querySelector("#two-button");
const twoDialog = document.querySelector("#two-dialog");

const threebButton = document.querySelector("#three-button");
const threeDialog = document.querySelector("#three-dialog");

if (oneDialog && onebButton) {
  onebButton.addEventListener("click", () => {
    oneDialog.showModal();
  });
}

if (twoDialog && twobButton) {
  twobButton.addEventListener("click", () => {
    twoDialog.showModal();
  });
}

if (threeDialog && threebButton) {
  threebButton.addEventListener("click", () => {
    threeDialog.showModal();
  });
}
