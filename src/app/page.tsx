import Chatbot from "@/components/Chatbot";


export default function Home() {
  return (
    <div className="max-h-screen flex flex-col ">
      <h2 className="text-2xl font-bold mb-4">Asistente Virtual</h2>
      <Chatbot />
    </div>
  )
}
