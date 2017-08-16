import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms'

function skuValidator(control: FormControl): {
  [s: string]: boolean } {
  return !control.value.match(/^1/) ? {'invalidSku': true} : null
}
@Component({
  selector: 'form-validator-demo',
  templateUrl: './form-validator-demo.component.html',
  styleUrls: ['./form-validator-demo.component.css']
})
export class FormValidatorDemoComponent implements OnInit {
  form: FormGroup
  sku: AbstractControl
  product: AbstractControl
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      sku: ['', Validators.compose([Validators.required, skuValidator])],
      product: ['', Validators.required]
    })

    this.sku = this.form.controls['sku']
    this.product = this.form.controls['product']
  }

  ngOnInit() {
  }

}
