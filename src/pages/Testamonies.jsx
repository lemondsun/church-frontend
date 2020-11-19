import React from 'react'
import TestamonyArea from '../components/testamony/TestamonyArea'
import { Link } from "react-router-dom";

export default function Testamonies() {
  return (
    <div class='testamony-page'>
      <h1 class='heading-primary'>Members Testamonies</h1>
      <div class='testamony-page__main-area'>
      
    <TestamonyArea />
      <div class='testamony-page__main-area--link'>
      <Link>
    <h1 class='heading-secondary testamony-submission-text'>
          Click here to send us your testamony and you might see it featured here on this board.
  </h1>
        </Link>
        </div>
        </div>
    </div>
  )
}
