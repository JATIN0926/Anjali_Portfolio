import React from 'react'

const ProjectSection = ({img1 , img2 , title1 , desc1 , title2 , desc2 , link1 , link2}) => {
  return (
     <div className="project-section">
    <div className="card top-left">
        <div className="project-img-div">
          <img src={img1} alt="" className='project-img'  />
          <a href={link1}><h3 className="explore-btn">Explore</h3></a>
        </div>
        <div className="project-content">
          <h3 className='project-title'>{title1}</h3>
          <h4 className='project-desc'>{desc1}</h4>
        </div>
    </div>
    <div className="card right-bottom">
        <div className="">
          <img src={img2} alt="" className='project-img' />
          <a href={link2}><h3 className="explore-btn" style={{left : "45%"}}>Explore</h3></a>
        </div>
        <div className="project-content">
          <h3 className='project-title'>{title2}</h3>
          <h4 className='project-desc'>{desc2}</h4>
        </div>
    </div>
  </div>
  )
}

export default ProjectSection