import { useEffect, useState } from "react"

const Toggle = ({ shouldBeOpen, onClickToggle }) => (
  <div className="container-toggle">
    <button className="toggle" onClick={onClickToggle}>
      {shouldBeOpen ? "Fechar" : "Abrir"}
    </button>
  </div>
)

const Steps = ({ shouldBeOpen, steps, step, onClickPrevious, onClickNext }) => {
  return (
    shouldBeOpen && (
      <div className="steps">
        <ul className="numbers">
          {steps.map((item, index) => (
            <li className={index + 1 === step ? "active" : ""} key={item.id}>
              {index + 1}
            </li>
          ))}
        </ul>
        <h2 className="message" key={steps.id}>
          Passo {step}: {steps[step - 1].description}
        </h2>

        <div className="buttons">
          <button>
            <span onClick={onClickPrevious}>Anterior</span>
          </button>
          <button>
            <span onClick={onClickNext}>Próximo</span>
          </button>
        </div>
      </div>
    )
  )
}

const App = () => {
  const [shouldBeOpen, setShouldBeOpen] = useState(true)
  const [step, setStep] = useState(1)
  const [steps, setSteps] = useState([])

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/MatheusZamo/steps/refs/heads/main/src/infos.json",
    )
      .then((response) => response.json())
      .then((response) =>
        setSteps(response.map((obj) => ({ ...obj, id: crypto.randomUUID() }))),
      )
      .catch(console.log)
  })

  const handleClickToggle = () => setShouldBeOpen((open) => !open)

  const handleClickNext = () =>
    setStep((step) => (step === steps.length ? step : step + 1))

  const handleClickPrevious = () =>
    setStep((step) => (step - 1 === 0 ? step : step - 1))

  return (
    <>
      <Toggle shouldBeOpen={shouldBeOpen} onClickToggle={handleClickToggle} />
      <Steps
        shouldBeOpen={shouldBeOpen}
        steps={steps}
        step={step}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
      />
    </>
  )
}
export { App }
