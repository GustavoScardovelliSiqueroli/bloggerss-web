import SideBarLeft from './SideBarLeft';

function Content() {
    return (
        <div className="bgs-content">
            <SideBarLeft></SideBarLeft>
            <div className="bgs-center"></div>
            <div className="bgs-sidebar-right"></div>
        </div>
    )
}

export default Content;