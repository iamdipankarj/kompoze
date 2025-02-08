/**
 * Create initials from a name or any
 * space separated string
 *
 * @example "John Doe" becomes "JD"
 * @param name Space separated ame
 * @returns {string} The initials from the input
 */
export const getUserInitials = (name: string | undefined): string => {
  if (!name) {
    return ''
  }
  const nameArr = name.split(' ').filter(_ => _ !== '')
  if (nameArr.length > 1) {
    return `${nameArr[0][0].toUpperCase()}${nameArr[1][0].toUpperCase()}`
  }
  return nameArr[0][0].toUpperCase()
}

/**
 * Captialize a string
 *
 * @param {string} value Text input
 * @returns {string} result
 */
export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

/**
 * @todo Add better logic for ref handling
 * @param value any
 * @returns Boolean
 */
export const isValidValue = (value: any) => (value !== '' && value !== null && value !== undefined)
