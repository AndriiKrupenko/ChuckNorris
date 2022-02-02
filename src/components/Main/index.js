import { useEffect, useState } from 'react'
import Categories from '../Categories'
import Quote from '../Quote'

function Main() { 
  const [quote, setQuote] = useState(null)

  useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
                .then(res => res.value)
                    .then(res => setQuote(res))
    }, [])

  return (
    <div className='main'>
      <Categories setQuote={setQuote}/>
      <Quote quote={quote}/>
    </div>
  )
}

export default Main