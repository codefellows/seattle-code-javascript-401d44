// import { Messenger } from './build';
const { Messenger, getInput } = require('./build');

let user = {
  name: 'Jacob',
  id: 1,
  profileId: 1,
};

const inputInterface = getInput();
let messenger = new Messenger(user);

inputInterface.question('Send a message: ', response => {
  console.log(messenger.send(response));

  inputInterface.close();
});
