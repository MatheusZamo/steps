import { useState } from "react"

const steps = [
  {
    id: crypto.randomUUID(),
    description: "Entender o problema do cliente",
  },
  {
    id: crypto.randomUUID(),
    description: "Desenvolver a solução do problema",
  },
  {
    id: crypto.randomUUID(),
    description:
      "Repetir até o cliente ficar feliz e encher seu 🍑 de dinheiro",
  },
]

const numbers = [
  { id: crypto.randomUUID(), number: 1 },
  { id: crypto.randomUUID(), number: 2 },
  { id: crypto.randomUUID(), number: 3 },
]

const App = () => {
  const [showSteps, setShowSteps] = useState(true)
  const setToogle = () => setShowSteps((steps) => !steps)

  const [option, setOption] = useState(0)
  const nextOption = () => {
    option < 2 ? setOption((option) => option + 1) : 2
  }
  const previousOptions = () => {
    option > 0 ? setOption((option) => option - 1) : 0
  }

  const defineClass = showSteps ? "steps" : "hide"
  const buttonName = showSteps ? "Fechar" : "Abrir"

  return (
    <>
      <div className="container-close">
        <button className="close" onClick={setToogle}>
          {buttonName}
        </button>
      </div>
      <div className={defineClass}>
        <div className="numbers">
          {numbers.map(({ id, number }) => (
            <div className={number - 1 === option ? "active" : ""} key={id}>
              <span>{number}</span>
            </div>
          ))}
        </div>
        <h2 className="message" key={steps.id}>
          {`Passo ${option + 1}: ${steps[option].description}`}
        </h2>

        <div className="buttons">
          <button>
            <span onClick={previousOptions}>Anterior</span>
          </button>
          <button>
            <span onClick={nextOption}>Próximo</span>
          </button>
        </div>
      </div>
    </>
  )
}
export { App }
