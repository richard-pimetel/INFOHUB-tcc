"use client"

import { useState } from "react"
import { ForgotPasswordStep1 } from "./forgot-password-step1"
import { ForgotPasswordStep2 } from "./forgot-password-step2"
import { ForgotPasswordStep3 } from "./forgot-password-step3"
import { ForgotPasswordStep4 } from "./forgot-password-step4"

export function PasswordRecoveryManager({ onNavigate }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [recoveryData, setRecoveryData] = useState({})

  const handleStep1Next = (data) => {
    setRecoveryData({ ...recoveryData, ...data })
    setCurrentStep(2)
  }

  const handleStep2Next = () => {
    setCurrentStep(3)
  }

  const handleStep3Next = (data) => {
    setRecoveryData({ ...recoveryData, ...data })
    setCurrentStep(4)
  }

  const handleComplete = () => {
    onNavigate("login")
  }

  const handleStepNavigation = (step) => {
    if (step === "forgot-password-1") setCurrentStep(1)
    else if (step === "forgot-password-2") setCurrentStep(2)
    else if (step === "forgot-password-3") setCurrentStep(3)
    else onNavigate(step)
  }

  switch (currentStep) {
    case 1:
      return <ForgotPasswordStep1 onNavigate={handleStepNavigation} onNext={handleStep1Next} />
    case 2:
      return (
        <ForgotPasswordStep2 onNavigate={handleStepNavigation} onNext={handleStep2Next} email={recoveryData.email} />
      )
    case 3:
      return (
        <ForgotPasswordStep3 onNavigate={handleStepNavigation} onNext={handleStep3Next} email={recoveryData.email} />
      )
    case 4:
      return <ForgotPasswordStep4 onNavigate={handleStepNavigation} onComplete={handleComplete} />
    default:
      return null
  }
}
