"use client"

import { useState } from "react"
import { LandingPage } from "@/components/landing-page"
import { LoginPage } from "@/components/login-page"
import { RegisterPage } from "@/components/register-page"
import { PasswordRecoveryManager } from "@/components/password-recovery-manager"
import { Dashboard } from "@/components/dashboard"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("landing")

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onNavigate={handleNavigation} />
      case "login":
        return <LoginPage onNavigate={handleNavigation} />
      case "register":
        return <RegisterPage onNavigate={handleNavigation} />
      case "forgot-password-1":
      case "forgot-password-2":
      case "forgot-password-3":
      case "forgot-password-4":
        return <PasswordRecoveryManager onNavigate={handleNavigation} />
      case "dashboard":
        return <Dashboard onNavigate={handleNavigation} />
      default:
        return <LandingPage onNavigate={handleNavigation} />
    }
  }

  return <main className="min-h-screen">{renderCurrentPage()}</main>
}
