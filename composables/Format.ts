export const formatDate = (targetDate: string) => {
    const date = new Date(targetDate);

    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        hour12: true,
        timeZone: 'America/Chicago',
        timeZoneName: 'short',
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date); 
}