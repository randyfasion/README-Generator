//array of questions

exports.questions = [
    {
        type: 'input',
        name: 'name',
        message: "please enter project name"
    },
    {
        type: 'input',
        name: 'description',
        message: "please enter a brief description"
    },
    {
        type: 'input',
        name: 'installation',
        message: "please enter installation instructions"
    },
    {
        type: 'input',
        name: 'usage',
        message: "please enter usage information"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "please enter contribution guidelines"
    },
    {
        type: 'input',
        name: 'test',
        message: "please enter test intructions"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a licence type: ',
        choices: [
            'JSON',
            'MIT License',
            'None'
        ],
        default: 'None'
    },
    {
        type: 'input',
        name: 'username',
        message: "please enter GitHib username"
    },
    {
        type: 'input',
        name: 'email',
        message: "please enter email address"
    }
];
