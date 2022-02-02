import { useEffect, useState } from 'react'
import noImg from '../../images/no-img.jpg'

function Header() {
    const [avatar, setAvatar] = useState(null)

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
                .then(res => res.icon_url)
                    .then(res => setAvatar(res))
    }, [])

    return (
        <div className='header'>
            <div className='headerContent'>
                {avatar ?
                    <img src={avatar} alt='avatar' />
                    : <img src={noImg} alt='avatar' />}
                <p>Chuck Norris</p>
            </div>
        </div>
    )
}

export default Header