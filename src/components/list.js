import React from 'react'
const List =(props)=>
{


//const img=video.snippet.tumbnails.default.url;
console.log(props.list);
  return(

<li  onClick={()=>props.select(props.list)} className='list-group-item f'>
    <div className='video-list-left media'>
    <div className="media-right">
<img className="media-object" src={props.list.snippet.thumbnails.default.url}  />
    </div>
    <div className="media-body">
    <div className="media-heading">{props.list.snippet.title}</div>
    </div>
    </div>
    </li>
  )
}
export default List;
