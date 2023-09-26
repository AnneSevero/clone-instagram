import './App.css'
import ConteudoEsquerdo from './Componentes/ConteudoEsquerdo'

function App() {
  return (
    <main className='OrganizarConteudo'>

      <ConteudoEsquerdo/>
      <div className='ConteudoEsquerdo'>Lado Esquerdo</div>
      <div className='ConteudoCentral'>Lado Central</div>
      <div className='ConteudoDireito'>Lado Direito</div>
    </main>
  )
}

export default App
