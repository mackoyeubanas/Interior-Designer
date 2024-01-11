import React from 'react';
import { CiCalculator2 } from 'react-icons/ci';
import { GiLightBulb } from 'react-icons/gi';
import { LuHeartHandshake } from 'react-icons/lu';

const advantages = [
    {
        "id": "0",
        "icon": <GiLightBulb className="advantage-icon" />,
        "title": 'Creativity',
        "description":
            'I try to approach each project with creativeness with a view to make ordinary areas into portions of elegance. The designs are filled with unique details and unusual ideas. The creativity helps me to design spaces that are both useful and artistically pleasing.'
    },
    {
        "id": "1",
        "icon": <CiCalculator2 className="advantage-icon" />,
        "title": 'Scrupulousness',
        "description":
            'Because my work is my business card, every detail important. We carefully plan, design, and build each interior to represent not just beauty, but also worth. We make sure that the materials are carefully chosen and that the workmanship is of the best quality.'
    },
    {
        "id": "2",
        "icon": <LuHeartHandshake className="advantage-icon" />,
        "title": 'Communication',
        "description":
            'I value communicating successfully. I carefully consider your goals, desires, and concerns in order to create something that precisely reflects your vision. I am able to work together effectively and adapt my approach to your expectations due to open and transparent communication.'
    }
];

export default advantages;
