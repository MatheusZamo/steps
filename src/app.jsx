import { useEffect, useState, useReducer } from "react"

const Toggle = ({ shouldBeOpen, onClickToggle }) => (
  <div className="container-toggle">
    <button className="toggle" onClick={onClickToggle}>
      {shouldBeOpen ? "Fechar" : "Abrir"}
    </button>
  </div>
)

const reducer = (state, action) =>
  ({
    set_steps: {
      ...state,
      steps: action.payload?.length > 0 ? action.payload : [],
    },
    increment_step: {
      ...state,
      step: state.step === state.steps.length ? state.step : state.step + 1,
    },
    decrement_step: {
      ...state,
      step: state.step - 1 === 0 ? state.step : state.step - 1,
    },
  })[action.type] || state

const Steps = () => {
  const [state, dispatch] = useReducer(reducer, { step: 1, steps: [] })

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/MatheusZamo/steps/refs/heads/main/src/infos.json",
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: "set_steps", payload: data }))
      .catch(console.log)
  })

  const handleClickNext = () => dispatch({ type: "increment_step" })

  const handleClickPrevious = () => dispatch({ type: "decrement_step" })

  return (
    <div className="steps">
      <ul className="numbers">
        {state.steps.map((item, index) => (
          <li className={index + 1 === state.step ? "active" : ""} key={index}>
            {index + 1}
          </li>
        ))}
      </ul>
      <h2 className="message" key={state.steps.id}>
        Passo {state.step}: {state.steps[state.step - 1]?.description}
      </h2>

      <div className="buttons">
        <button>
          <span onClick={handleClickPrevious}>Anterior</span>
        </button>
        <button>
          <span onClick={handleClickNext}>Próximo</span>
        </button>
      </div>
    </div>
  )
}

const App = () => {
  const [shouldBeOpen, setShouldBeOpen] = useState(true)

  const handleClickToggle = () => setShouldBeOpen((open) => !open)

  return (
    <>
      <Toggle shouldBeOpen={shouldBeOpen} onClickToggle={handleClickToggle} />
      {shouldBeOpen && <Steps />}
    </>
  )
}
export { App }
