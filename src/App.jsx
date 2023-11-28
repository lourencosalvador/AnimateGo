import "./styles/style.css"
import { gsap } from "gsap"
import { useEffect } from "react"
import { useRef } from "react"

function App() {
const titleRef = useRef(null)
const descripition = useRef(null)
const btn = useRef(null)
const figureRef = useRef(null)
const bodyFigureFer = useRef(null)

useEffect(()=> {
  const title   = titleRef.current
  const descri = descripition.current
  const button = btn.current 
  const figure = figureRef.current
  const bodyFig = bodyFigureFer.current
  const tl = gsap.timeline({defaults: { duration: 1}})

  //Animation Gsap
  tl.fromTo(title, {
    opacity: 0,
    y: 100
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
  }).fromTo(descri, {
    opacity: 0,
    y: 100
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
  }).fromTo(button, {
    opacity: 0,
    x: 100
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
  }).fromTo(figure, {
    opacity: 0,
    x: -100
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
  }).fromTo(bodyFig, {
    opacity: 0,
    width: 0
  }, {
    opacity: 1,
     width: 500,
    duration: 1,
  })
}, [])
  return (
    <>
    <div id="perfil" ref={bodyFigureFer}>
      <figure ref={figureRef}>
        <img src="./perfil.jpeg" alt="" />
      </figure>
    </div>
      <div id="body">
        <h1 ref={titleRef}>Hello sou o Lorrys Code seja bem vindo <br />
          a <span>Animate</span><span>Go</span>
          
        </h1>
        <p  ref={descripition}>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Voluptas labore ullam, architecto minima nulla itaque.</p>
            <button ref={btn}>Get Start</button>
      </div>
    </>
  )
}

export default App
