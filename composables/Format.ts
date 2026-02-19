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

// For div IDs that uses event.name 
// Since event names have caps and spaces, make them work for the URL
// => This allows users in the home page to directly go to the specific events in the /events page
// ex: HARDCORE HEARTBREAK => hardcore-heartbreak
export const slugify = (text: string) => {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')        // spaces → dashes
        .replace(/[^\w-]+/g, '')     // remove special chars
}
