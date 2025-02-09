import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}    
    </header>
  )
}