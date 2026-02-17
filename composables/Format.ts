export const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    // Use Intl.DateTimeFormat for human-readable month/day/year
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);


}

export const extractYouTubeID = (urlLink: string) => {
    const url = new URL(urlLink);
    return url.searchParams.get('v');
}

export const useOpenMobileNav = () => useState<boolean>('openMobileNav', () => false);
