import { Component, OnInit } from '@angular/core';
import {Auth} from '../models/Auth';
import {AuthService} from '../services/auth.service';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }
  private auth: Auth;
  onsubmit(event) {
     event.preventDefault;
     console.log('sub');
    this.service.getToken(this.auth).subscribe(res => {console.log(res);

    // @ts-ignore
      localStorage.setItem('access_token', res.access_token);
    // @ts-ignore
      localStorage.setItem('token_type', res.token_type); localStorage.setItem('authentificated', 'true');
      // @ts-ignore
      console.log(res.token_type + ' ' + res.access_token);
      // @ts-ignore
      this.service.getUser(res.token_type + ' ' + res.access_token).subscribe(reult => {console.log(reult);
      // @ts-ignore
        localStorage.setItem('user_id', reult.id.toString());
      });
      this.router.navigateByUrl('dashboard/list');
    });
  }
  ngOnInit() {
    this.auth = new Auth('', '');
  }

}
