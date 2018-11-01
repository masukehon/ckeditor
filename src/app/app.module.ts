import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { HandleBrowseComponent } from './handle-browse/handle-browse.component';
import { HandleUploadComponent } from './handle-upload/handle-upload.component';

const routesConfig: Routes = [
  { path: 'browser/img', component: HandleBrowseComponent },
  { path: 'upload/img', component: HandleUploadComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CkeditorComponent,
    HandleBrowseComponent,
    HandleUploadComponent
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    FormsModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
