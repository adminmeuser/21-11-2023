// import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-student',
//   templateUrl: './student.component.html',
//   styleUrl: './student.component.scss'
// })
// export class StudentComponent implements OnChanges{
//   @Input() dataValue!:boolean
//   public studentname:String ='';

//   constructor(public activaterouter:ActivatedRoute){
//     console.log("activatedrouter",activaterouter)
//     activaterouter.params.subscribe((param:any)=>{
//       console.log(param);
//       this.studentname = param.studentname;
//     })
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     console.log("changes", changes);
//   }
// }
