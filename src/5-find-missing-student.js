const findMissingStudent = (yesterday, today) => {
  for (let i = 0; i < yesterday.length; i++) {
    if (!today.includes(yesterday[i])) {
      return yesterday[i]
    }
  }
  return ""
}