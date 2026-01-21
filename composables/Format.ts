export const formatDate = (targetDate: string, noTime?: boolean) => {
    const date = new Date(targetDate);

    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        ...(noTime ? {} : {
            hour: 'numeric',
            hour12: true,
            timeZone: 'America/Chicago',
            timeZoneName: 'short',
        })
        
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date); 
}

export const extractYouTubeID = (urlLink: string) => {
    const url = new URL(urlLink);
    return url.searchParams.get('v');
}

export const useOpenMobileNav = () => useState<boolean>('openMobileNav', () => false);
