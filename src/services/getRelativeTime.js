export function getRelativeTime(createdAt) {
  const currentTime = new Date();
  const storyTime = new Date(createdAt);

  const elapsedMilliseconds = currentTime - storyTime;
  const seconds = Math.floor(elapsedMilliseconds / 1000);

  if (seconds < 60) {
    return `${seconds}s ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes}m ago`;
  } else if (seconds < 86400) {
    // Less than a day
    const hours = Math.floor(seconds / 3600);
    return `${hours}h ago`;
  } else if (seconds < 604800) {
    // Less than a week
    const days = Math.floor(seconds / 86400);
    return `${days}d ago`;
  } else {
    const weeks = Math.floor(seconds / 604800);
    return `${weeks}w ago`;
  }
}
