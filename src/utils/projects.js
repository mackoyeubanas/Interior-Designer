import React from 'react';
import project1 from '../assets/img/project-1.jpg';
import project2 from '../assets/img/project-2.jpg';
import project3 from '../assets/img/project-3.jpg';
import project4 from '../assets/img/project-4.jpg';
import project5 from '../assets/img/project-5.jpg';
import project6 from '../assets/img/project-6.jpg';

const projects = [
    {
        id: 0,
        img1: project1,
        img2: project2,
        alt: 'Project 1',
        title: 'Classic room',
        description: [
            <p className="description" key={0}>
                A classic living room design that combines modern elegance meets tradition. In this big space
                We uses delicate a variety of white, cream, and gold in the living room to create a feeling of elegance and harmony. Large windows in the living area allow natural light to come in, making the room bright and airy. The classic living room is ideal for relaxing, meeting friends, and host gatherings for the family.
                I feel proud of this project because it successfully combined design and benefit to create a one-of-a-kind surroundings.
            </p>
        ]
    },
    {
        id: 1,
        img1: project4,
        img2: project3,
        alt: 'Project 2',
        title: 'Scandavian Living room',
        description: [
            <p className="description" key={0}>
                Light colors, natural materials, and minimalism describe Scandavian design. We selected white and gray a variety in our design to create an ambient and comfortable environment.
                Warmth is offered by wood floors and furniture, while comfort is provided by Scandinavian-style decorations such as soft blankets and the cushions. The room is useful and well-thought-out, resulting in an excellent identify for leisure and relaxation. A Scandinavian living room promotes simplicity and naturalness.
            </p>
        ]
    },
    {
        id: 2,
        img1: project5,
        img2: project6,
        alt: 'Project 3',
        title: 'Rustic bedroom',
        description: [
            <p className="description" key={0}>
                Rustic bedrooms, not to be confused with shabby chic or French country style spaces, are the ideal place to catch some zzz's: They're laidback, calming, and grounded. In other words, rustic style is an ideal direction to take in a room that's all about rest and relaxation. Whether you live in an architecturally rustic home (think exposed beams, unpretentious materials, and plenty of cozy spots), or you simply love the look of mountain homes, farmhouses, and off-the-grid cabins and want to recreate that aesthetic in your own bedroom, the rustic bedroom ideas and designer examples ahead will get you there in no time.
            </p>
        ]
    }
];

export default projects;
