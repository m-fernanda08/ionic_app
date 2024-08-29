import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  agenda = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.loadAgenda(); // Carrega a agenda ao inicializar o componente
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Agendar',
      message: "Insira os dados para o agendamento:",
      inputs: [
        { name: 'nome', placeholder: 'Nome' },
        { name: 'idade', placeholder: 'Idade' },
        { name: 'triagem', placeholder: 'Triagem' },
        { name: 'telefone', placeholder: 'Telefone' },
        { name: 'dataHora', placeholder: 'Data e Horário', type: 'datetime-local' }
      ],
      buttons: [
        { text: 'Cancel', handler: data => console.log('Cancel clicked') },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            let paciente = {
              nome: data.nome,
              idade: data.idade,
              telefone: data.telefone,
              triagem: data.triagem,
              dataHora: data.dataHora // Adiciona data e horário ao objeto paciente
            };
            this.agenda.push(paciente); // Adiciona o novo paciente
            this.saveAgenda(); // Salva a lista atualizada no Local Storage
          }
        }
      ]
    });
    prompt.present();
  }

  excluir(item) {
    console.log('Excluir', item);
    for (let i = 0; i < this.agenda.length; i++) {
      const element = this.agenda[i];
      if (element.nome === item.nome) {
        this.agenda.splice(i, 1); // Remove o paciente do array
        this.saveAgenda(); // Salva a lista atualizada no Local Storage
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

  saveAgenda() {
    localStorage.setItem('agenda', JSON.stringify(this.agenda));
  }

  loadAgenda() {
    const agenda = localStorage.getItem('agenda');
    if (agenda) {
      this.agenda = JSON.parse(agenda);
    }
  }
}
