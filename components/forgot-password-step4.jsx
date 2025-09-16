"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Eye, EyeOff, CheckCircle } from "lucide-react"
import Image from "next/image"

export function ForgotPasswordStep4({ onNavigate, onComplete }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password && password === confirmPassword && password.length >= 6) {
      setIsSuccess(true)
      setTimeout(() => {
        onComplete()
      }, 2000)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#25992e] via-[#22c55e] to-[#16a34a] flex items-center justify-center p-4">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white/15 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/25 rounded-full"></div>

        <div className="w-full max-w-md bg-white rounded-3xl border-4 border-green-400 p-8 shadow-2xl z-10 text-center">
          <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-black text-2xl font-semibold mb-2">Senha alterada!</h1>
          <p className="text-gray-600 text-sm">Sua senha foi alterada com sucesso. Redirecionando para o login...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9a01b] via-[#f8bd43] to-[#efb560] flex items-center justify-center p-4">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-white/15 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/25 rounded-full"></div>

      <button
        onClick={() => onNavigate("forgot-password-3")}
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
          <h1 className="text-black text-2xl font-semibold mb-2">Nova senha</h1>
          <p className="text-gray-600 text-sm">Crie uma nova senha segura para sua conta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Nova senha (mín. 6 caracteres)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-full bg-white border-2 border-gray-200 text-gray-800 placeholder-gray-500"
              minLength={6}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirme a nova senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-full bg-white border-2 border-gray-200 text-gray-800 placeholder-gray-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {password && confirmPassword && password !== confirmPassword && (
            <p className="text-red-500 text-sm text-center">As senhas não coincidem</p>
          )}

          <Button
            type="submit"
            className="w-full bg-[#25992e] hover:bg-[#1e7a26] text-white font-semibold py-3 rounded-full text-lg"
            disabled={!password || password !== confirmPassword || password.length < 6}
          >
            Alterar senha
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
