import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, AbstractControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'form-event-emitter',
  templateUrl: './form-event-emitter.component.html',
  styleUrls: ['./form-event-emitter.component.css']
})
export class FormEventEmitterComponent implements OnInit {
  form: FormGroup
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      sku: ['', Validators.compose([Validators.required])]
    })
    this.form.controls['sku'].valueChanges.subscribe((value: string) => {
      console.log("New Value", value)
    })
    this.form.valueChanges.subscribe((form: any) => {
      console.log("New form", form)
    })
  }    
  ngOnInit() {
  }

}
