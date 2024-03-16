import * as React from 'react'
import { useNavigate } from 'react-router-dom'

type DetailPages = {

}

const MovieDetailPages: React.FC<DetailPages> = () => {
    return (
        <div className="container--root">
            <div className="container">
                This is the Movie Details Page
            </div>
        </div>
    )
}
export default MovieDetailPages;