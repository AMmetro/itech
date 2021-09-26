
document.querySelector('.button_parent').onclick = function () {
  toastPopup = new ToastPopup('I am parent')
  toastPopup.makeToast();
};

document.querySelector('.button_error').onclick = function () {
  var toastPopupError = new ToastPopupError('Error!!!Oops, somethink is wrong')
  toastPopupError.makeToast();
};

document.querySelector('.button_warning').onclick = function () {
  var toastPopupWarning = new ToastPopupWarning('Warning!!! Pay atention')
  toastPopupWarning.makeToast();
};

document.querySelector('.button_success').onclick = function () {
  var toastPopupSuccess = new ToastPopupSuccess('Succes!!! Everything is fine');
  toastPopupSuccess.makeToast();
};

document.querySelector('.button_info').onclick = function () {
  var toastPopupInfo = new ToastPopupInfo('Info!!! Read please.')
  toastPopupInfo.makeToast();
};

//-----------------------------------------------------------------------------   


class ToastPopup {
  constructor(message) {
    this.message = message;
    this.toastMessage = document.createElement('div');
    this.closeButton = document.createElement('div');
    this.toastItem = document.createElement('div');
    this.icon = document.createElement('div');
    this.timeRemove=5000;
  }
  makeToast() {    
    this.closeButton.classList.add('close-button');
    this.closeButton.addEventListener('click', () => {
      this.toastItem.remove()
    })
    document.querySelector('body').appendChild(this.closeButton);
  
    var closeButtonContainer = document.createElement('div');
    closeButtonContainer.classList.add('close_button-container');
    closeButtonContainer.appendChild(this.closeButton);
  
    this.toastMessage.classList.add('toastMessage');
    this.toastMessage.innerHTML = this.message;
  
    this.icon.innerHTML = '';
    this.toastMessage.prepend(this.icon);
  
    this.toastItem.classList.add('defaultStyle');
    this.toastItem.classList.add('toastItem');
  
    this.toastItem.appendChild(closeButtonContainer);
    this.toastItem.appendChild(this.toastMessage);
  
    var toastField = document.querySelector('.toastField');
    if (toastField) {
      toastField.appendChild(this.toastItem);
    }
    else {
      let toastField = document.createElement('div');
      toastField.classList.add('toastField');
      toastField.appendChild(this.toastItem);
      document.querySelector('body').appendChild(toastField);
    }
  
    var self = this;
    setTimeout(function () {
      self.toastItem.remove();
      var allToast = document.querySelectorAll('.toastItem');
      if (allToast.length == 0) document.querySelector('.toastField').remove();
    }, self.timeRemove);


  }
}


// ---------------------ToastPopupError---------------------------------


class ToastPopupError extends ToastPopup {
  constructor(options) {
    super(options)
  }
  makeToast(options) {
    super.makeToast();
    this.toastItem.classList.add('toast-skin-error');
        this.icon.innerHTML = '&#9940;';
        this.toastMessage.prepend(this.icon);
        this.timeRemove = 1000;
  }
}




// // ---------------------ToastPopupWarning---------------------------------

class ToastPopupWarning extends ToastPopup {
  constructor(options) {
    super(options)
  }
  makeToast(options) {
    super.makeToast();
    this.toastItem.classList.add('toast-skin-warning');
        this.icon.innerHTML = '&#128293;';
        this.toastMessage.prepend(this.icon);
        this.timeRemove = 1000;
  }
}


// // ---------------------ToastPopupSucces---------------------------------


class ToastPopupSuccess extends ToastPopup {
  constructor(options) {
    super(options)
  }
  makeToast(options) {
    super.makeToast();
    this.toastItem.classList.add('toast-skin-success');
        this.icon.innerHTML = '&#9989';
        this.toastMessage.prepend(this.icon);
        this.timeRemove = 1000;
  }
}



// // ---------------------ToastPopupInfo---------------------------------

class ToastPopupInfo extends ToastPopup {
  constructor(options) {
    super(options)
  }
  makeToast(options) {
    super.makeToast();
    this.toastItem.classList.add('toast-skin-info');
        this.icon.innerHTML = '&#128276';
        this.toastMessage.prepend(this.icon);
        this.timeRemove = 1000;
  }
}





document.addEventListener("DOMContentLoaded", () => { console.log("DOMContentLoaded"); });

