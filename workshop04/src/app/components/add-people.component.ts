import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { StarWarsService } from '../starwars.service';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  constructor(private router: Router, private swStSvc : StarWarsDatabaseService, private swSvc: StarWarsService) { }

  ngOnInit() {
  }

  navigateBack(){}
  
  save(form: NgForm){
    console.log('people id: ', form.value.peopleId);
    this.swStSvc.find(form.value.peopleId)
    .then(
      ()=>{
        this.router.navigate(['/']);
        throw false;
      },
      this.swSvc.searchPeople.bind(this.swSvc)
    )
    .then(id=>{
      console.log('id: ',id)
      this.router.navigate(['/'],{
        queryParams: {
          message: `Saved${id}`
        }
      });

    })
    .catch(err=>{
      if(err){
        return;
      }
    });
    form.resetForm();
  }
}
