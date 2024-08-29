import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pacientes = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.loadPacientes(); // Carrega pacientes ao inicializar o componente
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Adicionar Paciente',
      message: "Insira os dados:",
      inputs: [
        { name: 'nome', placeholder: 'Nome' },
        { name: 'data_nasc', placeholder: 'Data de Nascimento' },
        { name: 'cpf', placeholder: 'CPF' },
        { name: 'telefone', placeholder: 'Telefone' },
        { name: 'endereco', placeholder: 'Endereço' },
        { name: 'foto', placeholder: 'URL da foto' },
      ],
      buttons: [
        { text: 'Cancel', handler: data => console.log('Cancel clicked') },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            let paciente = {
              nome: data.nome,
              data_nasc: data.data_nasc,
              telefone: data.telefone,
              endereco: data.endereco,
              cpf: data.cpf,
              foto: data.foto
            };
            this.pacientes.push(paciente); // Adiciona o novo paciente
            this.savePacientes(); // Salva a lista atualizada no Local Storage
          }
        }
      ]
    });
    prompt.present();
  }

  excluir(item) {
    console.log('Excluir', item);
    for (let i = 0; i < this.pacientes.length; i++) {
      const element = this.pacientes[i];
      if (element.nome === item.nome) {
        this.pacientes.splice(i, 1); // Remove o paciente do array
        this.savePacientes(); // Salva a lista atualizada no Local Storage
        break; // Sai do loop após encontrar e remover o paciente
      }
    }
  }

  showConfirm(item) {
    const confirm = this.alertCtrl.create({
      title: 'Excluir',
      message: 'Tem certeza que deseja excluir?',
      buttons: [
        { text: 'Não', handler: () => console.log('Disagree clicked') },
        { text: 'Sim', handler: () => {
            console.log('Agree clicked');
            this.excluir(item); // Chama o método de exclusão
          }
        }
      ]
    });
    confirm.present();
  }

  savePacientes() {
    localStorage.setItem('pacientes', JSON.stringify(this.pacientes));
  }

  loadPacientes() {
    const pacientes = localStorage.getItem('pacientes');
    if (pacientes) {
      this.pacientes = JSON.parse(pacientes);
    }
  }
}