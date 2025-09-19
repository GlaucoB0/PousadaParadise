import { Bed, Snowflake, Users2, Wind } from 'lucide-react';
import React from 'react'

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const data = [
  {
    id:"",
    name:"Suíte Master com Vista para o Mar",
    description:"",
    rooms_count:1,
    capacity:2,
    daily_rate:350.00,
    air_conditioning: true,
    amenities:"[Wi-Fi,TV,Frigobar,Varanda,Vista para o mar]",
    created_at:"",
    updated_a:"",
  },
  {
    id:"",
    name:"Chalé Família Premium",
    description:"",
    rooms_count:1,
    capacity:2,
    daily_rate:580.00,
    air_conditioning: true,
    amenities:"[Wi-Fi,TV,Frigobar,Varanda,Vista para o mar]",
    created_at:"",
    updated_a:"",
  },
  {
    id:"",
    name:"Quarto Standard Aconchegante",
    description:"",
    rooms_count:1,
    capacity:2,
    daily_rate:200.00,
    air_conditioning: false,
    amenities:"[Wi-Fi,TV,Ventilador]",
    created_at:"",
    updated_a:"",
  },
]

const Accommodations = ({onPageChange}: HomePageProps) => {
  return (
    <div className='p-5 pt-5'>
      <div className='flex justify-between items-center mb-8'>
        <div>
          <h1 className='font-bold text-emerald-950 text-4xl mb-2'>Gerenciar Acomodações</h1>
          <p className='text-gray-500 text-lg'>Adicione, edite ou remova as acomodações da sua pousada</p>
        </div>
        <button 
          className='px-10 h-12 bg-emerald-400 transition hover:bg-emerald-800 cursor-pointer text-white rounded-2xl p-3 font-semibold'>
          + Nova acomodação
        </button>
      </div>
      <div className='grid grid-cols-3'>
        {data? 
        data.map((e)=>{
          return(
            <div className='flex flex-col gap-4 max-w-90 hover:shadow-2xl hover:shadow-emerald-100 p-5 rounded-xl'>
              <p className='text-lg max-w-2xl font-semibold'>{e.name}</p>
              <div className='flex gap-10 text-sm'>
                <div className='text-gray-500 flex items-center'><Bed className='mr-2 w-4'/>{e.rooms_count} quarto</div>
                <div className='text-gray-500 flex items-center'><Users2 className='mr-2 w-4'/>{e.capacity} pessoas</div>
              </div>
              <p><span className='text-emerald-500 text-2xl font-semibold'>R$ {e.daily_rate},00</span>/noite</p>
              <div className='flex gap-2'>
                {e.air_conditioning? <><Snowflake/> Ar-Condicionado</>:<><Wind/> Ventilador</>}
              </div>
              <div>
                <p>Comodidades:</p>
                {e.amenities}
              </div>
            </div>
          )
        }): <div>loading...</div>}
          
      </div>
    </div>
  )
}

export default Accommodations