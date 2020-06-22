import landingPage from "../images/landingpage.png";
import survey from "../images/survey.png";
import documentation from "../images/documentation.png";
import tribute from "../images/tribute.png";
import quoteMachine from "../images/randomQuoteMachine.png";
import markDown from "../images/markDown.png";
import drumMachine from "../images/drumMachine.png";
import calculator from "../images/jsReactCalculator.png";
import pomodoro from "../images/pomodoroTimer.png";
import pokemon from "../images/litlePokedex.png";

const lista = [
  {
    id: 0,
    idCss: "tribute-page",
    project: "Tribute Page",
    image: tribute,
    url: "https://santiagopulidop.github.io/tribute_page/",
  },
  {
    id: 1,
    idCss: "landing-page",
    project: "Landing Page",
    image: landingPage,
    url: "https://santiagopulidop.github.io/LandingPage/",
  },
  {
    id: 2,
    idCss: "survey-form",
    project: "Survey Form",
    image: survey,
    url: "https://santiagopulidop.github.io/SurveyForm/",
  },
  {
    id: 3,
    idCss: "documentation",
    project: "Documentation",

    image: documentation,
    url: "https://santiagopulidop.github.io/TechnicalDocumentationPage/",
  },
  {
    id: 4,
    idCss: "quote-machine",
    project: "Quote Machine",
    image: quoteMachine,
    url: "https://random-quote-machine-two.now.sh/",
  },
  {
    id: 5,
    idCss: "markdown",
    project: "MarkDown Previewer",
    image: markDown,
    url: "https://mark-down-previewer.now.sh/",
  },
  {
    id: 6,
    project: "Drum Machine",
    idCss: "drum-machine",
    image: drumMachine,
    url: "https://drum-machine-pi.now.sh/",
  },
  {
    id: 7,
    idCss: "calculator",
    project: "JavaScript Calculator",
    image: calculator,
    url: "https://java-script-calculator-red.now.sh/",
  },
  {
    id: 8,
    idCss: "pomodoro",
    project: "Pomodoro Timer",
    image: pomodoro,
    url: "https://pomodoro-timer-ten.now.sh/",
  },
  {
    id: 9,
    idCss: "pokedex",
    project: "Litle Pokedex",
    image: pokemon,
    url: "https://pokemon-api-project.now.sh/",
  },
];

export default lista;
