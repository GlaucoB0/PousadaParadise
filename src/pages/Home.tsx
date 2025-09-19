import { MapPin, Star, Users, Wifi } from 'lucide-react';
import React from 'react'

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const Home = ({onPageChange}: HomePageProps) => {
  return (
    <>
      <div className='relative pt-30 pb-30 bg-[url(/bg-pousada.jpg)] bg-cover bg-center flex justify-center items-center flex-col'>
        <div className='absolute inset-0 bg-emerald-700 opacity-60 z-0'></div>
        <div className='relative z-10 text-center max-w-[800px] flex gap-8 flex-col'>
          <h1 className='font-bold text-white text-7xl'>Pousada Paradise</h1>
          <p className='text-white w-190 text-xl'>
            Sua experiência única de hospedagem começa aqui. Gerencie reservas, acomodações e proporcione momentos inesquecíveis aos seus hóspedes.
          </p>
          <div className='flex gap-2 justify-center'>
            <button 
              onClick={()=>{onPageChange('accommodations')}} 
              className='px-10 bg-emerald-400 transition hover:bg-emerald-800 cursor-pointer text-white rounded-2xl p-3 font-semibold'>
              Gerenciar Acomodações
            </button>
            <button
              onClick={()=>{onPageChange('bookings')}}
              className='px-10 border-white border-1 transition hover:bg-white cursor-pointer hover:text-emerald-500 text-white rounded-2xl p-3'>
              Ver Reservas
            </button>
          </div>
        </div>
      </div>
      <div className='p-15 mb-10 w-full flex flex-col items-center gap-4'>
        <h2 className='font-bold text-emerald-950 text-4xl'>Por que escolher nossa Pousada?</h2>
        <p className='text-gray-500 text-xl text-center max-w-2xl mb-10'>Oferecemos uma experiência completa de hospedagem com foco na qualidade e satisfação dos nossos hóspedes</p>
        <div className='flex gap-2 justify-between'>
          <div className='flex flex-col gap-2 max-w-60 h-60 items-center hover:shadow-2xl hover:shadow-emerald-100 p-5 text-center rounded-xl'>
            <Star className='w-13 h-13 text-emerald-500 bg-emerald-100 p-3 rounded-full'/>
            <p className='text-lg max-w-2xl font-semibold'>Experiência Premium</p>
            <p className='text-gray-500'>Acomodações de qualidade com todo conforto que você merece</p>
          </div>
          <div className='flex flex-col gap-2 max-w-60 h-60 items-center hover:shadow-2xl hover:shadow-emerald-100 p-5 text-center rounded-xl'>
            <MapPin className='w-13 h-13 text-emerald-500 bg-emerald-100 p-3 rounded-full'/>
            <p className='text-lg max-w-2xl font-semibold'>Localização Privilegiada</p>
            <p className='text-gray-500'>No coração do paraíso, próximo às principais atrações</p>
          </div>
          <div className='flex flex-col gap-2 max-w-60 h-60 items-center hover:shadow-2xl hover:shadow-emerald-100 p-5 text-center rounded-xl'>
            <Users className='w-13 h-13 text-emerald-500 bg-emerald-100 p-3 rounded-full'/>
            <p className='text-lg max-w-2xl font-semibold'>Atendimento Personalizado</p>
            <p className='text-gray-500'>Equipe dedicada para tornar sua estadia inesquecível</p>
          </div>
          <div className='flex flex-col gap-2 max-w-60 h-60 items-center hover:shadow-2xl hover:shadow-emerald-100 p-5 text-center rounded-xl'>
            <Wifi className='w-13 h-13 text-emerald-500 bg-emerald-100 p-3 rounded-full'/>
            <p className='text-lg max-w-2xl font-semibold'>Comodidades Modernas</p>
            <p className='text-gray-500'>Wi-Fi, ar-condicionado e todas as facilidades urbanas</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 bg-emerald-500 w-full h-100 items-center justify-center text-center'>
        <h1 className='font-bold text-white text-4xl'>Pronto para começar?</h1>
        <p className='text-emerald-50 text-xl w-180'>Acesse nossa área de gerenciamento e tenha controle total sobre as acomodações e reservas da sua pousada.</p>
        <button 
          onClick={()=>{onPageChange('bookings')}}
          className='bg-white transition hover:bg-emerald-50 hover:text-emerald-900 cursor-pointer text-emerald-800 rounded-2xl p-3 mt-4 px-10'>
          Gerenciar Sistema
        </button>
      </div>
    </>
  )
}

export default Home
