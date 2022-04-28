import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SentenceRequest } from 'src/app/Interface/SentenceRequest';
import { Observable } from 'rxjs';
import { SentenceService } from 'src/app/Services/sentence/sentence.service';
import { RefreshTokenRequest } from 'src/app/Interface/TokenRequest';

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.css']
})
export class SentencesComponent implements OnInit {

  sentences: SentenceRequest[] = [];
  constructor(private router: Router, private sentenceService: SentenceService) { }

  ngOnInit(): void {
    this.sentenceService.getSentences().subscribe({
      next: (response) => {
        response.forEach(item => {
          this.sentences.push(item);
        });
      },
      error: (error) => {
      }
    });
  }
}
