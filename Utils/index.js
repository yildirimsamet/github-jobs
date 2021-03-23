export const cityStateTextHandler = (text) => {
  return text.replace(/ /gi, "+"); //girdi: New York çıktı: New+York
};
export const getDiffInDates = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.round(
    (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
  ).toFixed(0);
  const diffInHours = Math.round(
    (now.getTime() - date.getTime()) / (1000 * 3600)
  ).toFixed(0);
  const diffInMinutes = Math.round(
    (now.getTime() - date.getTime()) / (1000 * 60)
  ).toFixed(0);

  if (diffInDays > 7 && diffInDays < 365) {
    return (
      <>
        <span>{parseInt(diffInDays / 7)} weeks ago</span>
      </>
    );
  } else if (diffInDays != 0) {
    return (
      <>
        <span>{diffInDays} days ago</span>
      </>
    );
  } else if (diffInHours != 0) {
    return (
      <>
        <span>{diffInHours} hours ago</span>
      </>
    );
  } else {
    return (
      <>
        <span>{diffInMinutes} minutes ago</span>
      </>
    );
  }
};
