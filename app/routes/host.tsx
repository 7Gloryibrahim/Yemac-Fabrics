import type { Route } from "./+types/host";
import { Welcome } from "../welcome/welcome";
import Nav from "./Nav";
import Hero from "./hero";
import Collections from "./collections";
import Featured from "./featured-products";

export function meta({}: Route.MetaArgs) {
 
}

export default function Home() {
  return(
  <main>
    <Nav/>
    <Hero/>
    <Collections/>
    <Featured/>
  <Welcome />
</main>
  )
}
