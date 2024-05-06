import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import NavBar from "./NavBar.jsx"
import Content from './Content.jsx'

function App() {
    return (<div>
        <div>
            <NavBar></NavBar>

        </div>
        <div>
            <Content></Content>
        </div>
    </div>)
}

export default App;