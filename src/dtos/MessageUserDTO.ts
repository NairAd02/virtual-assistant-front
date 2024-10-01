import { MessageDTO } from "./MessageDTO";

export class MessageUserDTO extends MessageDTO {
    constructor(text: string) {
        super(text)
    }
}