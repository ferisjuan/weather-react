import { Card } from './card'

function App() {
  return (
    <main className="flex h-screen justify-center">
      <section className="grid min-h-screen w-2/3 max-w-screen-lg grid-cols-6 grid-rows-6 justify-center gap-6 bg-hero-pattern py-14">
        <article className="prose ml-6 min-w-max text-center">
          <h1>Weather Wiz</h1>
        </article>

        <article className="col-span-3 col-start-4 px-4">
          <Card>
            <form></form>
          </Card>
        </article>

        <article className="col-span-3 col-start-2 row-span-4">
          <Card>
            <p>card</p>
          </Card>
        </article>

        <article className="col-span-6 row-span-2">
          <Card>
            <p>cards</p>
          </Card>
        </article>
      </section>
    </main>
  )
}

export default App
