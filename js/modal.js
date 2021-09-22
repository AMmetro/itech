document.getElementById("btnOpenModal1").onclick = function () {
  var message="This window is instanse from Prototype ModalWindow"
  var modalWindow = new ModalWindow(message);
  modalWindow.makeModal();
  modalWindow.addContent();
  modalWindow.addCloseBtn();
}

document.getElementById("btnOpenModal2").onclick = function () {
  var message="This window is inheritor from instance of PrototypeModalWindow"
  var modifayedModalWidow = new ModifayedModalWidow(message)
  modifayedModalWidow.makeModal();
  modifayedModalWidow.addContent();
  modifayedModalWidow.addCloseBtn();
  modifayedModalWidow.addInput();
}

//-------------------------------------------------------------------- 

var ModalWindow = function (message) {
  this.message=message;
 }

  ModalWindow.prototype.makeModal = function () {
      modal = document.createElement("div");
      modal.classList.add("modal")
      modal.style.display = "block";
      document.querySelector('body').appendChild(modal);
    }

  ModalWindow.prototype.addContent = function () {
        var modalContentHolder = document.createElement("div");
        modalContentHolder.classList.add("modal-content");
        var modalCloseBtn = document.createElement("span")
        modalCloseBtn.classList.add("modalCloseBtn");
        modalCloseBtn.innerHTML = "&times";
        modalCloseBtn.onclick = function () {
            modal.style.display = "none";
            modalContentHolder.remove();
        };

          modalContentHolder.appendChild(modalCloseBtn);
          var modalContentTxt = document.createElement("p");
          modalContentTxt.innerText = this.message;
          modalContentHolder.appendChild(modalContentTxt);
          modal.appendChild(modalContentHolder);

          this.addCloseBtn = function () {
              window.onclick = function (event) {
                  if (event.target == modal) {
                      modal.style.display = "none";
                      modalContentHolder.remove()
                  }
              }
          }
}


var ModifayedModalWidow = function (options) {
  ModalWindow.apply(this, arguments);
}

//  reassign prototype for ModifayedModalWidow with Object.create(parametrs) 
ModifayedModalWidow.prototype = Object.create(ModalWindow.prototype);
//specifically constructor
ModifayedModalWidow.prototype.constructor = ModifayedModalWidow;

ModifayedModalWidow.prototype.addInput = function () {
  this.type = "this ModifayedModalWidow is inheritance of PrototypeModalWindow";
  var inputHolder = document.createElement("div");
  inputHolder.classList.add("inputHolder");
  var input = document.createElement("Input");
  input.classList.add("input");
  var hint = document.createElement("p");
  hint.classList.add("hint");
  hint.innerText = "put some info";

  inputHolder.appendChild(hint);
  inputHolder.appendChild(input);
  modal.appendChild(inputHolder);
} 