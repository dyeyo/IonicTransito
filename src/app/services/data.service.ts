import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Penalty } from '../interfaces/penalty';
import { Persons } from '../interfaces/persons';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }


  getDataPersonsSelect(){
    return this.http.get(environment.url + 'getPersons');
  }

  getDataPenalty(){
    return this.http.get(environment.url + 'penalty');
  }

  createPenalty(penalty: Penalty){
    return this.http.post(environment.url + 'penalty/create', penalty);
  }

  getById(id:number){
		return this.http.get(environment.url + `penalty/edit/${id}`);
  }

  getPenaltyDisabled(){
		return this.http.get(environment.url + 'penalty/disabled');
  }
  
  editPenalty(id: number, penalty: Penalty){
		return this.http.put(environment.url + `penalty/${id}`, penalty);
  }
   
	deletePenaltys(id){
		return this.http.delete(environment.url + 'penalty/' + id);
  }
  
  getDataPersons(){
    return this.http.get(environment.url + 'persons');
  }

  createPersons(persons: Persons){
    return this.http.post(environment.url + 'persons/create', persons);
  }

  getByIdPersons(id:number){
		return this.http.get(environment.url + `persons/edit/${id}`);
  }
  
  editPersons(id: number, persons: Persons){
		return this.http.put(environment.url + `persons/${id}`, persons);
  }
   
  deletePersons(id:number){
		return this.http.delete(environment.url + `persons/${id}`);
  }
}
