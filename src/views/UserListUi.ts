import { CollectionComponentUI } from '../lib/CollectionComponentUI';
import { UserProps, UserList } from '../models/UserList';

export class UserListUi extends CollectionComponentUI<UserList, UserProps> {
  mapEvents() {
    return {
      'click:.usuario-tabla-checked': this.getCheckedApplication,
    };
  }

  getCheckedApplication = () => {
    let checkboxes = document.querySelectorAll('.usuario-tabla-checked');
    let data = this.component.getState();

    for (let i = 0; i < checkboxes.length; i++)
      data[i].checked = (<HTMLInputElement>checkboxes[i]).checked;

    const checkedApplications = data.filter((d) => d.checked);
    if (checkedApplications.length > 1) {
      alert('Debe seleccionar solo un usuario');
      return null;
    } else {
      return checkedApplications;
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
    this.component.getState().forEach((usuario) => {
      table += `
                <tr>
                    <td>${usuario.nombre}</td>
                    <td><img src=${usuario.avatar} alt="avatar" style="width:100px;height:100px"/></td>
                    <td>${usuario.fecha}</td>
                    <td>${usuario.activo}</td>
                    <td><input type="checkbox" class="usuario-tabla-checked"></td>
                </tr>
            
            `;
    });

    return table;
  }
}
