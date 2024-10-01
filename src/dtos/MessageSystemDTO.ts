import { MessageDTO } from "./MessageDTO";

export class MessageSystemDTO extends MessageDTO {
    constructor(text: string) {
        super(text)
    }
}