import { Outlet } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Outlet className="mb-10" />
      <Footer />
    </>
  )
}

export default App