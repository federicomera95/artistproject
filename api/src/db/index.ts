import mongoose from 'mongoose';

import User from './models/User';

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI!, { keepAlive: true });

		console.log('💾 [MongoDB]: Connected to MongoDB');
	} catch (err) {
		console.log(err);
	}
};

export { connect, User };
