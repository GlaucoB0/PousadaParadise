import { Github, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone} from 'lucide-react';
import React from 'react'

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const Footer = ({onPageChange}: HomePageProps) => {
  return (
    <footer className='py-10 px-5 relative'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2 items-start w-100'>
          <h2 className='mb-2 text-lg font-semibold'>Pousada Serenidade</h2>
          <p className='text-gray-500 text-sm'>Uma experiência única de hospedagem com todo conforto e tranquilidade que você merece.</p>
          
          <div className='flex gap-1 items-center mt-2'>
            <MapPin className='h-5 text-emerald-500'/>
            <p className='text-gray-500 text-sm'>Rua das Flores, 123 - Centro</p>
          </div>
          <div className='flex gap-1 items-center'>
            <Phone className='h-5 text-emerald-500'/>
            <p className='text-gray-500 text-sm'>(11) 99999-9999</p>
          </div>
          <div className='flex gap-1 items-center'>
            <Mail className='h-5 text-emerald-500'/>
            <p className='text-gray-500 text-sm'>contato@pousadaserenidade.com.br</p>
          </div>
        </div>
        <div className='flex flex-col items-start w-100'>
          <h2 className='mb-4 text-lg font-semibold'>Links Rápidos</h2>
          <button className='hover:text-emerald-500 cursor-pointer text-sm text-gray-500'  onClick={()=>{onPageChange('home')}}>Início</button>
          <button className='hover:text-emerald-500 cursor-pointer text-sm text-gray-500'  onClick={()=>{onPageChange('accommodations')}}>Acomodações</button>
          <button className='hover:text-emerald-500 cursor-pointer text-sm text-gray-500'  onClick={()=>{onPageChange('bookings')}}>Reservas</button>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Siga-me</h2>
          <p className="mt-4 text-sm text-gray-500">Conecte-se comigo nas redes sociais</p>
          <div className="flex space-x-3 mt-4">
            <a href="https://linkedin.com/in/glaucombs" className='rounded-xl transition p-2 hover:bg-emerald-500 hover:text-white'>
              <Linkedin/>
            </a>
            <a href="https://github.com/GlaucoB0" className='rounded-xl transition p-2 hover:bg-emerald-500 hover:text-white'>
              <Github/>
            </a>
            <a href="https://instagram.com/_glauco___" className='rounded-xl transition p-2 hover:bg-emerald-500 hover:text-white'>
              <Instagram/>
            </a>
            <a href="https://w.app/glaucob0" className='rounded-xl transition p-2 hover:bg-emerald-500 hover:text-white'>
              <MessageCircle/>
            </a>
          </div>
        </div>
      </div>
      <div className='border-border border-b border-gray-300 mt-10 mb-10'/>
      <p className="text-center text-sm text-gray-500">© 2025 Glauco Soares. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer