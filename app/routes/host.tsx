import type { Route } from "./+types/host";
import { Welcome } from "../welcome/welcome";
import Nav from "./Nav";

export function meta({}: Route.MetaArgs) {
 
}

export default function Home() {
  return(
  <main>
    <Nav/>
  <Welcome />
</main>
  )
}
