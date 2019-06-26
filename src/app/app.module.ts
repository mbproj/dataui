import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule} from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { CityService } from 'src/services/city.service';
import { FileSelectDirective } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    FileSelectDirective,
    AppRoutingModule.components,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    AppRoutingModule
    
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }