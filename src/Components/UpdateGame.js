import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useContext} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {GlobaleState} from '../GlobalState'
import {motion} from 'framer-motion'


const UpdateGame = () => {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [trailer, setTrailer] = useState('')
    const [rating, setRating] = useState(0)
    const [categoryId, setCategoryId] = useState(0)
    const params = useParams()
    const [game, setGame] = useState([])
    console.log(params)
    useEffect(() => {
       const getGame = async () => {
            const res = await Axios.get(`http://localhost:5000/game/${params.id}`)
            setGame(res.data)
            setTitle(res.data.title)
            setDescription(res.data.description)
            setImage(res.data.image)
            //setTrailer(res.data.name.trailer)
            setRating(res.data.rating)
            setCategoryId(res.data.categoryId)
            console.log(res)
       }
       getGame()
    }, [])   
    console.log(game)

    const update = async (e) => {
        e.preventDefault();
        
        const res = await Axios.put(`http://localhost:5000/game/${params.id}`, {
            title,
            description,
            image,
            trailer
        })
        console.log(res.data)
        //history.push('/')
        window.location.href='/'

    }



    return (
        <>
            <h2 className="py-3 text-center">Update Game</h2>
            <div className="row py-3">
                <motion.div className="col-md-5 offset-md-2"
                  initial={{x: -200}}
                  animate={{x: 0}}
                  transition={{duration: 0.5}}
                >
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={update}>
                                <div className="form-group pb-3">
                                    <input type="text" placeholder="Name" value={title} onChange={e => setTitle(e.target.value)} className="form-control"/>
                                </div>
                                <div className="form-group pb-3">
                                    <textarea type="text" placeholder="Description" rows="3" value={description} onChange={e => setDescription(e.target.value)} className="form-control"/>
                                </div>
                                <div className="form-group pb-3">
                                    <input type="text" placeholder="Genre" value={trailer} onChange={e => setTrailer(e.target.value)} className="form-control"/>
                                </div>
                                <div className="form-group pb-3">
                                    <textarea type="text" placeholder="Image" value={image} rows="2" onChange={e => setImage(e.target.value)} className="form-control"/>
                                </div>
                            <button className="btn btn-success btn-block mx-auto">Update</button>
                            </form>
                        </div>
                    </div>
                </motion.div> 
                <motion.div className="col-md-4"
                initial={{x: 200}}
                  animate={{x: 0}}
                  transition={{duration: 0.5}}
                >
                    <div className="card card-body text-center">
                        <img src={image === '' ? 'https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg' : image } alt="" className="card-img-top" style={{height:"320px", objectFit:"contain"}} />
                        <h3> {title === '' ? 'Write an Name for The Game' : title} </h3>
                        <p> {description === '' ? 'Write Description for This Game' : description} </p>
                        <h5> {trailer === '' ? "Genre the Game ?" : trailer} </h5>
                    </div>
                </motion.div>
            </div>
            
        </>
    )
}

export default UpdateGame
