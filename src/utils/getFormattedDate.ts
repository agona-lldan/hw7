export default function getFormattedDate(time: number) {
  return new Date(time).toLocaleString("RU-ru", {
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
}
