import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';
import { SobreComponent } from '../sobre/sobre.component';

const rotas: Routes = [
  {path: 'mural', component: MuralVagasComponent},
  {path: 'painel/:id', component: PainelVagasComponent},
  {path: 'sobre', component: SobreComponent},
  {path: '', redirectTo: '/mural', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
