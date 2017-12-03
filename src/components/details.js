import React from 'react';
const Details =(props)=>
{
  if(!props.video){
    console.log('fsdsf');
    return (<div>loadinnnnnnnggggg... wait for a second</div>);
  }
  const i='https://www.youtube.com/embed/'+props.video.id.videoId;


  return(


    <div className="video-detail col-md-8">
    <div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src={i}  />
    </div>
  <div className="details">
    <div>{props.video.snippet.title}</div>
    <div>{props.video.snippet.description}</div>
    </div>
    </div>



  );
}
export default Details;
