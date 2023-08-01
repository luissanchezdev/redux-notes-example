import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom/client'
import noteReducer from './reducers/noteReducer'

const store = createStore(noteReducer)
  
  store.dispatch({
    type: 'NEW_NOTE',
    data: {
      content: 'the app state is in redux store',
      important: true,
      id: 1
    }
  })
  
  store.dispatch({
    type: 'NEW_NOTE',
    data: {
      content: 'state changes are made with actions',
      important: false,
      id: 2
    }
  })
  
  const showStore = store.getState()
  console.log({ showStore })
  

const App = () => {
  return(
    <div>
      <ul>
        {store.getState().map(note=>
          <li key={note.id}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        )}
        </ul>
    </div>
  )
}

const reducerApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

reducerApp()
store.subscribe(reducerApp)
