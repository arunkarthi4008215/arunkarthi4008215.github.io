import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToMaster(val):void{
    switch(val){
      case 0:
        this.router.navigateByUrl('/app/branch');
        break;
      case 1:
        this.router.navigateByUrl('/app/company');
        break;
      case 2:
        this.router.navigateByUrl('/app/designation');
        break;
      case 3:
        this.router.navigateByUrl('/app/industry');
        break;
      case 4:
        this.router.navigateByUrl('/app/location');
        break;
      case 5:
        
        this.router.navigateByUrl('/app/role');
        break;
    }
  }
}
