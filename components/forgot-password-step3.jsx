"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export function ForgotPasswordStep3({ onNavigate, onNext, email }) {
  const [code, setCode] = useState(["", "", "", "", "", ""])

  const handleCodeChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        if (nextInput) nextInput.focus()
      }

      const fullCode = newCode.join("")
      if (fullCode.length === 6 && fullCode === "123456") {
        setTimeout(() => {
          onNext({ code: fullCode })
        }, 500) // Small delay for better UX
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      if (prevInput) prevInput.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const fullCode = code.join("")
    if (fullCode.length === 6) {
      onNext({ code: fullCode })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9a01b] via-[#f8bd43] to-[#efb560] flex items-center justify-center p-4">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-white/15 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/25 rounded-full"></div>

      <button
        onClick={() => onNavigate("forgot-password-2")}
        className="absolute top-6 left-6 text-white hover:text-gray-200"
      >
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
          <h1 className="text-black text-2xl font-semibold mb-2">Digite o código</h1>
          <p className="text-gray-600 text-sm">Digite o código "123456" para avançar automaticamente</p>
          <p className="text-gray-500 text-xs mt-1">Enviado para: {email}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-3">
            {code.map((digit, index) => (
              <Input
                key={index}
                id={`code-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value.replace(/\D/g, ""))}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-bold bg-white border-2 border-gray-200 rounded-lg text-gray-800"
              />
            ))}
          </div>

          <Button
            type="submit"
            className="w-full bg-[#25992e] hover:bg-[#1e7a26] text-white font-semibold py-3 rounded-full text-lg"
            disabled={code.join("").length !== 6}
          >
            Verificar código
          </Button>

          <div className="text-center space-y-2">
            <button
              type="button"
              onClick={() => onNavigate("forgot-password-2")}
              className="text-black text-sm underline block mx-auto"
            >
              Reenviar código
            </button>
            <button type="button" onClick={() => onNavigate("login")} className="text-black text-sm underline">
              Voltar para o login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
