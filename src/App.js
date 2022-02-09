import { useState, useRef, useEffect } from 'react';
import './App.scss';

function App() {
	const [text, setText] = useState('start typing');
	const appElem = useRef(null);

	useEffect(() => {
		appElem.current.focus();
	}, []);

	const handleKeyPress = (e) => {
		setText(e.key);
	}
	return (
		<div className="App" ref={appElem} onKeyPress={(e) => handleKeyPress(e)} tabIndex="0">
			<p className="showText">{text}</p>
		</div>
	);
}

export default App;