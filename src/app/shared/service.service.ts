import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Posts} from '../interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  posts: Posts[] = [
    {id: 1, text: 'Kanat', title: 'Frontend dev'},
    {id: 2, text: 'Max', title: 'Frontend dev'},
    {id: 3, text: 'Den', title: 'Frontend dev'},
  ];
  getDataId(id: number) {
    return this.posts.find(p => p.id === id);
  }
 }
