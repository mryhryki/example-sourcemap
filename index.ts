function main(): void {
  console.log('START')
  throw new Error('DUMMY')
}

try {
  main()
} catch (err) {
  console.error('ERROR:', err)
}
