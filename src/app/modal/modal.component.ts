import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  @Input() title!: string;
  @Output() close = new EventEmitter<boolean>();
  @Output() onSend = new EventEmitter<boolean>();
  @Output() onValue = new EventEmitter<any>();
  form!: FormGroup;
  constructor() {}
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl('')
    });
  }

  onClose(event: boolean) {
    this.close.emit(event);
  }
  send(event: boolean) {
    this.onSend.emit(event);
    this.submit();
  }


  submit() {
    const formValue = {...this.form.value};
    this.onValue.emit(formValue);
    console.log('form', formValue);
  }
}
