import service1 from '../assets/img/tunnel.jpg';
import service2 from '../assets/img/plan.jpg';
import service3 from '../assets/img/blackstairs.jpg';
import service4 from '../assets/img/windows.jpg';

const services = [
    {
        "id": "0",
        "img": "service1",
        "alt": "Conversation",
        "circle1": 'circle circle-1',
        "circle2": 'circle circle-2',
        "title": 'Step 1: Initial conversation and vision presentation',
        "description":
            'At this stage, we discuss your expectations, preferences and vision of the interior you want to create. I will find out exactly what your needs, lifestyle and aesthetic preferences are. This will allow me to better understand how I can tailor the design to you.'
    },
    {
        "id": "1",
        "img": "service2",
        "alt": 'Analyze',
        "circle1": 'circle circle-3',
        "circle2": '',
        "title": 'Step 2: Space analysis and design proposal',
        "description":
            'After collecting information from the first conversation, I begin to analyze the space with which I will work. He prepares an initial project proposal for you, taking into account all the elements. At this stage, I present preliminary ideas so that we can clarify the concept together and adapt it to your expectations.'
    },
    {
        "id": "2",
        "img": "service3",
        "alt": 'Quotation',
        "circle1": '',
        "circle2": 'circle circle-4',
        "title": 'Step 3: Detailed quote',
        "description":
            'After better understanding your preferences, I start preparing a project quote. It takes into account the estimated costs and implementation time of the project. We also provide you with a work schedule so you know when you can expect each stage of the project.'
    },
    {
        "id": "3",
        "img": "service4",
        "alt": 'Signing a contract',
        "circle1": 'circle circle-5',
        "circle2": 'circle circle-6',
        "title": 'Step 4: Signing the contract and starting work',
        "description":
            'When the quote is accepted, we proceed to signing the contract. After signing the contract, I start working on your project. You will be kept informed about progress and will have the opportunity to make any comments or changes.'
    }
];

export default services;
