import {Component} from "@angular/core";
import {Message} from "./message.model";

@Component({
    selector:'app-message-list',
    template:`
           <div class="col-md-8 col-md-offset-2">
               <app-message
                       [message]="message"
                       (editClicked)="message.content = $event"
                       *ngFor="let message of messages"></app-message>
           </div>             
    `
})
export class MessageListComponent{
    messages : Message[] = [
        new Message('some message', 'author'),
        new Message('2nd message', 'author2'),
        new Message('3rd message', 'author3')
    ];
}