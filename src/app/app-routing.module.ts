import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login/login.component';
import { RegisterComponent } from './Components/register/register/register.component';
import { SentenceComponent } from './Components/sentence/sentence/sentence.component';
import { SentencesComponent } from './Components/sentences/sentences/sentences.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sentence', component: SentenceComponent, canActivate: [AuthGuard] },
  { path: 'sentences', component: SentencesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
