const App = () => (
  <>
    <div className="container-close">
      <button
        className="close"
        onClick={(e) => console.log(e.target.textContent)}
      >
        Fechar
      </button>
    </div>

    <div className="steps">
      <div className="numbers">
        <div className="active">
          <span>1</span>
        </div>
        <div>
          <span>2</span>
        </div>
        <div>
          <span>3</span>
        </div>
      </div>
      <h2 className="message">Passo 1: Entender o problema do cliente</h2>

      <div className="buttons">
        <button>
          <span onClick={(e) => console.log(e.target.textContent)}>
            Anterior
          </span>
        </button>
        <button>
          <span onClick={(e) => console.log(e.target.textContent)}>
            Próximo
          </span>
        </button>
      </div>
    </div>
  </>
)

export { App }
