const { exec } = require('child_process');

const scope = [
	'@design-schedule/client',
	'@design-schedule/canvas-common',
	'@design-schedule/books-konva',
	'@item-catalog/common',
	'@design-schedule/s-object-models',
	'@efficiently/common',
	'@efficiently/books-models',
];

const script = `npx lerna bootstrap --scope={${scope.join(',')}}`;

const process = exec(script);

process.stdout.on('data', data => {
	console.log(data);
});

process.stderr.on('data', data => {
	console.error(data);
});
