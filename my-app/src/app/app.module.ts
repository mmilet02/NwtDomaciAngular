import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProizvodListComponent } from './components/proizvod-list/proizvod-list.component';
import { AddFavoriteComponent } from './components/add-favorite/add-favorite.component';
import { DetaljiComponent } from './components/detalji/detalji.component';
import { KomentariComponent } from './components/komentari/komentari.component';
import { OcjenaComponent } from './components/ocjena/ocjena.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ProizvodListComponent,
    AddFavoriteComponent,
    DetaljiComponent,
    KomentariComponent,
    OcjenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
