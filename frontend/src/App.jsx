import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Pet from "./pages/Pet"
import PetProfile from "./pages/PetProfile"
import SheltorProfile from "./pages/SheltorProfile"
import Sheltors from "./pages/Sheltors"
import PageNotFound from "./pages/PageNotFound"

function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/pets" element={<Pet/>} />
            <Route path="/sheltors" element={<Sheltors/>} />
            <Route path="/pets/:petId" element={<PetProfile/>} />
            <Route path="/sheltors/:sheltorId" element={<SheltorProfile/>} />
            <Route path="/*" element={<PageNotFound/>} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
