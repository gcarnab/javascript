import { useState, useEffect } from "react" //hook to change values reactive
import BlogList from "./BlogList"
import useFetch from "./useFetch" //custom hook

const Home = () => {
  const [name, setName] = useState("GCARNAB")
  const [age, setAge] = useState(50)
  //const [blogs, setBlogs] = useState(null)
  //const [isPending, setIsPending] = useState(true)
  //const [error, setError] = useState(null)
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs") //invoking custom hook
  /*
  const [blogs, setBlogs] = useState([
    {
      title: "This is my new website in REACT",
      body: "lorem ipsum...",
      author: "gcarnab",
      id: 1,
    },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ])
*/
  /*
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }
  */
 
  /*
  Runs at every render of the component
  Changing the state implies re-render of the component
  be careful to looping forever
  to use the function not always use dependencies adding parameters like , [name]
  using empty dependencies array [] the function is executed only first time
  useEffect(() => {
    //console.log('use effect ran');
    //console.log(blogs);
    alert("useEffect");
  }, [name])  
  //use asynchronous promises : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
  */

  const handleClick = (e) => {
    //console.log("By GCARNAB!", e)
    //alert("By GCARNAB!")
    setName("GCARNAB AGAIN")
    setAge(100)
  }

  const handleClickAgain = (name, e) => {
    console.log("Hello " + name, e.target)
    alert("Hello " + name)
  }

  return (
    <div className="home">
      {/* blogs={blogs} this is a prop used in BlogList.js component*/}
      {/*<BlogList blogs={blogs} title="Blogs list" handleDelete={handleDelete} />*/}
      {/*<BlogList
        blogs={blogs.filter((blog) => blog.author === "gcarnab")}
        title="Gcarnab's Blogs"
      />*/}
      {/* Conditional template rendering use of logical and */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="Blogs list" />}
      {/* Filtering blogs */}
      <h3>TEST ONLY</h3>
      <hr />
      <br />
      <button onClick={() => setName("luigi")}>change name</button> {name}
      <br />
      <br />
      <p>
        <button onClick={handleClick}>Click me</button> {name} is {age} years
        old
      </p>
      <br />
      <p>
        <button onClick={(e) => handleClickAgain("GCARNAB", e)}>
          Click me again
        </button>
      </p>
      <br />
    </div>
  )
}

export default Home
