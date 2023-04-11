const shuffle = (array: any[]): any[] => {
	const out = [...array];

	for (let i = 0; i < out.length; ++i) {
		const j = Math.floor(Math.random() * out.length);

		const replace = out[i];

		out[i] = out[j];
		out[j] = replace;
	}

	return out;
};

export default shuffle;
