import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  penatly:any;
  constructor(private dataService: DataService, private toastController: ToastController) {}

  ngOnInit() {
    this.getPenalty();  
  }

  ionViewDidEnter(){
    console.log('entro');
    this.getPenalty();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    this.getPenalty();
    toast.present();
  }

  getPenalty(){
     this.dataService.getDataPenalty().subscribe(res=>{
      console.log(res);
      this.penatly=res
    })
  }

  deletePenalty(id:number){
    this.dataService.deletePenaltys(id).subscribe(res=>{
      this.presentToast('Elimando Registro')
      this.getPenalty();
      this.presentToast('Registro Eliminado')

    })
  }

}
