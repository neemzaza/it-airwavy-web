import React, {useState} from 'react'

export default function Eiei() {
    const [Link, setLink] = useState(null)
    return (
        <div className="container">
            <br/><br/>
            <input onChange={e => {
                setLink(e.target.value)
            }} placeholder="URL HERE"/>
            <br/><br/>
            <a className="btn btn-success" href={Link} >Search: {Link}</a>
        </div>
    )
}
