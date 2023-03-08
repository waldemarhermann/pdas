import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

const App = () => {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal Digital Assistants</p>
        </div>
      </section>

      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-3'>
              <ProfileCard 
              image={AlexaImage} 
              title='Alexa' 
              handle='@alexa99' 
              description='Alexa was created by Amazon and helps you to buy things.'
              />
            </div>
            <div className='column is-3'>
              <ProfileCard 
              image={CortanaImage} 
              title='Cortana' 
              handle='@cortana32' 
              description='Cortana was created by Microsoft and helps you to find things.'
              />
            </div>
            <div className='column is-3'>
              <ProfileCard 
              image={SiriImage} 
              title='Siri' 
              handle='@siri01' 
              description='Siri was created by Apple and helps you to make your life easier.'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
