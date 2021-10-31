
export const ProjectData=[
    {
        id: 1,
        title: 'Personal Website',
        about: 'A website to show builts I have done and how I did them, also to summarize the skills I have and to have a site contact. I have used React for developing the website and css vanilla to style it.',
        tags:['React', 'CSS'],
        demo: "http://wwww.carlosdaniel.xyz",
        github: '#',
        image: require('../../assets/personalwebsitecarlosdaniel.png').default
    },
    {
        id: 2,
        title: 'CRUD with Laravel',
        about: "In this project you can display the different users you have in your DB (in this case I'm using Mysql), create them, see their details, and either modify them or delete them. For developing it I have used Laravel and I have virtualized in docker containers phpmyadmin, nginx and mysql.",
        tags:['Laravel', 'MySql'],
        github: 'https://github.com/charls96/laravel0',
        image: require('../../assets/laravelcrud.png').default
    }
]