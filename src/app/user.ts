import { stringify } from "@angular/compiler/src/util";

export class User {
    userId: number;
    userName: string;
    userEmail: string;
    userAddress: string;
    userMobile: string;
    userGender: string;
    
    constructor(
        userId: number,
        userName: string,
        userEmail: string,
        userAddress:string,
        userMobile: string,
        userGender:string ) {
        
    }
}