const maskEmail = (email) => {
    const trimmedMail = email.trim()
    const username = trimmedMail.split('@')[0]

    if (username.length <= 2) {
        return trimmedMail
    }

    return `${trimmedMail[0]}***@${trimmedMail.split('@').pop()}`
}
