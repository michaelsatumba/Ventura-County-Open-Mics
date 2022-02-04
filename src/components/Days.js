function Days() {
	return (
		<div className="flex flex-col space-y-8 p-5">
			<div>
				<h1 className="text-3xl text-white font-bold underline">Monday</h1>
				<h3 className="text-blue-400">No open mics</h3>
				<img className="h-10 w-10" src={'./sadEmoji.png'} alt="sad" />
			</div>

			<div>
				<h1 className="text-3xl text-white font-bold underline">Tuesday</h1>
				<h3 className="text-gray-400">Thirsty Ox 10pm-12am?</h3>
			</div>

			<div>
				<h1 className="text-3xl  text-white font-bold underline">Wednesday</h1>
				<h3 className="text-gray-400">Ventura Harbor Comedy Club 7pm-9pm</h3>
				<h3 className="text-gray-400">Gigi's 9pm-10pm</h3>
			</div>

			<div>
				<h1 className="text-3xl text-white font-bold underline">Thursday</h1>
				<h3 className="text-gray-400">Fatty Vegan 8pm-9pm</h3>
				<h3 className="text-gray-400">Paddy's 10pm-11pm</h3>
			</div>

			<div>
				<h1 className="text-3xl text-white font-bold underline">Friday</h1>
				<h3 className="text-blue-400">No open mics</h3>
				<img className="h-10 w-10" src={'./sadEmoji.png'} alt="sad" />
			</div>

			<div>
				<h1 className="text-3xl font-bold underline">Saturday</h1>
				<h3 className="text-blue-400">No open mics</h3>
				<img className="h-10 w-10" src={'./sadEmoji.png'} alt="sad" />
			</div>

			<div>
				<h1 className="text-3xl font-bold underline">Sunday</h1>
				<h3 className="text-blue-400">No open mics</h3>
				<img className="h-10 w-10" src={'./sadEmoji.png'} alt="sad" />
			</div>
		</div>
	);
}

export default Days;
