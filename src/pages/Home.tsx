import React from 'react'

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const Home = ({onPageChange}: HomePageProps) => {
  return (
    <div className='relative pt-30 pb-30 bg-[url(/bg-pousada.jpg)] bg-cover bg-center flex justify-center items-center flex-col'>
      <div className='absolute inset-0 bg-emerald-700 opacity-60 z-0'></div>
      <div className='relative z-10 text-center max-w-[800px] flex gap-8 flex-col'>
        <h1 className='font-bold text-white text-7xl'>Pousada Paradise</h1>
        <p className='text-white w-190 text-2xl'>
          Sua experiência única de hospedagem começa aqui. Gerencie reservas, acomodações e proporcione momentos inesquecíveis aos seus hóspedes.
        </p>
        <div className='flex gap-2 justify-center'>
          <button className='bg-emerald-400 transition hover:bg-emerald-800 cursor-pointer text-white rounded-2xl p-3 font-semibold'>Gerenciar Acomodações</button>
          <button className='border-white border-1 transition hover:bg-white cursor-pointer hover:text-emerald-500 text-white rounded-2xl p-3'>Ver Reservas</button>
        </div>
      </div>
    </div>
  )
}

export default Home
