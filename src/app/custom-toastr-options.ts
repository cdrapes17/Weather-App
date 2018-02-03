import {ToastOptions} from 'ng2-toastr';

export class CustomToastrOption extends ToastOptions {
    animate = 'flyRight'; // you can override any options available
    newestOnTop = false;
    showCloseButton = true;
    positionClass = 'toast-bottom-right';
  }