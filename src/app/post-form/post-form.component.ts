import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Posts} from '../interfaces/posts';
import {ServiceService} from '../shared/service.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute,
              private postsService: ServiceService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.post = this.postsService.getDataId(+params.id);
    });
  }

}
