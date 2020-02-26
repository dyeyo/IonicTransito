import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-form-penalty',
  templateUrl: './form-penalty.component.html',
  styleUrls: ['./form-penalty.component.scss'],
})
export class FormPenaltyComponent implements OnInit {

  form:FormGroup;
  penalty;
  list_persons:any;
  
  constructor(private dataService:DataService, private route:Router, private toastController: ToastController) { }

  get cause() { return this.form.get('cause'); }
  get entry_date() { return this.form.get('entry_date'); }
  get person_id() { return this.form.get('person_id'); }
  get state() { return this.form.get('state'); }

  ngOnInit() {
    this.getPersons();
    this.form=new FormGroup({
      cause: new FormControl('',Validators.required),
      entry_date: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      person_id: new FormControl('',Validators.required),
    });
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  savePenalty(){
    if (this.form.valid) {
      this.dataService.createPenalty(this.form.value).subscribe(res=>{
        this.form.reset();
        this.route.navigate(['/'])
        this.presentToast('Registro Creado')
      })
    }else{
      this.presentToast('Verifica los campos')
    }
  }

  getPersons(){
    this.dataService.getDataPersons().subscribe(res=>{
      this.list_persons=res
    })
  }

}
