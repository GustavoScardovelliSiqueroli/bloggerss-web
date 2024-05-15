import NavBar from "./NavBar"

const PostPage = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <NavBar></NavBar>
            <div className="bgs-content">
                <div></div>
                <div className="bgs-center">

                    <h1>Post Title</h1>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ea repudiandae libero soluta mollitia accusamus quasi et! Recusandae consequatur, qui saepe doloribus quibusdam impedit sed possimus sunt eaque voluptatum? Repudiandae.</span>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas laudantium amet repellendus fuga voluptate sequi inventore repudiandae sint consequatur tempore repellat labore, debitis sed voluptatibus soluta illum similique dolorum! Reiciendis.</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id porro sed deserunt recusandae minus? Sit sapiente porro aut reiciendis non fugit quod, corrupti tempora perspiciatis, eveniet laudantium esse maxime!</span>

                </div>
                <div className="bgs-sidebar-right">
                </div>

            </div>

        </div>
    )
}

export default PostPage