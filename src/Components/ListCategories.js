import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const ListCategories = ({gamesFiltred}) => {
    const [category, setCategory] = useState([])


    const categories = async () => {
        const res = await axios.get('http://localhost:5000/category')
        setCategory(res.data)
    }

    useEffect(() => {
        categories() 
    }, [])


    return (
        <ul className="list-group list-group-flush ">
            {category.map(item => (
                <div key={item.id}>
                 <li className="list-group-item bg-transparent text-white" style={{cursor: "pointer"}} onClick={() => gamesFiltred(item.id)} > {item.name} </li>
                </div>
            ))}
        </ul>
    )
}

export default ListCategories
