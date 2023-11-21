import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContactComponent implements OnInit {
    contactId!: string; 
  
    constructor(private route: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.contactId = this.route.snapshot.paramMap.get('id')!;
    }
  }
