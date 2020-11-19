import React, { useState } from "react";
import Cards from "../components/events/Cards";

export default function Events() {
  const [firstEventHighlights, updateEventHighlights] = useState({
    eventImage: "PraiseEvent",
    eventTitle: "Gospel Concert",
  });
  const [secondEventHighlights, updateSecondEventHighlights] = useState({
    eventImage: "BibleStudy",
    eventTitle: "Bible Study",
  });

  return (
    
    <div class="events events-grid">
      <div class='events-main-section'>
      <Cards  highlights={firstEventHighlights} />
        
        </div>
    </div>
    
  );
}
