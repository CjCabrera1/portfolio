// Importing the portrait image from the assets folder
import portrait from '../assets/profile.jpg';
import Footer from '../components/UI/Footer';
// React component for the About Me page
export default function AboutMePage() {
  return (
    // Container with padding, using flex layout
    <div>
      <p className='myname'>CJ Cabrera</p>
    <div className="p-4 about-me pt-4 bg-dark text-white">
      {/* Displaying the portrait image */}
      <img src={portrait} alt="Portrait" className="abt-me-port" />
      {/* Paragraph containing information about me */}
      <p className="about-me-p">
        {/* Professional details */}
        Full Stack DEV | JavaScript | React | CSS | Node | SQL |<br />
      Northwestern bootcamp Graduate with experienced using lanuages such a JavaScript to develop applications. Prior to the bootcamp, I have 6 years of coding experience starting in highschool and some of college.
        {/* Brief description */}
      
      </p>
    </div>
      <Footer/>
      </div>
  );
}
