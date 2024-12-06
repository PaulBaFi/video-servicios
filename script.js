const onebButton = document.querySelector("#one-button");
const oneDialog = document.querySelector("#one-dialog");

const twobButton = document.querySelector("#two-button");
const twoDialog = document.querySelector("#two-dialog");

const threebButton = document.querySelector("#three-button");
const threeDialog = document.querySelector("#three-dialog");

function handleOpen(button, dialog) {
  if (button && dialog) {
    button.addEventListener("click", () => {
      dialog.showModal();
    });
  }
}

function handleClose(dialog) {
  if (dialog) {
    const iframe = dialog.querySelector("iframe");
    const closeButton = dialog.querySelector("button");

    if (closeButton && iframe) {
      closeButton.addEventListener("click", () => {
        dialog.close();
      });

      dialog.addEventListener("close", () => {
        const originalSrc = iframe.src;
        iframe.src = "";
        iframe.src = originalSrc;
      });
    }
  }
}

handleOpen(onebButton, oneDialog);
handleClose(oneDialog);

handleOpen(twobButton, twoDialog);
handleClose(twoDialog);

handleOpen(threebButton, threeDialog);
handleClose(threeDialog);
