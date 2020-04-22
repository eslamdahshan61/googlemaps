import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";

import { AgmCoreModule } from "@agm/core";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCEJskzc4cbmx3jav4Oz_TcRNe1rfQ-rnc",
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
