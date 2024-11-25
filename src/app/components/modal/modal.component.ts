import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  public openModal:boolean = false;
  public onForm !:FormGroup  ;

  constructor(private _fb:FormBuilder){}

  ngOnInit(): void {
    this.onForm = this._fb.group({
      invalidCheck : new FormControl(null,[Validators.required])
    })
  }

  get f(){
    return this.onForm.controls
  }

  onNext(){
    console.log(this.onForm.value);
    
  }


  OnOpenModal(){
    this.openModal = !this.openModal;
  }

  closeModal() {
    this.openModal = !this.openModal;
  
  }

}
