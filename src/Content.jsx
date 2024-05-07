import SideBarLeft from './SideBarLeft';
import Post from './Post';

function Content() {
    return (
        <div className="bgs-content">
            <SideBarLeft></SideBarLeft>
            <div className="bgs-center">
                <Post></Post>
                <Post></Post>
            </div>
            <div className="bgs-sidebar-right"></div>
        </div>
    )
}

export default Content;