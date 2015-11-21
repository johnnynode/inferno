export default function sanitizeValue(element, value, propertyName, attributeName) {
	if(value == null || value === false) {
		element.removeAttribute(attributeName);
		return;
	}
	if(propertyName !== null) {
		element[propertyName] = value;
	} else {
		element.setAttribute(attributeName, value);
	}
}