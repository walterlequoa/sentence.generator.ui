import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SentenceRequest } from 'src/app/Interface/SentenceRequest';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  getSentences() : Observable<SentenceRequest[]> {
    let session = this.tokenService.getSession();
    return this.httpClient.get<SentenceRequest[]>(`${environment.apiUrl}Sentence/${session?.userId}`);
  }

  addSentence(sentence: string) : Observable<SentenceRequest> {
    let session = this.tokenService.getSession();
    let sentenceRequest = <SentenceRequest> {
      words: sentence,
      userId: session?.userId
    };

    return this.httpClient.post<SentenceRequest>(`${environment.apiUrl}Sentence/save`, sentenceRequest);
  }
}
