import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { ProductPageComponent } from './features/products/pages/product-page/product-page.component';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { ProductCardComponent } from './features/products/components/product-card/product-card.component';
import { ProductFormComponent } from './features/products/components/product-form/product-form.component';

@NgModule({
  declarations: [
    App,
    ProductPageComponent,
    ProductFormComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }