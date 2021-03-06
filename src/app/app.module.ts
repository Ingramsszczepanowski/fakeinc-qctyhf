import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { HomeComponent } from './components/home/home.component';

import { SearchFilterPipe } from './Pipes/search-filter.pipe';
import { QuickstartComponent } from './components/quickstart/quickstart.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,NgbModule,PdfViewerModule],
  declarations: [ AppComponent, ChildComponent, ParentComponent, HomeComponent, SearchFilterPipe, QuickstartComponent],
  providers :   [ AppComponent, ChildComponent, ParentComponent, HomeComponent, SearchFilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
