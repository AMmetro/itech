document.querySelector ('.button_error').onclick=function () { 
    var toastPopupItems = new ToastPopup('Error!!!Oops, somethink is wrong.');
    toastPopupItems.makeToast('toast-skin-error');
    toastPopupItems.addToast();
    toastPopupItems.deleteToast(5000);
    };

document.querySelector ('.button_warning').onclick=function () {
    var toastPopupItems = new ToastPopup('Warning!!! Pay atention');
    toastPopupItems.makeToast('toast-skin-warning');
    toastPopupItems.addToast();
    toastPopupItems.deleteToast(3000);
  };

  document.querySelector ('.button_success').onclick=function () {
    var toastPopupItems = new ToastPopup('Succes!!! Everything is fine.');
    toastPopupItems.makeToast('toast-skin-success');
    toastPopupItems.addToast();
    toastPopupItems.deleteToast(2000);
  };

  document.querySelector ('.button_info').onclick=function () {
    var toastPopupItems = new ToastPopup('Info!!! Read please.');
    toastPopupItems.makeToast('toast-skin-info');
    toastPopupItems.addToast();
    toastPopupItems.deleteToast(6000);
  };
  
//-----------------------------------------------------------------------------   
 
      var ToastPopup = function (message) {
      this.message=message;
      this.toastMessage = document.createElement ('div');
      this.closeButton = document.createElement ('div');
      this.toastItem = document.createElement('div');
    }

    ToastPopup.prototype.makeToast = function (toastStyle) {
      this.closeButton.classList.add (toastStyle);
      this.closeButton.classList.add('close-button');
      this.closeButton.addEventListener('click',()=>{
                           this.toastItem.remove()
                      })
      document.querySelector('body').appendChild(this.closeButton);

      let closeButtonContainer = document.createElement ('div');
      closeButtonContainer.classList.add('close_button-container');
      closeButtonContainer.appendChild(this.closeButton);

      this.toastMessage.classList.add ('toastMessage');
      this.toastMessage.innerHTML += this.message;

      this.toastItem.classList.add('toastItem');
      this.toastItem.classList.add(toastStyle);
      this.toastItem.appendChild (closeButtonContainer);
      this.toastItem.appendChild (this.toastMessage);    
   }

   ToastPopup.prototype.addToast = function () {
        let toastField = document.querySelector ('.toastField');
        if (toastField) {
           toastField.appendChild (this.toastItem);
              }
        else {
        let toastField = document.createElement('div');
        toastField.classList.add('toastField');
        toastField.appendChild (this.toastItem);
        document.querySelector('body').appendChild(toastField);
        }
  }

      ToastPopup.prototype.deleteToast  = function (timeRemove=5000) {
                      // "self" is alias for "this"
                      var self = this
                      setTimeout (function (){ 
                        self.toastItem.remove()
                      }, timeRemove);
                    }


  
 
