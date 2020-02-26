import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-form-persons',
  templateUrl: './form-persons.component.html',
  styleUrls: ['./form-persons.component.scss'],
})
export class FormPersonsComponent implements OnInit {

  form:FormGroup;
  persons;
  id: number;

  constructor(private dataService:DataService, 
              private route:Router, 
              private toastController: ToastController) { }

  get name() { return this.form.get('name'); }
  get last_name() { return this.form.get('last_name'); }
  get document() { return this.form.get('document'); }
  get plate_car() { return this.form.get('plate_car'); }
  get model_car() { return this.form.get('model_car'); }

  ngOnInit() {
    this.form=new FormGroup({
      name: new FormControl('',Validators.required),
      last_name: new FormControl('',Validators.required),
      document: new FormControl('',Validators.required),
      plate_car: new FormControl('',Validators.required),
      model_car: new FormControl('',Validators.required),
    });
  }


  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  savePerson(){
    if (this.form.valid) {
      this.dataService.createPersons(this.form.value).subscribe(res=>{
        this.persons=res;
        this.form.reset();
        this.route.navigate(['/tabs/home'])
        this.presentToast('Persona Creada con Exito!')
      })
    }else{
      this.presentToast('Verifica los campos')
    }
  }

}
