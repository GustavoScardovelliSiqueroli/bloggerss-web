import CategoryIten from "./CategoryIten";

function SideBarLeft() {
    return <div className="bgs-sidebar-left">
        <h2>Filtrar por</h2>
        <div className="sidebar-itens">
        <div className="sidebar-iten">
                <span>Data</span>
            </div>
            <div className="sidebar-iten">
                <span>O. Alfabética</span>
            </div>
            <div className="sidebar-iten categories">
                <span>Categoria</span>
                <div className="categories-itens">
                    <CategoryIten></CategoryIten>
                    <CategoryIten></CategoryIten>
                    <CategoryIten></CategoryIten>
                    <CategoryIten></CategoryIten>
                </div>
            </div>
        </div>
    </div>
}

export default SideBarLeft;