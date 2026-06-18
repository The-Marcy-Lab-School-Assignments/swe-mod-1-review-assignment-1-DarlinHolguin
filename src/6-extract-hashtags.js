const extractHashtags = (post) => {
  const words = post.split(' ')
  const hashtags = []

  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === '#') {
      hashtags.push(words[i])
    }
  }

  return hashtags
}