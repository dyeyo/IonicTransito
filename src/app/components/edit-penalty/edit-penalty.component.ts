import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-edit-penalty",
  templateUrl: "./edit-penalty.component.html",
  styleUrls: ["./edit-penalty.component.scss"]
})
export class EditPenaltyComponent implements OnInit {
  form: FormGroup;
  id: number;
  list_persons;
  penalty;

  constructor(private dateService: DataService,
    private route: ActivatedRoute,
    private router: Router, 
    private toastController: ToastController) {}

  ngOnInit() {
    this.form = new FormGroup({
      cause: new FormControl("", Validators.required),
      entry_date: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      person_id: new FormControl("", Validators.required)
    });
    this.getPersons();
    this.id = this.route.snapshot.params.id;
    this.editPenalty(this.id);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  
  editPenalty(id: number): void {
    this.dateService.getById(id).subscribe((res: any) => {
      this.form.get("cause").setValue(res.penalty.cause);
      this.form.get("entry_date").setValue(res.penalty.entry_date);
      this.form.get("state").setValue(res.penalty.state);
      this.form.get("person_id").setValue(res.penalty.person_id);
    });
  }
  onUpdate() {
    this.dateService.editPenalty(this.id, this.form.value).subscribe(res => {
      this.penalty=res;
      this.router.navigate(['/'])
      this.presentToast('Registro Editado con exito')
    })  
  }

  getPersons() {
    this.dateService.getDataPersons().subscribe(res => {
      this.list_persons = res;
    });
  }
}
