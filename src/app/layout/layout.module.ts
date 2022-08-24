import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[LayoutComponent]
})
export class LayoutModule { }
