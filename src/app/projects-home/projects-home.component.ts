import { Component, OnInit } from '@angular/core';

@Component({ 
 standalone: true, 
 imports: [], 
 selector: 'app-projects-home', 
 templateUrl: './projects-home.component.html', 
 styleUrls: ['./projects-home.component.css']
})

export class ProjectsHomeComponent implements OnInit { 
  firstName: string ="Drew"; 
  lastName: string = "Cumpton"; 
  phoneNumber: string = "(801) 928-9223";

  setProperty(event: Event){ 
   let target = event.target as HTMLInputElement 
   let property: string = target.id 
   switch(property){ 
     case "firstNameInput": 
       this.firstName = target.value; 
       break; 
     case "lastNameInput": 
       this.lastName = target.value; 
       break; 
     case "phoneNumberInput": 
       this.phoneNumber = target.value; 
       break; 
     default: 
        console.warn("No matching ID found!") 
       break; 
    } 
  }

  constructor() { }

  ngOnInit(): void {  }
}