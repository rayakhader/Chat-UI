export function formatDate(dateTime: Date) {
    const hours = dateTime.getHours().toString().padStart(2, '0');
    const minutes = dateTime.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;
    return time;
}