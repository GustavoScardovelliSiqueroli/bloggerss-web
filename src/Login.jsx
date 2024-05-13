import NavBar from "./NavBar"

const Login = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <NavBar></NavBar>
            <div className="login-content">
                <form action="" className="form-login">
                    <h1>Entre em sua conta</h1>
                    <div className="form-conten">

                        <input type="text" placeholder="Usuário"/>
                        <input type="password" placeholder="Senha"/>
                        <button type="submit" className="btn-login">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login