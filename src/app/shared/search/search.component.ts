import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public SearchForm: FormGroup;
  @Output()
  cityEmitter = new EventEmitter();

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.SearchForm = this._fb.group({
      city: ['']
    });
  }

  searchForCity(payload){
    console.log(payload);
    this.cityEmitter.emit(payload);
  }

}
