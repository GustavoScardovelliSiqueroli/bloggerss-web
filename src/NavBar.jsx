function NavBar() {
    const homeLink = () => { window.location.href = 'home' }
    const pageLink = () => { window.location.href = '/' }
    const loginLink = () => { window.location.href = 'login' }

    return (
        <nav className="bgs-navbar">
            <div className="bgs-nav-item" onClick={homeLink}>
                <h1>BLOGGERSS</h1>
            </div>
            <div className="bgs-nav-item nav-mid" onClick={pageLink}>
                <h1 >GSSS</h1>
            </div>
            <div className="bgs-nav-item" onClick={loginLink}>
                <h1>LOGIN</h1>
            </div>
        </nav>
    );
}

export default NavBar;