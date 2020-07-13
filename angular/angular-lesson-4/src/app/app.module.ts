import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ResentlyComponent } from './resently/resently.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { GameComponent } from './game/game.component';
import { SettingsComponent } from './settings/settings.component';
import { MatSelectModule} from '@angular/material/select';
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { TimerPipe } from './timer.pipe';


const routes: Routes = [
  {path: '', component: ResentlyComponent},
  {path: 'game', component: GameComponent},
  {path: 'settings', component: SettingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ResentlyComponent,
    GameComponent,
    SettingsComponent,
    TimerPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
