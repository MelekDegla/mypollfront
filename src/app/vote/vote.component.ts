import { Component, OnInit } from '@angular/core';
import {PollsService} from '../services/polls.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor(private pollService: PollsService, private actRoute: ActivatedRoute) { }
    public answers: [any];
    public question: any;
    public response: any;
    vote() {
      this.pollService.vote(this.response).subscribe();
    }
  ngOnInit() {
    this.pollService.getPollByUser(this.actRoute.snapshot.params.id).subscribe((result) => {
      // @ts-ignore
      this.answers = result.data.answers;
      // @ts-ignore
      this.question = result.data.question;
    });
  }

}
