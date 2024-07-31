export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const truncateAddress = (address: string) => {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
}
