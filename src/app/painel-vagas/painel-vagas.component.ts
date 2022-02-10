import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';
import {ActivatedRoute} from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {
  
  public vaga: Vaga = new Vaga(uuidv4(),"","","",0, "");
  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    if (id != "NEW"){
      this.listarVagas(id)
    }

  }

  listarVagas(id: string){
    this._vagasService.getVagas()
      .subscribe(
        retornaVaga => {
          console.log(JSON.stringify(retornaVaga));
          retornaVaga.forEach(item => {
            if (item.id == id){
              this.vaga = new Vaga(
                item.id,
                item.nome,
                item.foto,
                item.descricao,
                item.salario,
                item.expira)
            }
          });
        }
      )
  }

  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0,"")},
      err => {console.log("erro ao cadastrar")}
    );

    window.location.href = "/mural";

  }

  atualizar(id: number){
    this._vagasService.atualizarVaga(id,this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0, "")},
      err => {console.log("erro ao atualizar")}
    );

    window.location.href = "/mural";

  }

  excluir(id: number){
    this._vagasService.removerVaga(id).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0,"")},
      err => {console.log("erro ao Excluir")}
    );

    window.location.href = "/mural";

  }
  

}
