import { BrowserRouter } from "react-router-dom"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import CustomRoutes from "./routes/Custom-routes"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <CustomRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
