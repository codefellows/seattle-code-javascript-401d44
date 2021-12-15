type User = {
  name: string,
  id: number,
  profileId: number,
}

type Message = {
  text: string;
  userId: number | null;
  recipientId: number | null;
}

// makes something accesible to other modules
export class Messenger {
  user: User; 
  recipient: User | null;
  
  constructor (user: User) {
    this.user = user;
  }

  send(text: string): Message {
    // creates a message;
    let message: Message = {
      text,
      userId: null,
      recipientId: null
    }

    return message;
  }
}
