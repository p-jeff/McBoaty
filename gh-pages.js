import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/p-jeff/McBoaty.git', // Update to point to your repository
        user: {
            name: 'Johannes', // update to use your name
            email: 'lotzejohannes@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);