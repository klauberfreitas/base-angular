import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService) { }

  //usar type ao invés de enum
  notificacaoSucesso(message, title) {
    this.toastr.success(message, title)
  }

  notificacaoErro(message, title) { 
    this.toastr.error(message, title)
  }

  notificacaoAviso(message, title) {
    this.toastr.warning(message, title)
  }
  notificacaoInfo(message, title) {
    this.toastr.info(message, title)
  }

}