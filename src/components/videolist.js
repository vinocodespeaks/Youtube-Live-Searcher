import React from 'react';
import List from './list'
const VideoList =(props)=>{
  const list=props.video.map((video)=>{
    return <List select={props.select } key={video.etag} list={video} />
  })
  return(
    <ul className='col-md-4 list-group'>
     {list}</ul>
  );
}
export default VideoList;
