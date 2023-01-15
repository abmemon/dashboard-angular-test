import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLogsComponent } from './user-logs/user-logs.component';
import { TransactionLogsComponent } from './transaction-logs/transaction-logs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UserLogsComponent,
    TransactionLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    RouterModule.forRoot([
      {path: 'transaction-log', component: TransactionLogsComponent},
      {path: 'user-log', component: UserLogsComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
