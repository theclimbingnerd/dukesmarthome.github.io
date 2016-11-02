/* Data for people */
var execs = [{
    name: 'Lauren Shum',
    title: 'President',
    picture: 'lauren.JPG'
}, {
    name: 'Harvey Shi',
    title: 'Vice-President',
    picture: 'harvey.JPG'
}, {
    name: 'Ani Jonnavithula',
    title: 'Treasurer',
    picture: 'ani.JPG'
}, {
    name: 'Emilia Chojkiewicz',
    title: 'House Manager',
    picture: 'emilia.JPG'
}, {
    name: 'Shomik Verma',
    title: 'Communications Director',
    picture: 'shomik.JPG'
}];

var residents = [{
    name: 'Emilia Chojkiewicz',
    bio: '',
    picture: 'emilia.JPG'
}, {
    name: 'Shomik Verma',
    bio: '',
    picture: 'shomik.JPG'
}, {
    name: 'Tracy Lu',
    bio: '',
    picture: 'tracy.JPG'
}, {
    name: 'Derek Hill',
    bio: '',
    picture: 'derek.JPG'
}, {
    name: 'Solomon Nii Martey',
    bio: '',
    picture: 'solomon.JPG'
}, {
    name: 'Alex Bressler',
    bio: '',
    picture: 'alex.JPG'
}, {
    name: 'Sara Brown',
    bio: '',
    picture: 'sara.JPG'
}, {
    name: 'Carolyn Yao',
    bio: '',
    picture: 'carolyn.JPG'
}, {
    name: 'Eudora Miao',
    bio: '',
    picture: 'eudora.JPG'
}];


/* Data for features for layers house view */
// for locations, the first is dist. from left, the second is dist. from top
// the numbers given are proportional to the width of the image
var features = [[{
        name: 'Solar Water Heaters',
        description: 'An array of solar water heaters on the roof provide 100% of the hot water needs for the house.',
        location: [0.55, 0.3],
}, {
        name: 'Green Roof',
        description: 'Two green roof areas on the roof help to insulate the home and provide carbon sequestration.',
        location: [0.72, 0.45],
}, {
        name: 'Angled Design',
        description: 'The angled nature of the entire roof helps direct water and other preciptation into the rainwater collection system.',
        location: [0.45, 0.4],
}],
[{
        name: 'Atrium',
        description: 'The main atrium of the smart home allows for natural light to permeate through both levels of the home.',
        location: [0.55, 0.4],
}, {
        name: 'Solar Panels',
        description: 'Two banks of solar panels provide roughly 2kW of power for the house (~15% of total electric consumption).',
        location: [0.28, 0.45],
}, {
        name: 'Balcony',
        description: 'There are two spacious outdoor balconies on the second level of the house.',
        location: [0.55, 0.55],
}, {
        name: 'Residence Rooms',
        description: 'There are four residence rooms on the second level of the house, housing eight students. They are arranged in two-room suites.',
        location: [0.72, 0.52],
}],
[{
        name: 'Rainwater Collection Tanks',
        description: 'Two 1250 gallon rain water collection tanks flank the outside of the house. They are used for irrigation around the house and in the garden.',
        location: [0.73, 0.75],
}, {
        name: 'Media Room',
        description: 'The smart home media room is furnished with three wide-screen TVs and some of the most comfortable couches ever made.',
        location: [0.77, 0.5],
}, {
        name: 'Residence Room',
        description: 'There is one residence room on the first floor, which houses two students.',
        location: [0.35, 0.35],
}]];

/* Data for projects */

var projects = [{
    name: 'LED Initiative',
    lead: ['Anuj Thakkar'],
    picture: 'led.JPG',
    summary: 'Check out the <a target="_blank" href="/led-interface">Smart Home LED tube lights calculator<div class="new">New!</div></a>.',
    description: 'The LED Initiative is performing analysis of fluorescent lighting in Duke facilities to assess the cost and energy savings of conversion to LED lighting, with the goal of installing LED lights to reduce Duke’s carbon footprint. The team is currently running a pilot in Hudson Hall, but is looking to expand around Duke, as well as into facilities around the community.'
}, {
    name: 'Electric Bike',
    lead: ['Harvey Shi'],
    picture: 'bikes.JPG',
    summary: 'The electric bike project is aimed at building a reliable, long-lasting electric bike for daily use.',
    description: 'The electric bike project is aimed at building a reliable, long-lasting electric bike for daily use. The bike is currently complete and ready for use. There are just a few more tweaks to be made; however, an exciting next step would be integrating it with the solar panels in front of the home so that the bike runs on 100% solar energy.'
}, {
    name: 'Solar Benches',
    lead: ['Gerry Chen', 'Tracy Lu'],
    picture: 'benches.JPG',
    summary: 'The Solar Benches team aims to install solar panels on top of the swinging benches in the Bryan Center Plaza.',
    description: 'The Solar Benches team aims to install solar panels on top of the swinging benches in the Bryan Center Plaza. These will provide electricity to power lights and phone chargers, helping students stay out longer at night. This project is a great example of how students can have concrete impacts on campus and improve sustainability!'
}, {
    name: 'Smart Shelters',
    lead: ['Shomik Verma', 'Karyn Saunders'],
    picture: 'shelters.JPG',
    summary: 'The Smart Shelters team aims to bring sustainability to refugee camps while also improving quality of life.',
    description: 'The Smart Shelters team aims to bring sustainability to refugee camps while also improving quality of life. They are designing a cheap shelter that provides basic amenities including electricity and hot, clean water. The team hopes to develop an engineering solution to a critical humanitarian crisis affecting the world today.'
}, {
    name: 'Thermoelectric Solar Cooker',
    lead: ['Derek Hill'],
    picture: 'cooker.JPG',
    summary: 'The goal for the project is to build a highly efficient solar cooker that integrates a thermoelectric generator in order to produce electrical energy',
    description: 'This project is based around thermoelectric generators, which are basically devices with no moving parts that can generate electricity from temperature differences. The goal for the project is to build a highly efficient solar cooker that integrates a thermoelectric generator in order to produce electrical energy from the temperature difference between the inside and outside of the solar cooker. This project could give people in areas with limited access to an energy grid an efficient means of cooking a meal while also generating enough electricity to power another device.'
}];
