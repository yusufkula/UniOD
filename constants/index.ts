export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'open_day_reminder', label: 'Open Day Reminder' },
    { href: '/', key: 'favourites', label: 'Favourites' },
    { href: '/', key: 'my_account', label: 'My Account' },
];

export interface guardianDataStructure {
    rank: number;
    uniName: string;
    score: number;
    satisfiedWithTeaching: number;
    averageEntryTariff: number;
    careerAfter15Months: number;
}

export const websites = {
    ucasCodeURL: 'https://en.wikipedia.org/wiki/List_of_UCAS_institutions',
    UniversityRankURL: 'https://www.thecompleteuniversityguide.co.uk/league-tables/rankings',
    OpenDaysURL: 'https://www.studentcrowd.com/page/university-open-days',
    guardian: "https://www.theguardian.com/education/ng-interactive/2023/sep/09/the-guardian-university-guide-2024-the-rankings"
};
