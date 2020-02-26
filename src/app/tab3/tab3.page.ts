import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  penatly:any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getPenaltyDisabled();  
  }
  ionViewDidEnter(){
    this.getPenaltyDisabled();
  }
  
  getPenaltyDisabled(){
    this.dataService.getPenaltyDisabled().subscribe(res=>{
      console.log(res);
      this.penatly=res
    })
  }

  deletePenalty(id:number){
    this.dataService.deletePenaltys(id).subscribe(res=>{
      this.getPenaltyDisabled();
    })
  }
}
