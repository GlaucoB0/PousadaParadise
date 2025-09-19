import React from 'react'
import {Calendar, Bed, Building2, HomeIcon} from 'lucide-react'

interface HomePageProps {
  onPageChange: (page: string) => void;
  page: string;
}

const itemsNavagation = [
  {icon: <HomeIcon/>, label: 'Início', ref: 'home'},
  {icon: <Bed/>, label: 'Acomodações', ref: 'accommodations'},
  {icon: <Calendar/>, label: 'Reservas', ref: 'bookings'},
]

const Header = ({onPageChange, page}: HomePageProps) => {
  return (
    <header className='flex justify-between p-5 items-center fixed w-full bg-white z-100'>
      <div className='flex gap-2 items-center'>
        <Building2 color='rgb(16 185 129)'/>
        <p className='text-emerald-500 font-bold text-2xl'>Pousada Paradise</p>
      </div>
      <nav className='flex gap-2'>
        {itemsNavagation.map((item)=>{
          return (
            <button onClick={()=>{onPageChange(item.ref)}} className={page===item.ref?"cursor-pointer flex gap-2 rounded-lg p-2 bg-emerald-500 text-white":"cursor-pointer flex gap-2 rounded-lg p-2 bg-white hover:bg-emerald-100 hover:text-emerald-800"}>
              {item.icon}
              <p>{item.label}</p>
            </button>
          )
        })}
      </nav>
    </header>
  )
}

export default Header