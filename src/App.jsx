
import Introduction from "./sections/introduction/Introduction"
import Header from "./sections/introduction/components/header/Header"
import TechStack from "./sections/techstack/TechStack"
import Work from "./sections/work/Work"

import style from "./App.module.css"

function App() {

  return <section id={style.App}>
    <Header/>
    <main id={style.main}>
      <Introduction/>
    </main>
    <TechStack/>
    <Work/>
  </section>
}

export default App
