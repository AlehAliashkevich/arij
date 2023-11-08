const { exec } = require('child_process');

const scope = [
	'@arij/common',
];

const script = `npx lerna bootstrap --scope={${scope.join(',')}}`;

const process = exec(script);

process.stdout.on('data', data => {
	console.log(data);
});

process.stderr.on('data', data => {
	console.error(data);
});
