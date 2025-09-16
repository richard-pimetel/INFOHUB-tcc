"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"

export function LoginPage({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    if (email && password) {
      onNavigate("dashboard")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9a01b] via-[#f8bd43] to-[#efb560] flex items-center justify-center p-4">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-white/15 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/25 rounded-full"></div>

      <button onClick={() => onNavigate("landing")} className="absolute top-6 left-6 text-white hover:text-gray-200">
        <ArrowLeft className="w-6 h-6" />
      </button>

      <div className="w-full max-w-md space-y-6 z-10">
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vDxONx1YyjLRG9WX83zwcZpN47VeeW.png"
              alt="Character with shopping bags"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-white text-2xl font-semibold">Bem vindo de volta!</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="E-mail ou CPF"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-4 rounded-full bg-white border-0 text-gray-800 placeholder-gray-500"
              required
            />
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-full bg-white border-0 text-gray-800 placeholder-gray-500"
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

          <div className="text-center">
            <button
              type="button"
              onClick={() => onNavigate("forgot-password-1")}
              className="text-white text-sm underline hover:text-white/80"
            >
              Esqueceu a senha?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#25992e] hover:bg-[#1e7a26] text-white font-semibold py-3 rounded-full text-lg"
          >
            Entrar
          </Button>

          <div className="text-center">
            <span className="text-white text-sm">Não tem uma conta? </span>
            <button
              type="button"
              onClick={() => onNavigate("register")}
              className="text-white text-sm underline font-semibold"
            >
              Cadastre-se aqui!
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
