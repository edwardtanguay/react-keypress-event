import { useState } from 'react';
import './App.scss';

function App() {
	const [text, setText] = useState('click on page and type something');
	const handleKeyPress = (e) => {
		setText(e.key);
	}
	return (
		<div className="App" onKeyPress={(e) => handleKeyPress(e)} tabIndex="-1">
			<p className="showText">{text}</p>
		</div>
	);
}

export default App;