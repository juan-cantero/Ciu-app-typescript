import { UserList } from './models/UserList';
import { UserListUi } from './views/UserListUi';
import { User } from './models/User';
import { ApplicationList } from './models/ApplicationList';
import { ApplicationListUi } from './views/ApplicationListUi';
const url = 'https://my-json-server.typicode.com/juan-cantero/demo/users';

async function init() {
  const userList = await UserList.buildUserList();
  const user = await User.buildUser(12345678);
  const root = document.getElementById('root')!;
  //const userListUi = new UserListUi(userList, root);
  //userListUi.render();

  const applications = ApplicationList.BuildApplicationList(user);
  const applicatioListUi = new ApplicationListUi(applications, root);
  applicatioListUi.render();
  console.log(applicatioListUi.getCheckedApplication());
}

init();
