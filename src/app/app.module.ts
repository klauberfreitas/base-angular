import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatProgressBarModule } from '@angular/material';

import { PessoaComponent } from 'src/app/content/pessoa/pessoa.component';
import { EnderecoComponent } from 'src/app/content/endereco/endereco.component';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { ToastrModule } from 'ngx-toastr';




export const notificationConfig = {
  timeOut: 5000,
  preventDuplicates: true,
  closeButton: true,
  progressBar: true,
}

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(notificationConfig)

  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,

  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
  bootstrap: [AppComponent]
})
export class AppModule { }
