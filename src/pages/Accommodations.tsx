import React from 'react'

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const Accommodations = ({onPageChange}: HomePageProps) => {
  return (
    <div>Accommodations</div>
  )
}

export default Accommodations