interface InfoCompany{
    logo: string,
    content: string,
    id: number
    href: string
}

export const infoCompany: InfoCompany[] = [
    {
        id: 1,
        href: 'https://endrock.software/',
        logo: 'https://cdn-icons-png.flaticon.com/128/8304/8304806.png',
        content: 'home' 
    },
    {
        id: 2,
        href: 'https://instagram.com/',
        logo: 'https://cdn-icons-png.flaticon.com/128/1384/1384031.png', 
        content: 'instagram'
    },
    {
        id: 3,
        href: 'https://facebook.com/',
        logo: 'https://cdn-icons-png.flaticon.com/128/1384/1384005.png', 
        content: 'facebook'
    }
]