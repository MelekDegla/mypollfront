import {Answer} from './Answer';

export class  Poll {
//  public answer: [Answer];
  public answers: [any];
  constructor(public question, public user_id, public activated) {

  }
}
