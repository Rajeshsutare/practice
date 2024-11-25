import { Component, OnInit } from '@angular/core';
import { Imovies } from '../../model/interfaces';
import { movies } from '../../const/movies';
import { Observable, debounceTime, of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit{

  public moviesArray:Array<Imovies>=movies;

  public searchMovie !:string;


  constructor(){}
  
  ngOnInit(): void {

  }


}
