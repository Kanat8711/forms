import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ServiceService} from './shared/service.service';
import {NotifierService} from 'angular-notifier';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private store: Store,
              private service1: ServiceService,
              private notifierService: NotifierService) {
  }

  ngOnInit(): void {
  }
}
