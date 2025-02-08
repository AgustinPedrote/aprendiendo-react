import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  return (
    <section className='App'>
      {/* pruebaaaaaa */}
      <TwitterFollowCard initialIsFollowing={false} userName="socrates" name="Socrates Liliet" />
      <TwitterFollowCard initialIsFollowing={false} userName="topuria" name="Max Topuria" />
      <TwitterFollowCard initialIsFollowing={false} userName="max" name="Max Simpson" />
      <TwitterFollowCard initialIsFollowing={false} userName="jhonS" name="Jhon Smith" />
    </section>
  )
}
