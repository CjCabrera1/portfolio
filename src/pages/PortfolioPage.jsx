// Importing all images
import ProjectCard from '../components/UI/ProjectCard'
import Chatter from '../assets/chatterbox.png'
import TripTix from '../assets/triptix.png'
import Sweatcheck from '../assets/sweatcheck.png'
import Footer from '../components/UI/Footer';
// Array of projects
const projects = [
  {
    name: 'TripTix',
    url: 'https://chart099.github.io/Bootcamp-Project-1/#',
    img:TripTix,
    github: 'https://github.com/chart099/Bootcamp-Project-1.',
  },
  {
    name: 'Chatterbox',
    url: 'https://grisly-skeleton-98871-e156069b1ed4.herokuapp.com',
    img:Chatter,
    github: 'https://github.com/kevinpatto/ChatterBox',
  },

  {
    name: 'Sweat Check',
    url: 'https://sweat-check-1af5b01668d2.herokuapp.com',
    img:Sweatcheck ,
    github: 'https://github.com/Seidler93/Sweat-Check',
  },

  
]

// React component for the Portfolio Page
export default function PortfolioPage() {
  return (
    <div classname="portfolio">
      {/* Container for project cards, using flex layout and centering */}
      <div className='d-flex justify-content-center flex-wrap py-3 bg-dark'>
      {/* Heading for the Projects section */}
      <h2 className=' project-header bg-dark text-white '>Projects</h2>
      <div className='d-flex justify-content-center flex-wrap py-3 bg-dark'>

        {/* Rendering the ProjectCard component and passing projects as a prop */}
        <ProjectCard projects={projects} />
      </div>
      </div>
      <Footer/>
    </div>
  );
}

