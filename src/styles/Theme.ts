export const theme = {
    colors: {
        primaryBg: '#191919',
        colorMain: '#D9D9D9',
        colorFont: '#A7A7A7',
        titleFont: '#CCCCCC',
        colorLink: '#FFFFFF',
        accentColor: '#42446E',
        projectBg: '#363636',
        colorActive: '#199c9f'
    },

    _colors: {
        darkTheme: {
            primaryBg: '#191919',
            colorMain: '#D9D9D9',
            colorFont: '#A7A7A7',
            titleFont: '#CCCCCC',
            colorLink: '#FFFFFF',
            accentColor: '#42446E',
            projectBg: '#363636',
            colorActive: '#199c9f'
        },
        lightTheme: {
            primaryBg: '#FFFFFF',
            colorMain: '#42446E',
            colorFont: '#666666',
            titleFont: '#42446E',
            colorLink: '#000000',
            accentColor: '#666666',
            projectBg: '#fdf9f9',
            colorActive: '#199c9f'
        }
    },

    navigateItems: [
        { title: 'Home',
          href: 'home'
        },
        { title: 'About',
            href: 'about'
        },
        { title: 'Tech Stack',
            href: 'techStack'
        },
        { title: 'Projects',
            href: 'projects'
        },
        { title: 'Contact',
            href: 'contact'
        }
    ],

    SocialLinkItems: [
        {name: 'github', viewbox: "0 0 30 30"},
        {name: 'twit', viewbox: "0 0 30 30"},
        {name: 'linkedin', viewbox: "0 0 30 30"},
        {name: 'telegram', viewbox: "0 0 512 512"},
        {name: 'vk', viewbox: "0 0 98 98"}
    ],

    footerItems: [
        { title: '+91 12345 09876'},
        { title: 'info@example.com'}
    ],
    // skillItems: ['typeHTML', 'typeCSS', 'typeJS', 'typeReact', 'typeBootstrap', 'typeTailwind', 'typeVSCode', 'typeSAAS', 'typeGit', 'typeGitHub', 'vector', 'greensock'],

    media: {
        tablet: 'screen and (max-width: 768px)',
        mobile: 'screen and (max-width: 576px)',
    }

}; 