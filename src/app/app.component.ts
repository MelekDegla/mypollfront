import {Component, OnInit} from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  public token = null;
  openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
     height: '285px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit(): void {
    // this.token = localStorage.getItem('access_token');
    // console.log(this.token);
  }

}
