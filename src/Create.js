import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
   const[title,setTitle]=useState('')
   const[body,setBody]=useState('')
   const[author,setSelect]=useState('mario')
   const[isPending,setIspending]=useState(false)
   const history=useHistory();


   const handleSubmit=(e)=>{
     e.preventDefault()
     const blog={title,body,author}
     fetch('http://localhost:8000/blogs/',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(blog)
     }).then(()=>{
        console.log('new blog added')
        setIspending('false')
        history.push('/')
     })
   }
    return ( 
        <div className="create">
           <h2 id="fr">Add a New Blog</h2>
           <form onSubmit={handleSubmit}>
              <label>Blog title:</label>
              <input 
              type="text"
              required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog Body:</label>
              <textarea required value={body} onChange={(e)=>setBody(e.target.value)}>
              </textarea>
              <label>Blog.author:</label>
              <select value={author} onChange={(e)=>setSelect(e.target.value)}>
                 <option value="mario">mario</option>
                 <option value="luigi">luigi</option>
              </select>
              {!isPending &&<button id="btn">Add blog</button>}
              {isPending &&<button id="btn" disabled>Addinging blog...</button>}
              <p>{title}</p>
              <p>{body}</p>
              <p>{author}</p>
           </form>
        </div>
     );
}
 
export default Create;