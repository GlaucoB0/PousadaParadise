import React from 'react'

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const Bookings = ({onPageChange}: HomePageProps) => {
  return (
    <div>Bookings</div>
  )
}

export default Bookings