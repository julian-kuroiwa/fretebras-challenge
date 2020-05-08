export default function toQueryString(param) {
  return typeof param === 'object'
    ? Object.keys(param)
        .map((key) => `${key}=${param[key]}`)
        .join('&')
    : new Error(`${param} must be an object`);
}
