import React, {useState, useEffect} from 'react';
import './Movies.css'
import next1 from './next2.png'
import prev from './prev.png'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import Youtube from 'react-youtube'

var scrollLeft = 0
var scrollLeft1 = 0

function Movies({genre, header}) {
  const api_key = "7cb3d999bc5c40aff9267f5df16f01ce"
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=7cb3d999bc5c40aff9267f5df16f01ce&with_genres=${genre}`

  const imageUrl = "https://image.tmdb.org/t/p/w500/"
  
  const [path, setPath] = useState('')
  const [data, setData] = useState([])

  const [video, setVideo] = useState("")
  const [videoUrl, setVideoUrl] = useState("")

  useEffect (() => {
    async function getData(){
      try{
        const res = await fetch(url)
        const d = await res.json()
        const d1 = d.results
        setData(d1)
        setPath(imagePath)

      }catch(err){
      }

    }
    getData()
  })

  function handleVideo(){
  movieTrailer(video).then((res) =>{
      setVideoUrl(res)
    })
  }

  return (
    <>
    <div className="action_movies">
      <h2 className="header">{header}</h2>

      <div className="row1" id={"posters" + header}>
        {data.map(movies => (
          <img src={imageUrl + movies.poster_path} style={{width: '11%'}} alt={movies.title} id="action" className="act_movies" onClick={() => {
              setVideo(movies.title)
              handleVideo()
            }}/>
        ))}
      </div>

      <button className="next" onClick={() => {
          var c = document.getElementById("posters" + header).scrollLeft
          scrollLeft += 500
          document.getElementById("posters" + header).scrollLeft = scrollLeft
        }
      }><img src={next1} id="nextBtn"/></button>

      <button className="previous" onClick={()=>{
          var c = document.getElementById("posters" + header).scrollLeft
          scrollLeft -= 500
          document.getElementById("posters" + header).scrollLeft = scrollLeft
        }
      }><img src={prev} id="prevBtn"/></button>

    </div>
      { videoUrl && <ReactPlayer url={videoUrl} controls={true} id="player"/>}

    </>
  );

}

export default Movies;