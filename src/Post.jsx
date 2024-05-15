import PostCategory from "./PostCategory";

function Post() {

    const postLink = ()=>{
        window.location.href = 'post'
    }

    return (
        <div className="bgs-post" onClick={postLink}>
            <div className="post-date">
                <h3>15 de maio de 2024</h3>
            </div>
            <div className="post-content">
                <div className="post-header">
                    <h3>Titulo do post</h3>
                    <PostCategory></PostCategory>
                </div>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente eligendi minus quis officiis recusandae tempore dolorum, neque hic in et itaque eos, enim sint obcaecati laborum nisi animi architecto. </span>
            </div>
        </div>
    )
}

export default Post;