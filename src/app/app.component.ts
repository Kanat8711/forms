import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ServiceService} from './shared/service.service';
import {NotifierService} from 'angular-notifier';
import {Form} from './interfaces/form';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Анкета';

  counter = 0;
  lastDate?: number;
  modal: boolean = false;
  toggle: boolean = false;
  text: string = 'adsa';
  number: number = 666.0000;
  data: any;
  dataWithForm: Form[] = [];

  constructor(private store: Store,
              private service1: ServiceService,
              private notifierService: NotifierService) {
  }

  ngOnInit(): void {
    console.log('dataWithFrom', this.dataWithForm);
  }

  offModal(event: boolean) {
    this.modal = event;
  }

  onModal(event: boolean) {
    this.modal = event;
  }

  updateData() {
    this.service1.getData()
      .subscribe(data => {
        debugger
        this.data = data;
        });
  }

  sendForm(event: boolean) {
    this.notifierService.notify('success', 'Успешно сохранен');
    this.modal = event;
  }

  dataForm(event: any) {
    this.dataWithForm.push(event);
  }
}
