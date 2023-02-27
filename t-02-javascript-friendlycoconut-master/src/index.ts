// Types

type Point = [number, number];

type Coordinates = [Point, Point] | [];

type Geometry = {
	type?: string;
	coordinates: Coordinates;
};

type Dimensions = {
	width: number;
	height: number;
};

/**
 * Calculates dimensions of an object based on its coordinates.
 * @param {Coordinates} coordinates Array of points defined as [number, number] tuple
 * @return {Dimensions} Non-negative width and height (representing a diagonal of an object)
 */
const getDimensions = () => {}; // TODO: ...

/**
 * Checks whether provided object is valid.
 *
 * - Both square and rectangle must have non-zero width and height
 * - Square must have equal width and height
 *
 * @param {Geometry} geometry Object to check
 * @return {string} Formatted message
 */
const isValidGeometry = () => {}; // TODO: ...

// Examples

console.log(
	isValidGeometry({
		coordinates: [
			[1, 2],
			[4, 5]
		]
	})
);

console.log(
	isValidGeometry({
		type: 'RECTANGLE',
		coordinates: [
			[1, 2],
			[4, 7]
		]
	})
);

console.log(
	isValidGeometry({
		type: 'SQUARE',
		coordinates: [
			[1, 2],
			[2, 5]
		]
	})
);

console.log(
	isValidGeometry({
		coordinates: [
			[3, 3],
			[3, 5]
		]
	})
);

console.log(
	isValidGeometry({
		type: 'RECTANGLE',
		coordinates: []
	})
);
