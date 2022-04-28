import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WordResponse } from '../../Interface/WordResponse';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private httpClient: HttpClient) { }

  generateWord(wordRequest: WordResponse) : Observable<WordResponse[]>{
    return this.httpClient.post<WordResponse[]>(`${environment.apiUrl}Word/generate`, wordRequest, { responseType: 'json' });
  }
}
