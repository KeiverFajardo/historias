import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormContactPageRoutingModule } from './form-contact-routing.module';

import { FormContactPage } from './form-contact.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormContactPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormContactPage]
})
export class FormContactPageModule {}
