import { Component, OnInit } from '@angular/core';
import {timeout} from 'rxjs/operators';
import {PollsService} from '../../../services/polls.service';
import {Observable, observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private pollservice: PollsService) { }
  public polls;
  activate(id) {
    this.pollservice.activate(id).subscribe(r => console.log(r));
  }
  ngOnInit() {
    this.pollservice.getPolls().subscribe(result => {this.polls = result;
   });
  }

}
