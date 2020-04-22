import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { AppComponent } from './app.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ViewEncapsulation} from '@angular/core';
import { BotonesContactoComponent } from './botones-contacto/botones-contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SoulComponent } from './soul/soul.component';
import { MarcoMoveComponent } from './marco-move/marco-move.component';
import { AppcollapserComponent } from './appcollapser/appcollapser.component';
import { CollapserComponent } from './collapser/collapser.component';
@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    BotonesContactoComponent,
    SoulComponent,
    MarcoMoveComponent,
    AppcollapserComponent,
    CollapserComponent


  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    BrowserAnimationsModule
  ],
  providers: [],
bootstrap: [AppComponent]

})
export class AppModule { }
