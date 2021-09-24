
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

var ToastPopup = function (message) {
  this.message = message;
  this.toastMessage = document.createElement('div');
  this.closeButton = document.createElement('div');
  this.toastItem = document.createElement('div');
  this.icon = document.createElement('div');
  this.timeRemove=5000;

}

ToastPopup.prototype.makeToast = function () {
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


// ---------------------ToastPopupError---------------------------------
var ToastPopupError = function (...options) {
  ToastPopup.apply(this, options);

  var parentMakeToast = this.makeToast;
  this.makeToast = function () {
    parentMakeToast.apply(this);
    this.toastItem.classList.add('toast-skin-error');
    this.icon.innerHTML = '&#9940;';
    this.toastMessage.prepend(this.icon);
    this.timeRemove = 1000;
  }
}

ToastPopupError.prototype = Object.create(ToastPopup.prototype);
ToastPopupError.prototype.constructor = ToastPopup;

// ---------------------ToastPopupWarning---------------------------------
var ToastPopupWarning = function (...options) {
  ToastPopup.apply(this, options);

  var parentMakeToast = this.makeToast;
  this.makeToast = function () {
    parentMakeToast.apply(this);
    this.toastItem.classList.add('toast-skin-warning');
    this.icon.innerHTML = '&#128293;';
    this.toastMessage.prepend(this.icon);
    this.timeRemove = 3000;
  }
}

ToastPopupWarning.prototype = Object.create(ToastPopup.prototype);
ToastPopupWarning.prototype.constructor = ToastPopup;

// ---------------------ToastPopupSucces---------------------------------
var ToastPopupSuccess = function (...options) {
  ToastPopup.apply(this, options);

  var parentMakeToast = this.makeToast;
  this.makeToast = function () {
    parentMakeToast.apply(this);
    this.toastItem.classList.add('toast-skin-success');
    this.icon.innerHTML = '&#9989';
    this.toastMessage.prepend(this.icon);
    this.timeRemove = 2000;
  }
}

ToastPopupSuccess.prototype = Object.create(ToastPopup.prototype);
ToastPopupSuccess.prototype.constructor = ToastPopup;


// ---------------------ToastPopupInfo---------------------------------
var ToastPopupInfo = function (...options) {
  ToastPopup.apply(this, options);

  var parentMakeToast = this.makeToast;
  this.makeToast = function () {
    parentMakeToast.apply(this);
    this.toastItem.classList.add('toast-skin-info');
    this.icon.innerHTML = '&#128276';
    this.toastMessage.prepend(this.icon);
    this.timeRemove = 4000;
  }
}


ToastPopupInfo.prototype = Object.create(ToastPopup.prototype);
ToastPopupInfo.prototype.constructor = ToastPopup;






