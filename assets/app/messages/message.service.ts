import {Message} from "./message.model";
import {Http, Response, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

var server = "http://localhost:3000/message";
@Injectable()
export class MessageService{
    private messages: Message[] = [];


    constructor(private http:Http){}

    addMessage(message: Message){
        this.messages.push(message);
        //console.log(message);
        const body = JSON.stringify(message);
        //console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(server, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
        //console.log(this.messages);
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
        //console.log(this.messages);
    }
}