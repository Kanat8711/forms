import {Component, Input, OnInit} from '@angular/core';
import {Form} from '../interfaces/form';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data: Form[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
