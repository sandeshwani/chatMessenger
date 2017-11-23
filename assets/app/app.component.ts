import { Component } from '@angular/core';
import {Message} from "./messages/message.model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messages : Message[] = [
                            new Message('some message', 'author'),
                            new Message('2nd message', 'author2'),
                            new Message('3rd message', 'author3')
                            ];
}