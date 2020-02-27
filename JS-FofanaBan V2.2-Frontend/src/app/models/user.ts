import { Checking } from "./checking";
import { Saving } from "./saving";

export class User {
    id: number;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    checking: Checking;
    saving: Saving;
}


