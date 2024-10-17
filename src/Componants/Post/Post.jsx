import './Post.css'
const Post = ({post}) => {
    console.log(post);

    let {title,id,body} = post;
  return (
    <div className="post">
        <h3>ID: {id}</h3>
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
  )
}

export default Post