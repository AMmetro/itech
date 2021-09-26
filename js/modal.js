document.getElementById("btnOpenModal1").onclick = function () {
  const modalWindow = new ModalWindow("first message");
  modalWindow.makeModal();
}

document.getElementById("btnOpenModal2").onclick = function () {
  var modifayedModalWidow = new ModifayedModalWidow("second message")
  modifayedModalWidow.addInput();
}

//-------------------------------------------------------------------- 

class ModalWindow {
  constructor(message) {
    this.message = message;
    this.modal = document.createElement("div");
  }
  makeModal() {
    this.modal.classList.add("modal")
    this.modal.style.display = "block";
    document.querySelector('body').appendChild(this.modal);

    const modalContentHolder = document.createElement("div");
    modalContentHolder.classList.add("modal-content");
    const modalCloseBtn = document.createElement("span")
    modalCloseBtn.classList.add("modalCloseBtn");
    modalCloseBtn.innerHTML = "&times";

    var self = this;
    modalCloseBtn.onclick = function () {
      self.modal.style.display = "none";
      modalContentHolder.remove();
    };

    modalContentHolder.appendChild(modalCloseBtn);
    const modalContentTxt = document.createElement("p");
    modalContentTxt.innerText = this.message;
    modalContentHolder.appendChild(modalContentTxt);
    this.modal.appendChild(modalContentHolder);


    var self = this;
    this.addCloseBtn = function () {
      window.onclick = function (event) {
       if (event.target == self.modal) {
        self.modal.style.display = "none";
        modalContentHolder.remove()
        }
      }
    }
    this.addCloseBtn();
  }
}

class ModifayedModalWidow extends ModalWindow {
  constructor(options) {
    super(options)
  }
  addInput(options) {
    super.makeModal();
    const inputHolder = document.createElement("div");
    inputHolder.classList.add("inputHolder");
    const input = document.createElement("Input");
    input.classList.add("input");
    const hint = document.createElement("p");
    hint.classList.add("hint");
    hint.innerText = "put some info";

    inputHolder.appendChild(hint);
    inputHolder.appendChild(input);

    this.modal.appendChild(inputHolder);
  }
}