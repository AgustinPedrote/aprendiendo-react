import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard initialIsFollowing={true} userName="socrates" name="Socrates Liliet" />
      <TwitterFollowCard initialIsFollowing={true} userName="topuria" name="Max Topuria" />
      <TwitterFollowCard initialIsFollowing={true} userName="max" name="Max Simpson" />
      <TwitterFollowCard initialIsFollowing={true} userName="jhonS" name="Jhon Smith" />
    </section>
  )
}
