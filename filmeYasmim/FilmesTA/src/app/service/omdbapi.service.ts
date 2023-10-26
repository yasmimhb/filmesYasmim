import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum SearchType{
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode',
}

@Injectable({
  providedIn: 'root'
})
export class OmdbapiService {
  url = 'http://www.omdbapi.com/'
  apiKey = '77535b99'

  constructor (private http : HttpClient) { }

  getAll(tittle : string, type:SearchType)
  : Observable<any>{
    return this.http.get(`${this.url}?s=${encodeURI(tittle)}&type=${type}&apikey=${this.apiKey}`);
  }

  getById(id : any){
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
