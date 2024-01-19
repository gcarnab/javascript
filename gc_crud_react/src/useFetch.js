import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

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
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("Error: could not fetch the data for that resource")
          }
          return res.json()
        })
        .then((data) => {
          setIsPending(false)
          setData(data)
          setError(null)
        })
        .catch((err) => {
          // auto catches network / connection error
          setIsPending(false)
          setError(err.message)
        })
    }, 1000)
  }, [url])

  return { data, isPending, error }
}

export default useFetch
