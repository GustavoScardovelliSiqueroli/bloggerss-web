import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import NavBar from "./NavBar.jsx"
import Content from './Content.jsx'

function App() {
    return (<div style={{height:'100%'}}>
        <div>
            <NavBar></NavBar>

        </div>
        <div style={{height:'100%'}}>
            <Content></Content>
        </div>
    </div>)
}

export default App;