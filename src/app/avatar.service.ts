import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class AvatarService {

  constructor() { }
     generate(email: string){
         if(email){
        return "https://2.gravatar.com/avatar/" + Md5.hashStr(email);
         } else{
             return "https://2.gravatar.com/avatar/blank";
         }
    }

}
