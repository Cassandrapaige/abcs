const LAYOUT_DATA = [
    {
        letter : 'a',
        lesson : ':nth-of-type', 

        primary : '#D96AA7',
        secondary : '#422C73',
        complimentary : '#88BFB5',
        contrast : '#F2E527',

        family : 'alfarn, sans-serif',
        fontstyle : 'normal',
        weight : '700',

        selector : ':nth-of-type(1) {',
        method : 'background: #D96AA7; }',
        link : 'https://codepen.io/cassandraPaige/pen/NWPOwXy',
        exp : 'The :nth-of-type selector allows you to use numbers, keywords and formulas to target specific elements based on their position in the DOM tree. Do further research and find a way to include it in your website.'   
    },
    {
        letter : 'b',
        lesson: 'overflow: hidden',

        primary : '#F23D5E',
        secondary : '#F29F05',
        complimentary : '#ADBF69',
        contrast : '#F22233',

        family : 'balboa, sans-serif',
        fontstyle: 'normal',
        weight: '300',

        selector : '.container {',
        method : 'overflow: hidden; }',
        link : 'https://codepen.io/cassandraPaige/pen/MWYPQmm',
        exp: 'The overflow property determines what happens if an elements content is larger than its container element. Try removing overflow: hidden from the example, and notice how the car is no longer contained within its own container. Do further research and find a way to include it in your website.'
    }, 
    {
        letter : 'c',
        lesson: 'background-clip',

        primary : '#D9296A',
        secondary : '#020873',
        complimentary : '#F2E74B',
        contrast : '#F28F38',

        family : 'cantarell, sans-serif',
        fontstyle: 'normal',
        weight: '700',

        selector : 'h1 {',
        method : '-webkit-background-clip: text };',
        link : 'https://codepen.io/cassandraPaige/pen/JjoypXB',
        exp : 'Background-clip is used to clip an elements background to its surrounding border or content-box. In this case we have clipped it to the foreground text, which has allowed us to add a subtle animation to the texts background. Do further research and find a way to include it in your website.'
    }, 
    {
        letter : 'd',
        lesson: 'text-shadow',

        primary : '#30B4B6',
        secondary : '#833F74',
        complimentary : '#242424',
        contrast : '#BB89AD',

        family : 'delittle-chromatic, sans-serif',
        fontstyle: 'normal',
        weight: '400',

        selector : 'h1 {',
        method : 'text-shadow: 5px 5px #30B4B6 };',
        link : 'https://codepen.io/cassandraPaige/pen/rNazJzd',
        exp : 'Text-shadow allows you to add shadows to your text by specifying the x and y offsets, blur-radius and color. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'e',
        lesson: 'writing-mode',

        primary : '#F04B70',
        secondary : '#521C59',
        complimentary : '#BFB4B0',
        contrast : '#7A398C',

        family : 'ebony, sans-serif',
        fontstyle: 'normal',
        weight: '400',

        selector : 'h1 {',
        method : 'writing-mode: vertical-rl; }',
        link : 'https://codepen.io/cassandraPaige/pen/abzRVgO',
        exp : 'Writing-mode allows you to position your text vertically on the page. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'f',
        lesson: 'SVG fill color',

        primary : '#F24141',
        secondary : '#04B2D9',
        complimentary : '#F29F05',
        contrast : '#049DD9',

        family : 'fairway, sans-serif',
        fontstyle: 'normal',
        weight : '700',

        selector : 'svg {',
        method : 'fill: #F24141; }',
        link : 'https://codepen.io/cassandraPaige/pen/ZEYRmjb',
        exp : 'The fill property allows you to change the color of an SVG element. Hover over the example images and see how they change color. This would not be possible by just adding a background-color. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'g',
        lesson: 'background-attachment',

        primary : '#011526',
        secondary : '#03738C',
        complimentary : '#798C8C',
        contrast : '#024059',

        family : 'gothic-open-shaded, sans-serif',
        fontstyle: 'normal',
        weight : '400',

        selector : '.section {',
        method : 'background-attachment: fixed; }',
        link : 'https://codepen.io/cassandraPaige/pen/MWYGqvE',
        exp : 'Here we have used background-attachment to crate a parallax scrolling effect, specifying that we would like our images position to be fixed to the page. Do further research and find a way to include it in your website.'
    }, 
    {
        letter : 'h',
        lesson: 'transform: translate',

        primary : '#0388A6',
        secondary : '#151226',
        complimentary : '#731F4D',
        contrast : '#BF307F',

        family : 'halogen, sans-serif',
        fontstyle: 'normal',
        weight : '400',

        selector : '.btn {',
        method : 'transform: translateY(100px); }',
        link : 'https://codepen.io/cassandraPaige/pen/MWYeqwZ',
        exp : 'Use translate() to reposition an elements position along the X and Y axis. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'i',
        lesson: '::first-line',

        primary : '#F2B441',
        secondary : '#9A80BF',
        complimentary : '#F2507B',
        contrast : '#03A688',

        family : 'imperial-urw, sans-serif',
        fontstyle: 'normal',
        weight : '700',

        selector : 'p::first-line {',
        method : 'font-size: 40px; }',
        link : 'https://codepen.io/cassandraPaige/pen/JjomyZJ',
        exp : 'The ::first-line pseudo element will apply styles to the first line of a block-level element. Styles will adjust according to viewport size. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'j',
        lesson: 'linear-gradient',

        primary : '#04ADBF',
        secondary : '#F23D5E',
        complimentary : '#025E73',
        contrast : '#F26389',

        family : 'joost, sans-serif',
        fontstyle: 'normal',
        weight: '400',

        selector : '.section {',
        method : 'background: linear-gradient(); }',
        link : 'https://codepen.io/cassandraPaige/pen/OJPMyQQ',
        exp : 'By default, a linear-gradient creates a background image consiting of a smooth transition between 2 or more colours, along a straight line. You can specify the direction that you wish your gradient to go in, as well as colour-stops, to create a more unique background image. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'k',
        lesson: 'transform: rotate',

        primary : '#D92949',
        secondary : '#6FB7BF',
        complimentary : '#F2DEA0',
        contrast : '#F26E50',

        family : 'kari-display-pro, sans-serif',
        fontstyle: 'normal',
        weight: '400',

        selector : '.item {',
        method : 'transform: rotate(360deg); }',
        link : 'https://codepen.io/cassandraPaige/pen/JjoZjYb',
        exp : 'Use rotate() to rotate an element by a specified degree. A positive angle will produce a clockwise rotation, whereas a negative angle will produce a counter-clockwise rotation. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'l',
        lesson: 'filter',

        primary : '#F2AF5C',
        secondary : '#A6335D',
        complimentary : '#025E73',
        contrast : '#F2836B',

        family : 'latex, sans-serif',
        fontstyle: 'normal',
        weight: '400',

        selector : 'img {',
        method : 'filter: hue-rotate(90deg); }',
        link : 'https://codepen.io/cassandraPaige/pen/Poweyve',
        exp : 'Similar to the effects found on Photoshop, CSS filters allow you to manipulate images by adding filters such as blur, hue or grayscale. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'm',
        lesson: 'position: sticky',

        primary : '#038C8C',
        secondary : '#022859',
        complimentary : '#F7689D',
        contrast : '#B571AC',

        family : 'macha, sans-serif',
        fontstyle: 'normal',
        weight: '400',

        selector : '.container {',
        method : 'position: sticky; }',
        link : 'https://codepen.io/cassandraPaige/pen/oNgmbyx',
        exp : 'Sticky positioning treats an elements as if were relatively positionend on the page until it reaches a certain threshold and "sticks" itself in position. It remains "stuck" to the page until it has scrolled through the containers remaining contents. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'n',
        lesson: 'clip-path',

        primary : '#F2C029',
        secondary : '#08748C',
        complimentary : '#023440',
        contrast : '#011826',

        family : 'navigo, sans-serif',
        fontstyle: 'normal',
        weight: '700',

        selector : '.card {',
        method : 'clip-path: polygon(0 0, 0% 100%, 100% 0); }',
        link : 'https://codepen.io/cassandraPaige/pen/abzGaZG',
        exp : 'Clip path is used for creating shapes, by specifying individual point positions along the X and Y axis. You can use it to clip an image or element, so that only the clipped portion of the element will be visible. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'o',
        lesson: 'mix-blend-mode',

        primary : '#6CD9CE',
        secondary : '#D93BA1',
        complimentary : '#2E2473',
        contrast : '#0AA66D',

        family : 'opake, sans-serif',
        fontstyle: 'normal',
        weight: '900',

        selector : 'h1 {',
        method : 'mix-blend-mode: screen; }',
        link : 'https://codepen.io/cassandraPaige/pen/jOEMMyp',
        exp : 'Use mix-blend-mode to define how various elements should blend with their backgrounds. Explore using different values to see how each one creates a different effect/ colour combination. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'p',
        lesson: ':focus',

        primary : '#C3D9A3',
        secondary : '#D94179',
        complimentary : '#011C40',
        contrast : '#D9779B',

        family : 'peachy-keen-jf, sans-serif',
        fontstyle: 'normal',
        weight: '400',

        selector : 'input:focus {',
        method : 'outline: 2px solid #4D8A77; }',
        link : 'https://codepen.io/cassandraPaige/pen/QWwrZxZ',
        exp : 'The :focus pseudo-class is used on form elements to apply styles when a user clicks on an input field. You can use focus on almost any element by setting a tabindex attribute. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'q',
        lesson: 'text-stroke',

        primary : '#FF573A',
        secondary : '#6394FF',
        complimentary : '#FFBD2B',
        contrast : '#1F3340',

        family : 'quiche-sans, sans-serif',
        fontstyle: 'normal',
        weight: '800',

        selector : 'h1 {',
        method : '-webkit-text-stroke: 4px #FF573A; }',
        link : 'https://codepen.io/cassandraPaige/pen/povxWre',
        exp : 'The text-stroke property allows you to change the width and color of the texts stroke effect. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'r',
        lesson: ':checked',

        primary : '#D5D95F',
        secondary : '#BF4588',
        complimentary : '#6321A6',
        contrast : '#04C4D9',

        family : 'restore, sans-serif',
        fontstyle: 'normal',
        weight: '700',

        selector : 'input:checked {',
        method : 'background-color: #04C4D9; }',
        link : 'https://codepen.io/cassandraPaige/pen/povKvLr',
        exp : 'The :checked pseudo-class targets radio buttons and checkboxes, applying styles to "active" elements. Check Mozilla for examples on how to use :checked to toggle an active class, depending on targets state. Do further research and find a way to include it in your website.'
    },
    {
        letter : 's',
        lesson: 'transform: skew',

        primary : '#4ECDC4',
        secondary : '#FE6B6B',
        complimentary : '#556370',
        contrast : '#C54D57',

        family : 'sweater-school, sans-serif',
        fontstyle: 'normal',
        weight: '700',

        selector : 'section {',
        method : 'transform: skewY(12deg); }',
        link : 'https://codepen.io/cassandraPaige/pen/jOEKEOq',
        exp : 'Use skew() to distort an element by changing the direction of its angles, both horizontally and vertically. Here we have used skew() to create a slanted background effect on the footer element. Do further research and find a way to include it in your website.'
    },
    {
        letter : 't',
        lesson: 'grid-column',

        primary : '#F2BE22',
        secondary : '#752F5C',
        complimentary : '#271C40',
        contrast : '#D9048E',

        family : 'tachyon, sans-serif',
        fontstyle: 'normal',
        weight: '400',

        selector : '.img {',
        method : 'grid-column: 1/3; }',
        link : 'https://codepen.io/cassandraPaige/pen/abzGQOm',
        exp : 'Use grid-column to dynamically position elements on a page, by specifying their start and end positions. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'u',
        lesson: 'scrollbar-width',

        primary : '#BF4974',
        secondary : '#132B40',
        complimentary : '#D9A566',
        contrast : '#8F94A6',

        family : 'upgrade, sans-serif',
        fontstyle: 'normal',
        weight: '400',
        
        selector : '.container {',
        method : 'scrollbar-width: none; }',
        link : 'https://codepen.io/cassandraPaige/pen/xxbjaQM',
        exp : 'The scrollbar-width property allows you to change the width of a scrollbar. In this particular case we have set the width to "none", removing it from the viewport entirely. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'v',
        lesson: '::selection',

        primary : '#00C2B5',
        secondary : '#FF0150',
        complimentary : '#FFDB00',
        contrast : '#303740',

        family : 'vatican, sans-serif',
        fontstyle: 'normal',
        weight: '300',

        selector : '::selection {',
        method : 'background-color: #00C2B5; }',
        link : 'https://codepen.io/cassandraPaige/pen/bGNMmga',
        exp : 'The ::selection pseudo element is used to change the background color of highlighted text. You can simply attach it to the root of the document to apply the same background color to each element on the page, or add it to individual elements depending on your purpose. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'w',
        lesson: 'repeating-linear-gradient',

        primary : '#F24B88',
        secondary : '#63AEBF',
        complimentary : '#F2C230',
        contrast : '#F29544',

        family : 'wigwag-bold, sans-serif',
        fontstyle: 'normal',
        weight: '400',

        selector : 'body {',
        method : 'background: repeating-linear-gradient(); }',
        link : 'https://codepen.io/cassandraPaige/pen/VwYdRab?editors:1100',
        exp : 'Just as it sounds, the repeating-linear-gradient() function is used to repeat linear gradients. Specify an angle, multiple colors, and color stops to create something truly unique. In our example, we were able to create a unique deisgn with the help of the mix-blend-mode property. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'x',
        lesson: 'repeating-conic-gradient',

        primary : '#BF2E97',
        secondary : '#2D39A1',
        complimentary : '#F2C335',
        contrast : '#05193A',

        family : 'xenera, sans-serif',
        fontstyle: 'normal',
        weight: '400',

        selector : '.container {',
        method : 'background: repeating-conic-gradient(); }',
        link : 'https://codepen.io/cassandraPaige/pen/GRgGLoz',
        exp : 'Conic-graidents are typically used for creating pie charts or color wheels, which rotate around a center point. You can add multiple colours to your graident by using colour-stops, specified by an angle. Please note, that at this time, this example may only be available on Chrome. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'y',
        lesson: 'transform: scale',

        primary : '#6F4F73',
        secondary : '#F294AD',
        complimentary : '#BDF2E3',
        contrast : '#3A1240',

        family : 'ysans-std, sans-serif',
        fontstyle: 'normal',
        weight: '700',

        selector : '.container {',
        method : 'transform: scale(1.2); }',
        link : 'https://codepen.io/cassandraPaige/pen/MWYPOGZ',
        exp : 'Use scale() to change the size of an element along the X and Y axis, aka change the width and/or height of an element to create a smooth transition. Note how we used "transform:origin" in our example, to keep our element in its original position. Do further research and find a way to include it in your website.'
    },
    {
        letter : 'z',
        lesson: '::before',

        primary : '#5BD9D9',
        secondary : '#D91A4D',
        complimentary : '#260104',
        contrast : '#F2C4E2',

        family : 'zebrawood-std-fill, sans-serif',
        fontstyle: 'normal',
        weight: '400',

        selector : '::before { ',
        method : "content: ' '; }",
        link : 'https://codepen.io/cassandraPaige/pen/QWwrzbN',
        exp : 'The ::before and ::after psuedo selectors allow you to render elements to the page using CSS, and position them relevant to their parent element. These elements are not visible in the DOM tree, however they appear on the page as if they were. Do further research and find a way to include it in your website.'
    }
]

export default LAYOUT_DATA