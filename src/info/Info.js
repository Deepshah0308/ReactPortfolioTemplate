import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Deep",
    lastName: "Shah",
    initials: "DS", // the example uses first and last, but feel free to use three or more if you like.
    position: "Systems Administrator",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🇨🇦',
            text: 'based in the Canada'
        },
        {
            emoji: "💼",
            text: "Systems Administrator at Wakefield Canada Inc."
        },
        {
            emoji: "📧",
            text: "deep030899@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/deep030899",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/deepshah0308/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Deepshah0308",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/deepvshah03/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/deepshah030899",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Deep. I'm a systems administrator for Wakefield Canada Inc. I studied Computer Systems Technician - Network Systems at Mohawk College, I enjoy talking about Tech all day long, and I am a Systems Administrator with a passion for optimizing IT infrastructures. Expertise in network administration, cloud computing, and cybersecurity. Let's build something great together",
    skills:
        {
            proficientWith: ['automation and scripting', 'DevOps', 'git', 'github', 'Powershell Scipting', 'Azure', 'Cloud Computing', 'Network Administration'],
            exposedTo: ['Cybersecurity', 'Endpoint Administration', 'Microsoft 365']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'stand up comdey',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Microsoft Autopilot - Setup",
            live: "https://learn.microsoft.com/en-us/mem/autopilot/windows-autopilot", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://learn.microsoft.com/en-us/windows/deployment/windows-autopilot/demonstrate-deployment-on-vm?source=recommendations", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Employee WiFi using SAML - Fortinet",
            live: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=video&cd=&cad=rja&uact=8&ved=2ahUKEwiEg9bpxOj9AhX4kokEHSB2CSkQtwJ6BAgJEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnDH2wvveLrI&usg=AOvVaw0EgHg1DbbP_GYDOl_FeUFf",
            source: "https://docs.fortinet.com/document/fortigate/7.0.0/new-features/561062/wireless-authentication-using-saml-credentials-7-0-5",
            image: mock2
        }
        //,
        //{
          //  title: "Project 3",
          //  live: "https://paytonpierce.dev",
          // source: "https://github.com/paytonjewell",
          //  image: mock3
        //},
        //{
          //  title: "Project 4",
          //  live: "https://paytonpierce.dev",
          //  source: "https://github.com/paytonjewell",
          //  image: mock4
        //},
        //{
          //  title: "Project 5",
          //  live: "https://paytonpierce.dev",
          //  source: "https://github.com/paytonjewell",
          //  image: mock5
        //}
    ]
}