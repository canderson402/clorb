import Header from './components/Header'
import AppCard from './components/AppCard'
import apps from './data/apps.json'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="apps-grid">
          {apps.map(app => (
            <AppCard
              key={app.id}
              name={app.name}
              description={app.description}
              thumbnail={app.thumbnail}
              url={app.url}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
