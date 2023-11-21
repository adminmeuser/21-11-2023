import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PROJECT';

  constructor(public router:Router){

  }

  // studentclick(student:string){
  //   this.router.navigate(['/student',student])
  // }
  }
  // inputData: string | undefined;
  // newInputData: string | undefined;

  // logInputData() {
  //   console.log('Previous Input Data:', this.inputData);
  //   console.log('Current Input Data:', this.newInputData);
  //   this.inputData = this.newInputData;
  // }

  // submitNewValue() {
  //   console.log('New Value Submitted:', this.newInputData);
  //   this.inputData = this.newInputData;
  // }

 

 

