export function formatDateString(dateToFormat: string | Date): string {
    const date = new Date(dateToFormat);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son de 0 a 11
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export function formatDataSeleccionada(dateToFormat: string | Date): string {
    const date = new Date(dateToFormat);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son de 0 a 11
    const year = date.getFullYear();
    return `${year}-${month}-${day}00:00`;
}

export function formatTimeString(dateToFormat: string | Date): string  {
    const date = new Date(dateToFormat);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}