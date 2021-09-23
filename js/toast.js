    document.querySelector ('.button_pure').onclick=function () {
    toastPopup=new PurePopup()
    toastPopup.makeToast('I am pure Popup');
      };

    document.querySelector ('.button_styled').onclick=function () {
    var styledPopup=new StyledPopup()
    styledPopup.makeToast('I am styled Popup', 3000);
    styledPopup.addStyle('toast-skin-styled','&hellip;');
    };

    document.querySelector ('.button_error').onclick=function () {
      var toastPopupError=new ToastPopupError()
      toastPopupError.makeToast('Error!!!Oops, somethink is wrong', 2000);
      toastPopupError.addStyle('toast-skin-error','&#9940;');
      };

     document.querySelector ('.button_warning').onclick=function () {
     var toastPopupWarning=new ToastPopupWarning();
     toastPopupWarning.makeToast('Warning!!! Pay atention', 3000);
     toastPopupWarning.addStyle('toast-skin-warning','&#128293;');
    };

    document.querySelector ('.button_success').onclick=function () {
      var toastPopupSuccess=new ToastPopupSuccess()
      toastPopupSuccess.makeToast('Succes!!! Everything is fine', 2000);
      toastPopupSuccess.addStyle('toast-skin-success','&#9989;');
      };

      document.querySelector ('.button_info').onclick=function () {
        var toastPopupInfo = new ToastPopupInfo();
        toastPopupInfo.makeToast('Info!!! Read please.', 6000);
        toastPopupInfo.addStyle('toast-skin-info','&#128276;');
      }


 //-----------------------------------------------------------------------------

      var PurePopup = function (message) {
      this.message=message;
      this.toastMessage = document.createElement ('div');
      this.closeButton = document.createElement ('div');
      this.toastItem = document.createElement('div');
      this.icon = document.createElement ('div');
    }

    PurePopup.prototype.makeToast = function (message,timeRemove=5000) {
       this.closeButton.classList.add('close-button');
      this.closeButton.addEventListener('click',()=>{
                           this.toastItem.remove()
                      })
      document.querySelector('body').appendChild(this.closeButton);

      var closeButtonContainer = document.createElement ('div');
      closeButtonContainer.classList.add('close_button-container');
      closeButtonContainer.appendChild(this.closeButton);

      this.toastMessage.classList.add ('toastMessage');
      this.toastMessage.innerHTML = message;

      this.toastItem.classList.add('toastItem');
      this.toastItem.appendChild (closeButtonContainer);
      this.toastItem.appendChild (this.toastMessage);

      var toastField = document.querySelector ('.toastField');
        if (toastField) {
           toastField.appendChild (this.toastItem);
              }
        else {
        let toastField = document.createElement('div');
        toastField.classList.add('toastField');
        toastField.appendChild (this.toastItem);
        document.querySelector('body').appendChild(toastField);
        }

        var self = this;
        setTimeout (function (){
          self.toastItem.remove();
          var allToast = document.querySelectorAll('.toastItem');
          if (allToast.length == 0) document.querySelector('.toastField').remove();
        }, timeRemove);
   }

// ---------------------StyledPopup-------------------------

        var StyledPopup = function (options) {
        PurePopup.apply(this, arguments);
        this.icon = document.createElement ('div');
        this.addStyle = function(toastStyle, iconType) {
        this.toastItem.classList.add(toastStyle);
        this.icon.innerHTML=iconType;
        this.toastMessage.classList.add ('toastMessage');
        this.toastMessage.prepend(this.icon);
      };
}

StyledPopup.prototype = Object.create(PurePopup.prototype);
StyledPopup.prototype.constructor = PurePopup;

// --------------------ToastPopupError--------------------------

var ToastPopupError = function (options) {
  StyledPopup.apply(this, arguments);
}
ToastPopupError.prototype = Object.create(StyledPopup.prototype);
ToastPopupError.prototype.constructor = StyledPopup;

// --------------------ToastPopupWarning--------------------------

var ToastPopupWarning = function (options) {
  StyledPopup.apply(this, arguments);
}
ToastPopupWarning.prototype = Object.create(StyledPopup.prototype);
ToastPopupWarning.prototype.constructor = StyledPopup;

// --------------------ToastPopupSuccess--------------------------

var ToastPopupSuccess = function (options) {
  StyledPopup.apply(this, arguments);
}
ToastPopupSuccess.prototype = Object.create(StyledPopup.prototype);
ToastPopupSuccess.prototype.constructor = StyledPopup;


// --------------------ToastPopupInfo--------------------------

var ToastPopupInfo = function (options) {
  StyledPopup.apply(this, arguments);
}
ToastPopupInfo.prototype = Object.create(StyledPopup.prototype);
ToastPopupInfo.prototype.constructor = StyledPopup;

// ------------------------------------------------------------







