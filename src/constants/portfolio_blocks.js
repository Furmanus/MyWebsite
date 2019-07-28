import {
    arenaRlPreview,
    calendarPreview,
    chessPreview,
    gameOfLifePreview,
    memoryPreview,
} from '../assets';

export const portfolioBlocks = [
    {
        name: 'Baby calendar',
        description: 'Application for managing data of your newly born child.',
        previewUrl: calendarPreview,
        link: 'https://child-calendar.herokuapp.com/',
    },
    {
        name: 'Chess online',
        description: 'Online, account based chess game. Play up to four games simultaneously.',
        previewUrl: chessPreview,
        link: 'https://battlechess.herokuapp.com/',
    },
    {
        name: 'Memory',
        description: 'Simple implementation of memory game.',
        previewUrl: memoryPreview,
        link: 'https://furmanus.github.io/Memory/',
    },
    {
        name: 'Game of life',
        description: 'My implementation of Conway\'s game of life.',
        previewUrl: gameOfLifePreview,
        link: 'https://furmanus.github.io/Game-of-life/',
    },
    {
        name: 'ArenaRl',
        description: 'Early playable version of dungeon crawler with randomly generated content.',
        previewUrl: arenaRlPreview,
        link: 'https://furmanus.github.io/Arena-RL/',
    },
];