import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent {
  viagemForm: FormGroup;

  destinos = ['Paris', 'Nova York', 'Tóquio', 'Rio de Janeiro'];

  constructor(private fb: FormBuilder) {
    this.viagemForm = this.fb.group({
      destino: ['', Validators.required],
      dataIda: ['', Validators.required],
      dataVolta: ['', Validators.required],
      numeroPassageiros: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      emailContato: ['', [Validators.required, Validators.email]]
    });
  }

  // Getter atualizado para evitar erros de indexação
  get formControls() {
    return this.viagemForm.controls as {
      [key: string]: any;
      destino: any;
      dataIda: any;
      dataVolta: any;
      numeroPassageiros: any;
      emailContato: any;
    };
  }

  onSubmit() {
    if (this.viagemForm.valid) {
      console.log(this.viagemForm.value);
    }
  }
}
