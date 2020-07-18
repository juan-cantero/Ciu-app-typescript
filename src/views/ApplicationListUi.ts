import { CollectionComponentUI } from '../lib/CollectionComponentUI';
import { ApplicationList } from '../models/ApplicationList';
import { Application } from '../models/User';

export class ApplicationListUi extends CollectionComponentUI<
  ApplicationList,
  Application
> {
  mapEvents() {
    return {
      'click:.solicitud-tabla-checked': this.getCheckedApplication,
    };
  }

  getCheckedApplication = () => {
    let checkboxes = document.querySelectorAll('.solicitud-tabla-checked');
    let data = this.component.getState();

    for (let i = 0; i < checkboxes.length; i++)
      data[i].checked = (<HTMLInputElement>checkboxes[i]).checked;

    const solicitudCheckeada = data.filter((d) => d.checked);
    if (solicitudCheckeada.length > 1) {
      alert('Debe seleccionar solo una solicitud');
      return null;
    } else {
      console.log(solicitudCheckeada);
      return solicitudCheckeada;
    }
  };

  template(): string {
    let table = `<tr>
                    <th>Nombre</th>
                    <th>Avatar</th>
                    <th>Fecha</th>
                    <th>Activo</th>
                    <th>Seleccion</th>

                </tr>`;
    this.component.getState().forEach((application) => {
      table += `
                <tr>
                    <td>${application.fecha}</td>
                    <td>${application.descripcion}</td>
                    <td>${application.estado}</td>
                    <td>${application.checked}</td>
                    <td><input type="checkbox" class="solicitud-tabla-checked"></td>
                </tr>
            
            `;
    });

    return table;
  }
}
