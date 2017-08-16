import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SkuComponentComponent } from './sku-component/sku-component.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormValidatorDemoComponent } from './form-validator-demo/form-validator-demo.component';
import { FormEventEmitterComponent } from './form-event-emitter/form-event-emitter.component';

@NgModule({
  declarations: [
    AppComponent,
    SkuComponentComponent,
    FormBuilderComponent,
    FormValidatorDemoComponent,
    FormEventEmitterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
