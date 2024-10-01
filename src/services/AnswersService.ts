import { MessageDTO } from "@/dtos/MessageDTO"
import { MessageSystemDTO } from "@/dtos/MessageSystemDTO"

export class AnswersService {
    private static answersService: AnswersService // se inyecta la instancia del servicio de auth
    private constructor() {

    }

    public static getInstancie(): AnswersService {
        if (!this.answersService) { this.answersService = new AnswersService() }

        return this.answersService
    }

    // Método para realizar una pregunta a la Api y obtener la respuesta
    public async askQuestion(question: string /* representa la pregunta realizada por el usuario */): Promise<MessageDTO | undefined> {
        let message: MessageDTO | undefined = undefined
        // se definen los parametros query
        const params = new URLSearchParams()
        params.append('pregunta', question)

        const url = 'http://127.0.0.1:8000' + '/pregunta?' + params
        const res: Response = await fetch(url, { // se realiza la peticion al end point
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })

        // Si no ocurre nigún error

        const json: MessageSystemDTO = await res.json() // se obtiene el json de la respuesta
        message = new MessageSystemDTO(json.text)

        return message
    }
}