
import style from './App.module.css'
import { Todo } from './components/Todo'

function App() {
  
  return (
    <>
      <div className={style.App}>
        <Todo/>
      </div>
    </>
  )
}

export default App
