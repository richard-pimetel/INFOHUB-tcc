"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AppNavigation } from "./app-navigation"
import { Search, Bell, MapPin, Star } from "lucide-react"

export function Dashboard({ onNavigate }) {
  const [currentPage, setCurrentPage] = useState("home")

  const featuredProducts = [
    { id: 1, name: "Frutas Frescas", price: "R$ 15,90", image: "/fresh-fruits.png", rating: 4.8 },
    { id: 2, name: "Verduras Orgânicas", price: "R$ 12,50", image: "/organic-vegetables-display.png", rating: 4.9 },
    { id: 3, name: "Laticínios", price: "R$ 8,90", image: "/assorted-dairy.png", rating: 4.7 },
    { id: 4, name: "Carnes Premium", price: "R$ 25,90", image: "/premium-meat.jpg", rating: 4.6 },
  ]

  const categories = [
    { name: "Frutas", icon: "🍎", color: "bg-red-100" },
    { name: "Verduras", icon: "🥬", color: "bg-green-100" },
    { name: "Carnes", icon: "🥩", color: "bg-red-200" },
    { name: "Laticínios", icon: "🥛", color: "bg-blue-100" },
    { name: "Padaria", icon: "🍞", color: "bg-yellow-100" },
    { name: "Bebidas", icon: "🥤", color: "bg-purple-100" },
  ]

  const renderHomePage = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f9a01b] to-[#f8bd43] px-4 py-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Olá, João!</h1>
            <div className="flex items-center text-sm opacity-90">
              <MapPin className="w-4 h-4 mr-1" />
              <span>São Paulo, SP</span>
            </div>
          </div>
          <div className="relative">
            <Bell className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full pl-10 pr-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Categorias</h2>
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div key={index} className={`${category.color} rounded-2xl p-4 text-center`}>
              <div className="text-3xl mb-2">{category.icon}</div>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Produtos em Destaque</h2>
        <div className="grid grid-cols-2 gap-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-24 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-[#f9a01b] font-bold">{product.price}</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                </div>
              </div>
              <Button className="w-full mt-3 bg-[#25992e] hover:bg-[#1e7a26] text-white text-sm py-2 rounded-lg">
                Adicionar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return renderHomePage()
      case "profile":
        return (
          <div className="min-h-screen bg-gray-50 pb-20 px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Meu Perfil</h1>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#f9a01b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">J</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">João Silva</h2>
                <p className="text-gray-600">joao.silva@email.com</p>
              </div>
              <Button onClick={() => onNavigate("landing")} className="w-full bg-red-500 hover:bg-red-600 text-white">
                Sair da conta
              </Button>
            </div>
          </div>
        )
      case "cart":
        return (
          <div className="min-h-screen bg-gray-50 pb-20 px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Meu Carrinho</h1>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🛒</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Carrinho vazio</h2>
              <p className="text-gray-600 mb-4">Adicione produtos para começar suas compras</p>
              <Button onClick={() => setCurrentPage("home")} className="bg-[#25992e] hover:bg-[#1e7a26] text-white">
                Continuar comprando
              </Button>
            </div>
          </div>
        )
      case "settings":
        return (
          <div className="min-h-screen bg-gray-50 pb-20 px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Configurações</h1>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Notificações</h3>
                <p className="text-gray-600 text-sm">Gerencie suas preferências de notificação</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Endereços</h3>
                <p className="text-gray-600 text-sm">Gerencie seus endereços de entrega</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Pagamento</h3>
                <p className="text-gray-600 text-sm">Gerencie seus métodos de pagamento</p>
              </div>
            </div>
          </div>
        )
      default:
        return renderHomePage()
    }
  }

  return (
    <div className="min-h-screen">
      {renderPage()}
      <AppNavigation currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  )
}
