"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"

export function RegisterPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("fisica")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    telefone: "",
    email: "",
    senha: "",
    confirmeSenha: "",
    nome: "",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#f9a01b]/20 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#f8bd43]/15 rounded-full"></div>

      <button onClick={() => onNavigate("landing")} className="absolute top-6 left-6 text-gray-600 hover:text-gray-800">
        <ArrowLeft className="w-6 h-6" />
      </button>

      <div className="w-full max-w-md space-y-6 z-10">
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7HXiGfdbxqJxetmufp8NV1Kyc0c0nN.png"
              alt="Character working on laptop"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex bg-gray-100 rounded-full p-1 mb-6">
          <button
            onClick={() => setActiveTab("fisica")}
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
              activeTab === "fisica" ? "bg-[#f9a01b] text-white" : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Pessoa Física
          </button>
          <button
            onClick={() => setActiveTab("juridica")}
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
              activeTab === "juridica" ? "bg-[#f9a01b] text-white" : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Pessoa Jurídica
          </button>
        </div>

        <div className="space-y-4">
          {activeTab === "fisica" ? (
            <>
              <Input
                type="text"
                placeholder="Nome Completo *"
                value={formData.nomeCompleto}
                onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500"
              />
              <Input
                type="text"
                placeholder="CPF *"
                value={formData.cpf}
                onChange={(e) => handleInputChange("cpf", e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500"
              />
              <Input
                type="tel"
                placeholder="Telefone *"
                value={formData.telefone}
                onChange={(e) => handleInputChange("telefone", e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500"
              />
              <Input
                type="email"
                placeholder="E-mail *"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500"
              />
            </>
          ) : (
            <>
              <Input
                type="text"
                placeholder="Nome *"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500"
              />
              <Input
                type="email"
                placeholder="E-mail *"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500"
              />
            </>
          )}

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Senha *"
              value={formData.senha}
              onChange={(e) => handleInputChange("senha", e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500"
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
              placeholder="Confirme a senha *"
              value={formData.confirmeSenha}
              onChange={(e) => handleInputChange("confirmeSenha", e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <Button className="w-full bg-[#25992e] hover:bg-[#1e7a26] text-white font-semibold py-3 rounded-lg text-lg mt-6">
            Entrar
          </Button>

          <div className="text-center">
            <span className="text-gray-600 text-sm">Já tem uma conta? </span>
            <button
              onClick={() => onNavigate("login")}
              className="text-[#f9a01b] text-sm font-semibold hover:underline"
            >
              Faça login aqui!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
