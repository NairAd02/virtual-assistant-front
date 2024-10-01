'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from './ui/textarea'
import { MessageSquareIcon, SendIcon } from 'lucide-react'
import TextAreaQuestion from './TextAreaQuestion'
import { MessageDTO } from '@/dtos/MessageDTO'
import { AnswersService } from '@/services/AnswersService'
import { MessageUserDTO } from '@/dtos/MessageUserDTO'
import { ModalSearchBook } from './ModalSearchBook'
import LoadingChat from './LoadingChat'



const predefinedQuestions = [
  "¿Cuáles son sus horarios de atención?",
  "¿Cómo puedo contactar al soporte?",
  "¿Cuáles son sus políticas de devolución?",
  "¿Tienen alguna oferta especial actualmente?"
]

// se inyecta el Servicio de las Answers
const answersService: AnswersService = AnswersService.getInstancie()


export default function Chatbot() {
  // representa la completamente la conversación del usuario con el chatBot
  const [messages, setMessages] = useState<MessageDTO[]>([
    { text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?" }
  ])
  const [loading, setLoading] = useState(false)

  // se crea un effecto para cada vez que se se inserte un mensaje el scroll viaje hacia este nuevo mensaje
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  const bottomRef = useRef<HTMLDivElement>(null)
  const handleQuestionClick = (question: string) => {
    setMessages(prev => [...prev, new MessageUserDTO(question)])
    setTimeout(() => {
      askQuestion(question)  // se realiza la petición de la pregunta a la Api
    }, 500)
  }

  // Funciones Fecth
  // Función para solicitar la pregunta
  async function askQuestion(question: string /* se recibe la pregunta */) {
    try {
      // se indica un estado de carga en lo que el servidor responde
      setLoading(true)
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      // se realiza la pregunta al servidor para obtener la respuesta
      const message = await answersService.askQuestion(question)
      // una vez terminó la carga se indica el estado de carga como false
      setLoading(false)
      // si fue el menssage obtendio se encuentra definido
      if (message) {
        // luego se añade esa respuesta como mensaje a la lista de mensajes y ya con eso sucede un renderizado
        setMessages(prev => [...prev, message])
      }
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Asistente Virtual</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[470px] w-full pr-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message instanceof MessageUserDTO ? 'text-right' : 'text-left'
                }`}
            >
              <span
                className={`inline-block p-2 rounded-lg ${message instanceof MessageUserDTO
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground'
                  }`}
                style={{ whiteSpace: 'pre-line' }} // Aquí agregas la propiedad CSS
              >
                {message.text}
              </span>
            </div>
          ))}
          {loading && <LoadingChat />}
          <div ref={bottomRef} />
        </ScrollArea>
      </CardContent>
      <div className='m-4'>
        <TextAreaQuestion sendQuestion={handleQuestionClick} />
      </div>
      <CardFooter className="flex flex-wrap justify-center gap-2">

        {predefinedQuestions.map((question, index) => (
          <Button
            key={index}
            variant="outline"
            onClick={() => handleQuestionClick(question)}
          >
            {question}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}