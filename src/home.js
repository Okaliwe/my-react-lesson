
import BlogList from "./blogList";
import useFetch from "./useFetch";
const Home = () => {
   const{data,isPending,error}=useFetch('http://localhost:8000/blogs')
        
    // const[name,setName]=useState('grace')
    // const[age,setAge]=useState(25)  
    // const handleClick =()=>{
    //     setName('Amara')
        // setAge(40)

    //     console.log('hello, ninja')
    // }
    return ( 
        <div className="home">
            {error && <div>loading...</div>}
            {isPending &&<div>Is Loading....</div>}
          {data && <BlogList blogs={data} title='All blogs'/>}
           

           
        </div> 
     );
}
 
export default Home;