function dummy(blogs) {
  return 1;
}

function totalLikes(blogs) {
  return blogs.reduce((prev, current) => prev + current.likes, 0);
}

function favoriteBlog(blogs) {
  const favorite = blogs.reduce((prev, current) => {
    return prev.likes < current.likes ? current : prev;
  });
  const { title, author, likes } = favorite;
  return { title, author, likes };
}

module.exports = { dummy, favoriteBlog, totalLikes };
