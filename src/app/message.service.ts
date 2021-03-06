import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string){
    this.messages.unshift(message)
  }
  constructor() { }

  clear(){
    this.messages = []
  }
}
