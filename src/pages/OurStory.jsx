import React, {useState} from 'react'
import MinistryModal from '../components/ourstory/MinistryModal'
import OutreachModal from '../components/ourstory/OutreachModal'

export default function OurStory() {
  const [modalShow, setModalShow] = React.useState(false);
  const [ministryName, setName] = useState(null);
  const [outreachName, setOutreach] = useState(null)
  const [outreachModalShow, setOutreachShow] =  useState(false)
 
  let modalFunction = (name) => {
    setModalShow(true);
    setName(name);
  }
  
  let outreachModalFunction = (name) => {
    setOutreachShow(true);
    setOutreach(name);
  }


  return (
    
    <div class='our-story-page'>
    <MinistryModal
    show={modalShow}
        onHide={() => setModalShow(false)}
        name={ministryName}
      />
      <OutreachModal
      show={outreachModalShow}
          onHide={() => setOutreachShow(false)}
          name={outreachName}
    />
      <div class='story-hero-section'>
      <img class='story-hero-section--image' src={require('../../src/images/BibleStudy.jpg')}/>
      <p class='story-hero-section__header'>
      <span class='story-hero-section__header--top heading-primary'>Our Story</span>
      <span class='story-hero-section__header--bottom heading-primary'>Our Song</span>
    </p>
    <div class='overlay'></div>
      </div>
      <div class='story-main-section'>
        <div class='story-main-section__info'>
          <p class='story-main-section__info--header body-header'>Our Story</p>
          <p  class='story-main-section__info--text body-text'>
          We endeavor to encourage individuals to wholly follow The Lord to promote independent, productive influential men and women of God who will, in turn, produce like-kind.<br/>
          We further endeavor to impact the unchurched in the community, nationally, and globally for Christ. We expect to see lives changed through prayer and personal appropriation of God's word in daily living. 
        </p>
          <p class='story-main-section__info--header body-header'>Our Ministries</p>
          <p class='story-main-section__info--option heading-secondary' onClick={() => modalFunction('Youth Ministries')}>Youth Ministries</p>
          <p class='story-main-section__info--option heading-secondary' onClick={() => modalFunction('Marrage Counciling')} >Marrage Counciling</p>
          <p class='story-main-section__info--option heading-secondary' onClick={() => modalFunction('Community Services')} >Community Services</p>
          <p class='story-main-section__info--option heading-secondary' onClick={() => modalFunction('Chirstian Educations')} >Chirstian Educations</p>
        </div>
        <div class='story-main-section__outreach'>
          <p class='story-main-section__outreach--header body-header'>Our Song</p>
          <p class='body-text'>Our foundational focus on outreach can be seen by our works around the world.</p>

          <p class='story-main-section__outreach--option heading-secondary' onClick={() => outreachModalFunction('DR Congo')}>DR Congo</p>
          <p class='story-main-section__outreach--option heading-secondary' onClick={() => outreachModalFunction('Mozambique')}>Mozambique</p>
          <p class='story-main-section__outreach--option heading-secondary' onClick={() => outreachModalFunction('Uganda')}>Uganda</p>
          <p class='story-main-section__outreach--option heading-secondary' onClick={() => outreachModalFunction('Tajikistan')}>Tajikistan</p>
          <p class='story-main-section__outreach--option heading-secondary' onClick={() => outreachModalFunction('Yemen')}>Yemen</p>

        </div>
      </div>
      
    </div>
  )
}
