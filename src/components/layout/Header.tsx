import React from 'react'
import {Calendar, Bed, Building2, HomeIcon} from 'lucide-react'

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const Header = ({onPageChange}: HomePageProps) => {
  return (
    <header className='flex justify-between p-5 items-center fixed w-full bg-white z-100'>
      <div className='flex gap-2 items-center'>
        <Building2 color='rgb(16 185 129)'/>
        <p className='text-emerald-500 font-bold text-2xl'>Pousada Paradise</p>
      </div>
      <nav className='flex gap-2'>
        <button className='bg-emerald-500 flex gap-2 text-white rounded-lg p-2'>
          <HomeIcon/>
          <p>Início</p>
        </button>
        <button className='bg-white flex gap-2 hover:bg-emerald-100 hover:text-emerald-700 text-gray-400 rounded-lg p-2'>
          <Bed/>
          <p>Acomodações</p>
        </button>
        <button className='bg-white flex gap-2 hover:bg-emerald-100 hover:text-emerald-700 text-gray-400 rounded-lg p-2'>
          <Calendar/>
          <p>Reservas</p>
        </button>
      </nav>
    </header>
  )
}

export default Header