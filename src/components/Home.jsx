import React from 'react';

const QuoteStyles = {
  color: '#baccc1',
  border: '10px inset #3a5741',
  padding: '30px',
  margin: '50px',
  fontStyle: 'italic',
  fontSize: '30px'
  
};
const TomWaitsStyles = {
  color: '#093b14',
  textAlign: 'right',
  paddingRight: '50px',
  fontSize: '30px'
};
const BioStyles = {
  backgroundColor: '#3b1708',
  color: '#c2bbb8',
  border: '4px solid #2B2118',
  padding: '20px',
  margin: '50px',
  fontSize: '30px',
  fontFamily: 'Arial'
};
function Home() {
  return (
    <div>
      <h2 style={QuoteStyles}>The world is a hellish place, and bad writing is destroying the quality of our suffering.</h2>
      <h3 style={TomWaitsStyles}>~~~Tom Waits</h3>
      <div>
        
      </div>
      <div>
        <p style={BioStyles}><em>We are a family run and recently remodeled Portland bar catering to a small but vocal market of annoying midwestern transplants who dig the politics and forests of the PNW, but miss the chill vibes and indisuputably superior craft beers of the Great Lakes region. We offer a rotating selection of hard-to-find Midwest craft beers on tap, at Midwest prices. We also offer a full-bar because serving nothing but beer is kinda pretentious. Our vibes are maintained with lots of dead lightbulbs, peeling wallpaper, linoleum flooring, and an analog jukebox with selections like CCR, Bryan Adams, and Prince that will most likely steal all of your quarters. The pool table is well-maintained and our creepy old pool guys are appropriatly monitered; when spotted giving unsolicited advice they are upcharged on drinks and, if they fail to cease and desist, photographed for the bathroom Wall of Shame. The bathrooms are pretty gross, but we are diligent in removing all genres of trite/corny phrases about loving yourself from the bathroom stall walls. Our outdoor patio is covered, heated, smoker-friendly, and sloped in the  ping-pong table area--1 game limit for bros who played ping-pong competitively in college. We also have a 1/2 operational Buck Hunter that will steal at least 1/2 of your quarters. We do not and will never offer darts or pinball because they are terrible games.</em></p>
      </div>
      <hr />
      <div>
      </div>
    </div>
  );
}
export default Home; 