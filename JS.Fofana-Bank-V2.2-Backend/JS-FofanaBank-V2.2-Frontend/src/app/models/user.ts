import { Account } from "./account";

export class User {
    id: number;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    accounts: Account[];
}


