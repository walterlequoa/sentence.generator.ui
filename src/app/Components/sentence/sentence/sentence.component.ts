import { Component, OnInit } from '@angular/core';
import { PartOfSpeechModelList } from '../../../Interface/partOfSpeechModel';
import { WordService  } from 'src/app/Services/word/word.service';
import { WordResponse } from '../../../Interface/WordResponse';
import { SentenceService } from 'src/app/Services/sentence/sentence.service';
import { SentenceRequest } from '../../../Interface/SentenceRequest';
import { WordList} from '../../../Interface/WordList';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {
  result: string[] = [];
  words: WordList[] = [];
  wordRequest : WordResponse = {
    PartOfSpeech: '',
    limit: 10
  }
  word: string = '';
  PartOfSpeech: string = '';
  constructor(private wordService: WordService, private sentenceService: SentenceService) { }
  
  ngOnInit(): void {
    let lists = JSON.parse(JSON.stringify(PartOfSpeechModelList));
    
    for(var i in lists){
      this.result.push(lists[i].value);
    }
  }

  onSelectType(event: any) {
    this.PartOfSpeech = event.target.textContent;
  }

  onGenerate() {
    this.wordRequest.PartOfSpeech = this.PartOfSpeech;
    this.wordRequest.limit = 10;

    this.wordService.generateWord(this.wordRequest).subscribe({
        next: (response) => {
          
        },
        error: (error) => { }
      });
  }

  addWord(event: any){
    this.word += event.target.textContent;
  }

  saveSentence() {
    this.sentenceService.addSentence(this.word).subscribe({
      next: (response) => {
        alert('Sentence save successufully!!')
      },
      error: (error) => {
        alert(error.error);
      }
    })
  }

}
