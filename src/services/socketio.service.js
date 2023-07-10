import { io } from 'socket.io-client';
import store from "../store";

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io('http://localhost:3333');
    console.log(this.socket.connected)
    const id_user = localStorage.getItem("user-id")
    if (id_user){
      this.saveMe(id_user)
    }
    this.socket.on('askSaveMe', (data) => {
      console.log(data);
    })

    
    this.socket.on('allConversation', (data) => {
      store.state.AllNotification = data.chat_notifs
      // console.log(store.state.AllNotification, "jjjjjj");
    })
  
    this.socket.on('allMessages', (data) => {
      store.state.AllConncersationMessage = data.chat_message
      // console.log(store.state.AllConncersationMessage);
    })

    this.socket.on('receiveMessage', (data) => {
      store.state.AllConncersationMessage = data.chat_message
      this.getConversation(localStorage.getItem("user-id"))
      console.log("RECEIVE-MESSAGE", store.state.AllConncersationMessage);
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

  
  
  getConversation(id_user){
    console.log("huheuheuehue");
    console.log("THYUHU",this.socket);
    console.log(this.socket.connected)
    if (!this.socket.connected) {
      console.log("socket is undefiened")
      this.setupSocketConnection();
    }
    console.log("socket emit getConversation")
    this.socket.emit('getConversation', {id_user});
    
  }

  getMessages(id_user, nom_room){
    if (this.socket) {
      this.socket.emit('getMessages', {id_user, nom_room});
    }
  }

  sendFirstMessage(id_user, id_invite, message){
    if (this.socket) {
      this.socket.emit('sendFirstMessage', {id_user, id_invite, message});
    }
  }
  sendMessage(id_user, message, nom_room){
    if (this.socket) {
      this.socket.emit('sendMessage', {id_user, message, nom_room});
    }
  }

  


  

  
}

export default new SocketioService();