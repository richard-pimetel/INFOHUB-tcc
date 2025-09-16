"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail } from "lucide-react"
import Image from "next/image"

export function ForgotPasswordStep2({ onNavigate, onNext, email }) {
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  const handleResend = () => {
    setCountdown(60)
    setCanResend(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9a01b] via-[#f8bd43] to-[#efb560] flex items-center justify-center p-4">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-white/15 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/25 rounded-full"></div>

      <button
        onClick={() => onNavigate("forgot-password-1")}
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
          <h1 className="text-black text-2xl font-semibold mb-2">E-mail enviado!</h1>
          <p className="text-gray-600 text-sm mb-4">Enviamos as instruções de recuperação para:</p>
          <p className="text-black font-semibold">{email}</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 text-center mb-6">
          <Mail className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-600 text-sm mb-4">
            Como não há API conectada, você pode prosseguir diretamente para inserir o código de verificação.
          </p>

          {canResend ? (
            <Button
              onClick={handleResend}
              variant="outline"
              className="bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300"
            >
              Reenviar e-mail
            </Button>
          ) : (
            <p className="text-gray-500 text-sm">Reenviar em {countdown}s</p>
          )}
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => onNext()}
            className="w-full bg-[#25992e] hover:bg-[#1e7a26] text-white font-semibold py-3 rounded-full text-lg"
          >
            Já recebi o código
          </Button>

          <div className="text-center">
            <button onClick={() => onNavigate("login")} className="text-black text-sm underline">
              Voltar para o login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
