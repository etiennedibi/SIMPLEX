import { io } from 'socket.io-client';
import store from "../store";

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io('http://localhost:3333');
    this.socket.emit('my message', 'Hello there from Vue.');
    
    this.socket.on('askSaveMe', (data) => {
      console.log(data);
    })

    this.socket.on('allMessage', (data) => {
      store.state.AllConncersationMessage = data.chat_message
      // console.log(store.state.AllConncersationMessage);
    })
    

  }

  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
  }

 
  saveMe(id_user){
    if (this.socket) {
      this.socket.emit('saveMe', {id_user});
    }
  }
  
  getConversation(id_user, nom_room){
    if (this.socket) {
      this.socket.emit('getConversation', {id_user, nom_room});
    }
  }
  createRoom(id_user, id_invite, message){
    if (this.socket) {
      this.socket.emit('createRoom', {id_user, id_invite, message});
    }
  }
  sendMessage(id_user, message, nom_room){
    if (this.socket) {
      this.socket.emit('sendMessage', {id_user, message, nom_room});
    }
  }

  
}

export default new SocketioService();