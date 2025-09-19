import { useState } from "react"
import Header from "./components/layout/Header"
import Home from "./pages/Home"
import Footer from "./components/layout/Footer"

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
      <Header onPageChange={setPage}/>
      <div className="pt-20">
        {renderPage()}
      </div>
      <Footer onPageChange={setPage}/>
    </>
  )
}

function App() {
  return (
      <AppContent/>
  )
}

export default App
