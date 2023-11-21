import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',

})
export class ProfileComponent {
  public welcome= 'Welcome!'
  public firstName= 'Surya';
  public lastName= 'Lakshmi P S';
  public title = 'Bio';
  public isDisabled = true;
  public myClass = 'red';
 public  clickCount =0;
 public text = 'Interest';
 public  value = 'For Editing';
 constructor() { }


  ngOnInit(): void {

  }
  onSave () {
    this.clickCount ++;
  }
 keyup (value: string) {
  this.text = value;
 }


}
