import { useEffect, useState } from 'react'

function Categories({setQuote}) { 

  const [categories, setCategories] = useState(null)

  useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
              .then(res => res.json())
                  .then(res => setCategories(res))
  }, [])
  
  async function newQuote(category) { 
    const result = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
              .then(res => res.json())
                  .then(res => res.value)
    return result
  }

  async function randomQuote() { 
    const result = await fetch(`https://api.chucknorris.io/jokes/random`)
              .then(res => res.json())
                  .then(res => res.value)
    return result
  }

  return (
    <div className="categories">
      <h1>Categories</h1>
      {categories && categories.map((category, index) => <button key={index} onClick={() => newQuote(category).then(res => setQuote(res)) }>{category}</button>)}
      <button key={Math.random()} onClick={() => randomQuote().then(res => setQuote(res))}>random</button>
    </div>
  )
}

export default Categories