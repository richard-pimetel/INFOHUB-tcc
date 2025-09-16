"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export function ForgotPasswordStep1({ onNavigate, onNext }) {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setTimeout(() => {
        onNext({ email })
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9a01b] via-[#f8bd43] to-[#efb560] flex items-center justify-center p-4">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-white/15 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/25 rounded-full"></div>

      <button onClick={() => onNavigate("login")} className="absolute top-6 left-6 text-white hover:text-gray-200">
        <ArrowLeft className="w-6 h-6" />
      </button>

      <div className="w-full max-w-md bg-white rounded-3xl border-4 border-blue-400 p-8 shadow-2xl z-10">
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-4 flex flex-col items-center justify-center relative">
            <Image
              src="/shopping-bag.png"
              alt="Shopping Bag"
              width={120}
              height={120}
              className="object-contain mb-2"
            />
            <Image src="/green-oval-large.png" alt="Green oval" width={120} height={40} className="object-contain" />
          </div>
          <h1 className="text-black text-2xl font-semibold mb-2">Esqueceu sua senha?</h1>
          <p className="text-gray-600 text-sm">Digite seu e-mail para receber as instruções de recuperação</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-4 rounded-full bg-white border-0 text-gray-800 placeholder-gray-500"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#25992e] hover:bg-[#1e7a26] text-white font-semibold py-3 rounded-full text-lg"
          >
            Enviar instruções
          </Button>

          <div className="text-center">
            <button type="button" onClick={() => onNavigate("login")} className="text-black text-sm underline">
              Voltar para o login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
