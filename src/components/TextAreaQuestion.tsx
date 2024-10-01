'use client'

import { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MessageSquareIcon, SendIcon } from "lucide-react"

export default function TextAreaQuestion(props: {
  sendQuestion: (question: string) => void
}) {
  const [question, setQuestion] = useState('')


  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      props.sendQuestion(question)
      // se limpia el campo
      setQuestion('')
    }}>
      <div className="relative">
        <Textarea
          placeholder="Escribe tu pregunta"
          className="pl-10 pr-20 min-h-[100px]"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <MessageSquareIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        <Button
          className="absolute right-2 bottom-2"
          type='submit'
          size="sm"
          disabled={!question.trim()}
        >
          <SendIcon className="h-4 w-4 mr-2" />
          Enviar
        </Button>
      </div>
    </form>
  )
}