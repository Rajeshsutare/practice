import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {

  public postArray !:any;
  constructor(private _postService:PostsService){}

  ngOnInit(): void {
    this._postService.getAllPost().subscribe(res=>{
      console.log(res);
      this.postArray=res;
    })
  }

}
