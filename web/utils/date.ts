export function formatDate(inputDate: string | undefined): string {
	if (!inputDate) {
		return '';
	}
	// Parse the input date string to a Date object
	const date = new Date(inputDate);

	// Array of month abbreviations
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	// Extract day, month, and year
	const day = date.getDate();
	const month = monthNames[date.getMonth()];
	const year = date.getFullYear();

	// Construct the desired date format
	return `${month} ${day}, ${year}`;
}
