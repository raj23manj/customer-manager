import {Component, ViewEncapsulation, Input} from '@angular/core';
import * as $ from 'jquery';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class NgbdModalOptions {
  @Input() customClass: string = "btn btn-outline-primary mb-2 mr-2";
  @Input() modalTitle: string;

  constructor(private modalService: NgbModal) {}

  open(content, size: any) {
    this.modalService.open(content, { size: size });
  }

  manualCloseModal() {
    $('.modal-close-btn').click();
  }

}
