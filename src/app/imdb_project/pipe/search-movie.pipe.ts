import { Pipe, PipeTransform } from '@angular/core';
import { Imovies } from '../model/interfaces';

@Pipe({
  name: 'searchMovie'
})
export class SearchMoviePipe implements PipeTransform {

  transform(value: Imovies[] , movieName:string ): Imovies[] {

    if(!value){
      return []
    }
    if(!movieName){
      return value
    }

   return value.filter(f =>{
   return f.title.toLowerCase().trim().includes(movieName.toLowerCase())
   })

  }

}
