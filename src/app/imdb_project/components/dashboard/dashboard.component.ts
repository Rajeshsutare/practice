import { Component, OnInit } from '@angular/core';
import { Imovies } from '../../model/interfaces';
import { movies } from '../../const/movies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit{

  public moviesArray:Array<Imovies>=movies;
  public searchMovie !:string;
  
  ngOnInit(): void {
    
  }

}
