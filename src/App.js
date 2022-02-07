import './App.scss';

function App() {
	const handleKeyPress = (e) => {
		console.log(e);
	}
	return (
		<div className="App" onKeyPress={(e) => handleKeyPress(e)}>
			<p>Hello</p>
		</div>
	);
}

export default App;