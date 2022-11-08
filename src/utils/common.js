export const getTitleSlice = (title, len) =>
  title?.length > len ? `${title.slice(0, len - 1)}...` : title;
