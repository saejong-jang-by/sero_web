import logo from './logo.svg';
import mainLogo from'./assets/sero_logo.png';

import './App.css';

function App() {
  return (
    <div className="App">
			<section>
				<img src={mainLogo} height='300px' width='300px'/>
			</section>

			<section style={{backgroundColor: `#F0F0F0`}}>
				<br/>
				<br/>
				<br/>
				<br/>
				<h1 style={{height: `15rem`, textAlign:`center`, color: `#BEBEBE`, "font-size": `5rem`}}>Sero Language</h1>
			</section>

			<section>
				<h4>Help us build better platform for all the language learners!</h4>
				<h1><a style={{textAlign:`center`, "text-decoration": `none`}} href={'https://byu.az1.qualtrics.com/jfe/form/SV_9SvEcvBwJCH39fU'}>Take a survey</a></h1>
			</section>
    </div>
  );
}

export default App;
