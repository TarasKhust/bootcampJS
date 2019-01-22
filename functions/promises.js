//Callback
const getDataCallback = (callback) => {
	setTimeout(() => {
		callback(undefined, 'This is the data');
	}, 2000);
};

getDataCallback((err, data) => {
	if (err) {

	} else {console.log(data);}
});

//Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`This is the my succes ${data}`);
		// reject('This is my promise error');
	}, 2000);
});

const myPromise = getDataPromise(123);

myPromise.then((data) => {
	data;
}, (err) => {
	err;
});