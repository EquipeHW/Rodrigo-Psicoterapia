"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Heart,
  Focus,
  ArrowRight,
  Target,
  CheckCircle,
  MessageCircle,
  Phone,
  MapPin,
  Instagram,
  Globe,
  Star,
  Zap,
  Shield,
  User,
  Clock,
  Calendar,
  Video,
  CreditCard,
  UserCheck,
  Pause,
} from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function PsicologoSite() {
  const whatsappNumber = "5566999791304"
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta com o psicólogo Rodrigo Lübke."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-blue-50 z-50">
        <nav className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-24 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/rodrigologo.png"
                alt="Rodrigo Lübke Psicólogo"
                width={200}
                height={80}
                className="h-52 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Home
              </a>
              <a href="#tratamentos" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Tratamentos
              </a>
              <a href="#diferenciais" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Meus Diferenciais
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Sobre
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Depoimentos
              </a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                FAQ
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                className="text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
                style={{ backgroundColor: "#002147" }}
                onClick={() => window.open(whatsappUrl, "_blank")}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#001a36")}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#002147")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Agendar Consulta
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700"
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu")
                  if (mobileMenu) {
                    mobileMenu.classList.toggle("hidden")
                  }
                }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden lg:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-2 py-1">
                Home
              </a>
              <a
                href="#tratamentos"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-2 py-1"
              >
                Tratamentos
              </a>
              <a
                href="#diferenciais"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-2 py-1"
              >
                Meus Diferenciais
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-2 py-1">
                Sobre
              </a>
              <a
                href="#depoimentos"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-2 py-1"
              >
                Depoimentos
              </a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-2 py-1">
                FAQ
              </a>
              <div className="pt-4 border-t border-gray-100">
                <Button
                  className="w-full text-white px-6 py-2 rounded-lg font-medium"
                  style={{ backgroundColor: "#002147" }}
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden" id="home">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>

        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Conteúdo Textual - Lado Esquerdo */}
              <div className="text-center lg:text-left">
                <Badge className="mb-8 bg-blue-100 text-gray-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium border-0">
                  CRP 18/04819
                </Badge>
                <h1
                  className="text-4xl lg:text-5xl xl:text-6xl font-light mb-8 leading-tight"
                  style={{ color: "#002147" }}
                >
                  Psicólogo Rodrigo Lübke
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-10 font-light leading-relaxed">
                  Recupere o equilíbrio emocional com clareza e leveza
                </p>
                <Button
                  size="lg"
                  className="text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
                  style={{ backgroundColor: "#002147" }}
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#001a36")}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#002147")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar consulta
                </Button>
              </div>

              {/* Área da Foto - Lado Direito */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Fundo minimalista */}
                  <div className="w-72 h-72 sm:w-56  sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[36rem] xl:h-[36rem] rounded-full bg-gray-100 relative overflow-hidden shadow-xl md:shadow-2xl flex items-center justify-center">
                    {/* Área central para a foto */}
                    <div className="absolute inset-0">
                      <Image
                        src="/rodrigo2.jpg"
                        alt="Psicólogo Rodrigo Lübke"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover object-[center_30%]"
                      />
                    </div>
                  </div>

                  {/* Elemento decorativo sutil */}
                  <div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20"
                    style={{ backgroundColor: "#002147" }}
                  ></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-200 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Tratamentos Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="tratamentos">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 md:mb-8" style={{ color: "#002147" }}>
              Áreas de Tratamento
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-5xl mx-auto">
              A psicoterapia é um caminho para compreender suas emoções, lidar com desafios e construir uma vida mais
              autêntica e equilibrada. Com o psicólogo Rodrigo Lübke, você encontra um espaço seguro para transformar
              sua rotina emocional e recuperar seu bem-estar.
            </p>
          </div>

          {/* Container flexível com centralização */}
          <div className="flex flex-wrap justify-center -mx-3 mb-12 md:mb-16">
            {/* Card 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
              <Card className="group hover:shadow-md transition-all duration-300 border-blue-100 bg-white h-full">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <Zap className="h-6 w-6" style={{ color: "#002147" }} />
                  </div>
                  <CardTitle className="text-gray-900 font-medium">Ansiedade e Estresse</CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
              <Card className="group hover:shadow-md transition-all duration-300 border-blue-100 bg-white h-full">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <Heart className="h-6 w-6" style={{ color: "#002147" }} />
                  </div>
                  <CardTitle className="text-gray-900 font-medium">Baixa Autoestima e Autocrítica</CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
              <Card className="group hover:shadow-md transition-all duration-300 border-blue-100 bg-white h-full">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <Focus className="h-6 w-6" style={{ color: "#002147" }} />
                  </div>
                  <CardTitle className="text-gray-900 font-medium">TDAH e Dificuldades de Foco</CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Card 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
              <Card className="group hover:shadow-md transition-all duration-300 border-blue-100 bg-white h-full">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <ArrowRight className="h-6 w-6" style={{ color: "#002147" }} />
                  </div>
                  <CardTitle className="text-gray-900 font-medium">Fases de Transição</CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* Card 5 - Ocupa 1 coluna em todas as telas (removido md:col-span-2 lg:col-span-1) */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
              <Card className="group hover:shadow-md transition-all duration-300 border-blue-100 bg-white h-full">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <Shield className="h-6 w-6" style={{ color: "#002147" }} />
                  </div>
                  <CardTitle className="text-gray-900 font-medium">Descontrole Emocional e Hábitos Nocivos</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 md:p-8 mb-8 md:mb-12">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <Video className="h-5 w-5 mr-2" style={{ color: "#002147" }} />
              <span className="text-gray-800 font-medium">Atendimento Flexível</span>
            </div>
            <p className="text-center text-sm md:text-base text-gray-600">Sessões online via Google Meet ou presenciais em Sinop - MT</p>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-all duration-300"
              style={{ backgroundColor: "#002147" }}
              onClick={() => window.open(whatsappUrl, "_blank")}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#001a36")}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#002147")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Agendar consulta
            </Button>
          </div>
        </div>
      </section>

    {/* Diferenciais Section */}
<section className="py-16 md:py-24 bg-blue-50 relative overflow-hidden" id="diferenciais">
  {/* Elementos decorativos de fundo */}
  <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-white rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"></div>
  <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2 opacity-50"></div>
  <div className="absolute top-1/2 left-1/3 w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full opacity-30"></div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-center mb-12 md:mb-20" style={{ color: "#002147" }}>
        Meus Diferenciais
      </h2>

      {/* Container flexível com centralização */}
      <div className="flex flex-wrap justify-center -mx-3 mb-12 md:mb-16">
        {/* Card 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
          <Card className="group hover:shadow-md transition-all duration-300 bg-white border-blue-100 h-full">
            <CardHeader>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Brain className="h-5 w-5" style={{ color: "#002147" }} />
              </div>
              <CardTitle className="text-gray-900 font-medium mb-2">Abordagem Integrada</CardTitle>
              <CardDescription className="text-gray-500">TCC + ACT</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
          <Card className="group hover:shadow-md transition-all duration-300 bg-white border-blue-100 h-full">
            <CardHeader>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Target className="h-5 w-5" style={{ color: "#002147" }} />
              </div>
              <CardTitle className="text-gray-900 font-medium">Plano Terapêutico Personalizado</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
          <Card className="group hover:shadow-md transition-all duration-300 bg-white border-blue-100 h-full">
            <CardHeader>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <CheckCircle className="h-5 w-5" style={{ color: "#002147" }} />
              </div>
              <CardTitle className="text-gray-900 font-medium">Avaliação Neuropsicológica</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
          <Card className="group hover:shadow-md transition-all duration-300 bg-white border-blue-100 h-full">
            <CardHeader>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <UserCheck className="h-5 w-5" style={{ color: "#002147" }} />
              </div>
              <CardTitle className="text-gray-900 font-medium">Autonomia do Paciente</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Card 5 - Ocupa 1 coluna em todas as telas */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
          <Card className="group hover:shadow-md transition-all duration-300 bg-white border-blue-100 h-full">
            <CardHeader>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <MessageCircle className="h-5 w-5" style={{ color: "#002147" }} />
              </div>
              <CardTitle className="text-gray-900 font-medium">Comunicação Transparente</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-all duration-300"
          style={{ borderColor: "#002147", color: "#002147" }}
          onClick={() => window.open(whatsappUrl, "_blank")}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.backgroundColor = "#002147"
            e.currentTarget.style.color = "white"
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.backgroundColor = "transparent"
            e.currentTarget.style.color = "#002147"
          }}
        >
          Conheça os diferenciais
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Sobre Section */}
      <section className="py-24 bg-white relative overflow-hidden" id="sobre">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>

        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-gray-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium border-0">
                Sobre Mim
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-light" style={{ color: "#002147" }}>
                Conheça o Psicólogo Rodrigo Lübke
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 relative">
                {/* Elemento decorativo */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-200 rounded-full opacity-30"></div>
                
                <div className="bg-blue-50 rounded-xl p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <Brain className="h-5 w-5 mr-2" style={{ color: "#002147" }} />
                    <span className="text-gray-800 font-medium">Formação Profissional</span>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Sou psicólogo clínico com foco em saúde mental do adulto e base na Terapia Cognitivo-Comportamental.
                    Minha missão é acolher, orientar e empoderar pessoas em suas jornadas de autoconhecimento e
                    transformação.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    <Heart className="h-5 w-5 mr-2" style={{ color: "#002147" }} />
                    <span className="text-gray-800 font-medium">Minha Filosofia</span>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Acredito que cada paciente é único e que a ciência deve caminhar junto com a empatia. Fora do
                    consultório, sou apaixonado por cerveja artesanal, pescarias e Fórmula 1 — hobbies que me conectam ao
                    presente, assim como quero ajudar você a se reconectar com o seu.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
                    style={{ backgroundColor: "#002147" }}
                    onClick={() => window.open(whatsappUrl, "_blank")}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#001a36")}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#002147")}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Agendar consulta
                  </Button>
               
                </div>
              </div>

              <div className="flex justify-center relative">
                <div className="relative">
                  {/* Fundo decorativo */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
                  
                  {/* Container da imagem */}
                  <div className="relative z-10">
                    <Image
                      src="/rodrigo2.png"
                      alt="Psicólogo Rodrigo Lübke"
                      width={400}
                      height={400}
                      className="rounded-xl shadow-lg object-cover"
                    />
                    
                    {/* Badge flutuante */}
                    <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        <span className="text-sm font-medium text-gray-700">CRP 18/04819</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-24 bg-blue-50 relative overflow-hidden" id="depoimentos">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>
        <div className="absolute top-1/4 right-1/3 w-28 h-28 bg-blue-100 rounded-full opacity-30"></div>

        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-center mb-20" style={{ color: "#002147" }}>
              O que dizem meus pacientes
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-blue-100 hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "O Rodrigo me ajudou a enxergar a vida de outra forma. Hoje me sinto muito mais confiante e tranquila para lidar com meus desafios. Recomendo de olhos fechados!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Juliana S.</p>
                      <p className="text-sm text-gray-500">Verificado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-blue-100 hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "Profissional muito atencioso e dedicado. As sessões online foram essenciais para meu processo de autoconhecimento. Só tenho a agradecer!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Carlos M.</p>
                      <p className="text-sm text-gray-500">Verificado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-blue-100 hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "A abordagem do Rodrigo é muito humana e acolhedora. Senti muita confiança desde a primeira consulta. Meu progresso foi visível para mim e para minha família."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Fernanda T.</p>
                      <p className="text-sm text-gray-500">Verificado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden" id="faq">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>

        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-center mb-20" style={{ color: "#002147" }}>
              Perguntas Frequentes
            </h2>

            <Accordion type="single" collapsible className="space-y-4 mb-16">
              <AccordionItem value="item-1" className="border border-blue-100 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700">
                  <div className="flex items-center">
                    <Video className="h-5 w-5 mr-3" style={{ color: "#002147" }} />
                    Como funciona o atendimento online?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 leading-relaxed">
                  O atendimento online é realizado via Google Meet, proporcionando a mesma qualidade e eficácia do
                  atendimento presencial. Você receberá o link da sessão com antecedência e poderá participar de
                  qualquer lugar com conexão à internet.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-blue-100 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-3" style={{ color: "#002147" }} />
                    Você atende por convênio?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 leading-relaxed">
                  Atualmente trabalho apenas com atendimento particular. Isso permite maior flexibilidade nos horários e
                  um acompanhamento mais personalizado. Entre em contato para conhecer os valores e formas de pagamento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-blue-100 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3" style={{ color: "#002147" }} />
                    Qual a duração das sessões?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 leading-relaxed">
                  Cada sessão tem duração de 50 minutos, tempo adequado para um trabalho terapêutico efetivo. Este é o
                  padrão estabelecido pelo Conselho Federal de Psicologia para sessões individuais.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-blue-100 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3" style={{ color: "#002147" }} />
                    Qual a frequência ideal?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 leading-relaxed">
                  A frequência é definida de acordo com suas necessidades específicas. Geralmente, sessões semanais são
                  recomendadas no início do tratamento, podendo ser ajustadas conforme o progresso terapêutico.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-blue-100 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700">
                  <div className="flex items-center">
                    <Pause className="h-5 w-5 mr-3" style={{ color: "#002147" }} />
                    Posso interromper o tratamento?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 leading-relaxed">
                  Sim, você tem total autonomia sobre seu tratamento. Caso deseje interromper, é importante conversarmos
                  sobre os motivos para que possamos fazer um fechamento adequado do processo terapêutico.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center">
              <Button
                size="lg"
                className="text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
                style={{ backgroundColor: "#002147" }}
                onClick={() => window.open(whatsappUrl, "_blank")}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#001a36")}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#002147")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
               Agendar consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-20" style={{ backgroundColor: "#002147" }}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
         
            <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-2 text-blue-200" />
                  <span className="font-medium">Endereço</span>
                </div>
                <p className="text-blue-200 leading-relaxed">
                  Rua das Rosas, 47, Sala 03
                  <br />
                  Sinop/MT
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 mr-2 text-blue-200" />
                  <span className="font-medium">WhatsApp</span>
                </div>
                <p className="text-blue-200">(66) 99979-1304</p>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-6">
                  <span className="font-medium">Redes Sociais</span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/rodrigo.lubke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://rodrigolubke.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <Globe className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-4">
                  
                  <span className="font-medium">Desenvolvido por</span>
                </div>
                  <Image
                    src="/logo02.png"
                    alt="HW Logo"
                    width={120}
                    height={60}
                    className="h-14 w-auto"
                  />
              </div>
            </div>

            

            <div className="border-t border-blue-800 mt-16 pt-8 text-center">
              <p className="text-blue-200">© 2025 Psicólogo Rodrigo Lübke. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
