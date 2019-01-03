import { Component, OnInit } from '@angular/core';
import {Poll} from '../../../models/Poll';
import {Answer} from '../../../models/Answer';
import {PollsService} from '../../../services/polls.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private pollService: PollsService) { }
  public responses = [{label: '', number: 0}, {label: '', number: 1}];
  public numbers = [1, 2];
  public poll: Poll;
  public answers: any = [];
  public question: '';
  public n = 1;
  addResp() {
    this.n++;
    this.responses.push({label: '', number: this.n});
    this.numbers.push(this.n);
  }
  oncreate() {
    for (let i = 0 ; i < this.responses.length; i++) {
        this.answers.push( {label: this.responses[i].label} );
    }

  this.poll.question = this.question;
    this.poll.answers = this.answers;
    console.log(this.poll);
    this.pollService.savePoll(this.poll).subscribe(result => console.log(result));
  }
  ngOnInit() {
    let id: number = +localStorage.getItem('user_id').toString();
    this.poll = new Poll('', id, false);
  }

}
