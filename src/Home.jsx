import NavBar from './NavBar'
import HomeUser from './HomeUser'

export const Home = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <NavBar></NavBar>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
        <div className='home-content'>
          <h1>Seja bem vindo ao Bloggers!</h1>
          <h3>Usuários criadores:</h3>
          <div>
            <HomeUser></HomeUser>
            <HomeUser></HomeUser>
            <HomeUser></HomeUser>
            <HomeUser></HomeUser>
          </div>
        </div>
      </div>
    </div>
  )
}
