"use client"

import { Button } from "@/components/ui/button"

export function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9a01b] via-[#f8bd43] to-[#efb560] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-white/15 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/25 rounded-full"></div>

      <div className="text-center space-y-8 z-10 max-w-lg mx-auto">
        <div className="w-56 h-56 mx-auto bg-white rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white/50">
          {/* Increased cart icon size from w-24 h-24 to w-32 h-32 */}
          <img src="/shopping-cart.png" alt="Shopping cart icon" className="w-32 h-32 object-contain mb-1" />
          <div className="text-center">
            <div className="text-2xl font-black tracking-wide">
              <span className="text-black">INFO</span>
              <span className="text-[#f9a01b]">HUB</span>
            </div>
            {/* Removed "SHOPPING PLATFORM" text */}
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          <h1 className="text-gray-800 text-3xl font-black mb-3 leading-tight">FAZER COMPRAS PODE SER SIMPLES</h1>
          <p className="text-gray-600 text-base font-medium">Sua plataforma de compras inteligente</p>
        </div>

        <div className="space-y-5">
          <Button
            onClick={() => onNavigate("login")}
            className="w-full bg-[#25992e] hover:bg-[#1e7a26] text-white font-bold py-5 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            LOGIN
          </Button>

          <Button
            onClick={() => onNavigate("register")}
            className="w-full bg-white hover:bg-gray-50 text-gray-800 font-bold py-5 rounded-full text-xl shadow-2xl border-3 border-white transform hover:scale-105 transition-all duration-200"
          >
            CADASTRE-SE
          </Button>
        </div>

        <div className="text-white text-base font-medium mb-2">ou entre com:</div>

        <div className="flex justify-center space-x-6 pt-2">
          <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center shadow-xl hover:bg-gray-800 cursor-pointer transition-all duration-200 transform hover:scale-110">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </div>
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-xl hover:bg-gray-50 cursor-pointer transition-all duration-200 transform hover:scale-110">
            <svg className="w-7 h-7" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
