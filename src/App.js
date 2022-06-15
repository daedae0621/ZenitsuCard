import React from "react"
import Img from "./components/Img"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <Img />
            <main>
                <Info />
                <About />
                <Interests />
            </main>
            <Footer />
        </div>
    )
}