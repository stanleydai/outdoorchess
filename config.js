var config = {
    style: 'mapbox://styles/sdai28/cl671jgol001k16kezwpb8mz7',
    accessToken: 'pk.eyJ1Ijoic2RhaTI4IiwiYSI6ImNsNXRzNG9jODJ1a2QzaWx2bnhhYnUwcGgifQ.kIT5XCuikAi-dmXg-UMKUQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'An NYC Chess Ethnography',
    subtitle: "how manhattan's four distinct chess scenes experience and optimize their game",
    byline: 'By Stanley Dai',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. Link to <a href="https://github.com/stanleydai/outdoorchess" target="_blank">Github for more.',
    chapters: [
 
        {
            id: 'manhattan',
            alignment: 'center',
            hidden: false,
            title: 'A rich tradition',
            description: "I've been a mediocre classical chess player all my life. Good enough to win against unsuspecting family and friends, and an instant out in any half-respectable open.<br><br>Outdoor chess, however, often takes on a life of its own. As summer arrives and people take to the parks, players can be seen all across the island setting up their pieces, waving you over for a game.<br><br>The pieces move the same way; and yet, the character of these games differ wildly as one moves from south to north.",
            location: {
                center: [-73.98210525512695, 40.758765392944944],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'chesswalk',
                    opacity: 0,
                },
                {
                    layer: 'route',
                    opacity: 0
                }


            ],
            onChapterExit: [

            ]
        },
        {
            id: 'manhattanwithline',
            alignment: 'left',
            hidden: false,
            title: 'Going for a walk',
            description: 'On Sunday July 24th, I searched for every major outdoor chess scene and played a game (or three). Within four parks I found four distinct cultures, with the games mirroring the economic realities of its players. ',
            location: {
                center: [-73.98210525512695, 40.758765392944944],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'route',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'washington',
            alignment: 'left',
            hidden: false,
            title: 'Washington Square Park',
            image: './washington.png',
            description: 'Tucked in the southwest corner of Washington Square Park is a large circle of chess tables, which had all already been claimed by 11 AM. Once iconic, the scene at Washington Square Park has been described to me by other hustlers as “passé.”<br><br>There were 15 concurrent games that day. Price to play: $5.<br><br>Situated near New York University, Washington Square Park is the perfect place to crush unsuspecting freshmen. I found that these players played an aggressive, trap-heavy style which led to games ending quickly and, if you could weather the storm, often left them in losing positions. Games were timed for 5 minutes each - good for churning through as many as possible.',
            location: {
                center: [-73.99990975856781, 40.7309],
                zoom: 18,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'route',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'chesswalk',
                    opacity: 1,
                    duration: 5000
                }
    
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'union',
            alignment: 'left',
            hidden: false,
            title: 'Union Square Park',
            image: './union.png',
            description: 'As for why stronger players have left Washington Square, some have cited construction; others cite rising drug use. The answer, to me, is probably purely economics.<br><br>Thousands of people stream through Union Square every day, given the two metro lines and mega-popular retail options. There were 10 concurrent games that day. Experience has taught me that I might as well be burning money against these players, who also play timed games.<br><br>Players charge either $10 or $5, depending on how innocent you look. Interestingly, in one game I played, the clock was broken, making it impossible for me to know how much time they had left. A little grimey for my taste, but hey, you do what you have to do. ',
            location: {
                center: [-73.99208307266235, 40.735941649217736],
                zoom: 17,
                pitch: 8.01,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bryant',
            alignment: 'left',
            hidden: false,
            title: 'Bryant Park',
            image: './bryant.png',
            description: 'Behind Grand Central Library is a cluster of picnic umbrellas, under which you can find a more relaxed scene. At this point, I was surprised yet relieved to find that none of the games were pay-to-play.<br><br>Furthermore, none of the players milling about the 6 concurrent games were professional hustlers. Instead, the player base consists of people who have just gotten off of work in Midtown, looking to blow off some steam. Unlike at Union, the spread of the level of the games was much wider, and it was easier to find an equal for a match. No talk, no tricks, just chess. ',
            location: {
                center: [-73.9853185415268,  40.75337715987745],
                zoom: 17,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'central',
            alignment: 'left',
            hidden: false,
            title: 'Central Park',
            image: './central.png',
            description: 'Last but not least is the Chess and Checkers House nestled in Central Park. Built in the 50’s, this brick structure was meant to provide a space for visitors to play games. While the building is now closed, a smaller scene has emerged on its grounds. For a small, voluntary donation that will go to its eventual reopening, you can join its ranks.<br><br>There were five concurrent, untimed games on a Sunday afternoon. As this remote location requires more of a draw, players were providing structured lessons to children, fostering a family-friendly culture. ',
            location: {
                center: [-73.97508054971695,  40.76911497963839],
                zoom: 17,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'lastmanhattan',
            alignment: 'center',
            hidden: false,
            title: "What's in a game?",
            description: "What a walk through these parks really illuminates is how much the Manhattan outdoor chess scene reflects the economic structures that suffuse the island. Each scene is different, full of character, a tiny microcosm in its own right.<br><br>It’s an old game, one you’re probably familiar with. The objective is always the same. But somehow, each game contains unique ideas, agonies, histories, and compulsions. Everyone knows the rules, everyone has played a match. But, take a walk through this city’s heart, and maybe you’ll find that the game does not define the bounds. The players do. ",
            location: {
                center: [-73.98210525512695, 40.758765392944944],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'route',
                    opacity: 0
                },
                {
                    layer: 'chesswalk',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'route',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'chesswalk',
                    opacity: 1,
                    duration: 5000
                },
            ]
        }
    ]
};
