import chuck from '../../images/chuck.png'

function Quote({quote}) { 

  return (
    <div className="quote">
      <img src={chuck} alt='Chuck' />
      <div className="quoteContent">
        {quote ? <p>{quote}</p> : <p>Loading quote...</p>}
      </div>
    </div>
    
  )
}

export default Quote