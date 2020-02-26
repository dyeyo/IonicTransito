import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { DataService } from "src/app/services/data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-form-edit-persons",
  templateUrl: "./form-edit-persons.component.html",
  styleUrls: ["./form-edit-persons.component.scss"]
})
export class FormEditPersonsComponent implements OnInit {
  form: FormGroup;
  id: number;
  person;

  constructor(
    private dateService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      last_name: new FormControl("", Validators.required),
      document: new FormControl("", Validators.required),
      plate_car: new FormControl("", Validators.required),
      model_car: new FormControl("", Validators.required)
    });
    this.id = this.route.snapshot.params.id;
    this.editPersons(this.id);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  editPersons(id: number): void {
    this.dateService.getByIdPersons(id).subscribe((res: any) => {
      this.form.get("name").setValue(res.person.name);
      this.form.get("last_name").setValue(res.person.last_name);
      this.form.get("document").setValue(res.person.document);
      this.form.get("plate_car").setValue(res.person.plate_car);
      this.form.get("model_car").setValue(res.person.model_car);
    });
  }

  onUpdate() {
    if (this.form.valid) {
      this.dateService.editPersons(this.id, this.form.value).subscribe(r => {
      this.router.navigate(['/tabs/home'])
      this.presentToast('Persona Editada con exito!')
      })
    }else{
      this.presentToast('Verifica los campos')
    }
  }
}
