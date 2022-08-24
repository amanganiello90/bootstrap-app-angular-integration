import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TurnComponent } from './turn/turn.component';

@NgModule({
  declarations: [HomeComponent, TurnComponent],
  imports: [
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
