"use client"
import { Home, User, ShoppingCart, Settings } from "lucide-react"

export function AppNavigation({ currentPage, onNavigate }) {
  const navigationItems = [
    { id: "home", label: "Início", icon: Home },
    { id: "profile", label: "Perfil", icon: User },
    { id: "cart", label: "Carrinho", icon: ShoppingCart },
    { id: "settings", label: "Configurações", icon: Settings },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive ? "text-[#f9a01b] bg-[#f9a01b]/10" : "text-gray-500 hover:text-[#f9a01b]"
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
