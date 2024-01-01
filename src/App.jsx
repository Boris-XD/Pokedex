import Aside from "./components/Aside"
import Pokemons from "./components/Pokemons"

function App() {

  return (
    <section>
      <main className="bg-sky-500 max-w-[1400px] mx-auto grid grid-cols-1 
      lg:grid-cols-[1fr_350px] h-screen font-outfit overflow-y-auto">
        <Pokemons />
        <Aside />
      </main>
    </section>
  )
}

export default App
