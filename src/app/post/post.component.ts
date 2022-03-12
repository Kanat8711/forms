import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../shared/service.service';
import {Posts} from '../interfaces/posts';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Posts[] = [];
  showId = false;

  constructor(private postService: ServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.showId = !!params.showId;
    });
    this.posts = this.postService.posts;
  }

}
