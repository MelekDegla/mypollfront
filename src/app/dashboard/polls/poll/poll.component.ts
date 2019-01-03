import {Component, OnDestroy, OnInit} from '@angular/core';
import {PollsService} from '../../../services/polls.service';




@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit, OnDestroy {
  public poll;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: 'top',
      labels: {
        boxWidth: 0
      }
    }
  };
  public chartColors: Array<any> = [
    {backgroundColor: ['blue', 'red'],
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];
  public barChartLabels = [];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData = [
    {data: [12, 50, 100], label: 'Series A', colors: ['red']}
  ];
  private interval;
  constructor(private pollService: PollsService) { }
  update() {
   this.interval = setInterval(() => this.pollService.getPollByUser(+localStorage.getItem('user_id')).subscribe((result) => {
      this.poll = result;
      console.log('interval');
      let answers = this.poll.data.answers;
      let votestab = [];
      let votes = 0, b = false;
      for ( let i = 0; i < answers.length; i++) {
        votes += answers[i].votes;
        votestab.push(answers[i].votes);
      }
      for ( let i = 0; i < answers.length; i++) {
        votestab[i] = votestab[i] / votes * 100;
        if (votestab[i] != this.barChartData[0].data[i]) {
          b = true;
        }
      }
      votestab.push(0);
      votestab.push(100);
      if (b) {
        this.barChartData[0].data = votestab;
        console.log(votestab);
        let clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = votestab;
        this.barChartData = clone;
      }
    }), 2000);
  }
  ngOnInit() {
    this.pollService.getPollByUser(+localStorage.getItem('user_id')).subscribe((result) => {
      this.poll = result;
      let answers = this.poll.data.answers;
      let bs = [], votestab = [], b = false;
      let votes = 0;
      for ( let i = 0; i < answers.length; i++) {
        bs.push(answers[i].label);
        votes += answers[i].votes;
        votestab.push(answers[i].votes);
      }
      for ( let i = 0; i < answers.length; i++) {
        votestab[i] = votestab[i] / votes * 100;
        if (votestab[i] != this.barChartData[0].data[i]) {
          b = true;
        }
      }
      votestab.push(0);
      votestab.push(100);
        this.barChartLabels = bs;
        console.log(this.barChartLabels);
        console.log('dkhal');
        this.barChartData[0].data = votestab;
        console.log(votestab);
      this.barChartData[0].label = this.poll.data.question;
      this.update();
    });
  }

  ngOnDestroy(): void {
      console.log('deeeeeesssss');
      clearInterval(this.interval);
  }

}
