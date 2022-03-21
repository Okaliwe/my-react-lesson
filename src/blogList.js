import { Link } from "react-router-dom"

 const BlogList=({blogs,title})=>{
    return(
      <div className="blog-Preview">
          <h2>{title}</h2>
           {blogs.map((blog)=>(
          <div className='preview'key={blog.id}>
             <Link to={`/blogs/${blog.id}`}>
             <h2 id='hea'>{blog.title}</h2>
               <p id='author'>Written by {blog.author}</p>
             </Link>
           </div>
            ))}
      </div>
       
    )
 }
    //  const blogs=props.blogs
    //  const title=props.title
    //  const handleDelete=props.handleDelete
    
    
 export default BlogList

 