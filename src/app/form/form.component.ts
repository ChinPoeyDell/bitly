import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  lists
  newUrl = new FormControl()

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.utilityService.getLists().subscribe((list) => {
      this.lists = list
    })
  }

  onSubmitMessage(){}
  
}
