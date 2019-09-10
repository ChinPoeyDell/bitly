import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from '../utility.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  lists
  urlForm = new FormGroup({
    originalUrl: new FormControl()
  })

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.utilityService.getLists().subscribe((list) => {
      this.lists = list
    })
  }

  onSubmit(){
    const formValues = this.urlForm.value
    this.utilityService.storeUrl(
      formValues.originalUrl
    ).subscribe(response => {
      console.log(response)
    })
  }
  
}
