import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  form:FormGroup;
  id: number;
  persons:any;
  constructor(private dataService: DataService, private route:Router, private toastController: ToastController) {}

  ngOnInit() {
    this.getPersons();
  }

  ionViewDidEnter(){
    console.log('entro');
    this.getPersons();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  getPersons(){
    this.dataService.getDataPersons().subscribe(res=>{
      console.log(res);
      this.persons=res
    })
  }

  deletePerson(id:number){
    this.dataService.deletePersons(id).subscribe(res=>{
      this.presentToast('Elimando Registro')
      this.getPersons()
      this.presentToast('Registro Eliminado')
    })
  }

}
