import { useState } from "react"
import Header from "./components/layout/Header"
import Home from "./pages/Home"

function AppContent() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch(page){
      case 'home':
        return <Home onPageChange={setPage}/>
    }
  }

  return (
    <>
      <Header/>
      <div className="pt-20">
        {renderPage()}
      </div>
    </>
  )
}

function App() {
  return (
      <AppContent/>
  )
}

export default App
