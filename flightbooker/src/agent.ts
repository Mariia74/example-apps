import narrative from "./narrative"
import questions from "./questions"
import { Agent, Language } from "narratory"

const agent: Agent = {
    agentName: "Flightbooker",
    language: Language.English,
    narrative,
    questions,
    bridges: ["So", "Where were we", "Now"],
    narratoryKey: "ENTER-NARRATORY-KEY-HERE", // Enter your Narratory key here
    googleCredentials: require("../google_credentials.json") // Populate this file, or change the link to your existing credentials file
}

export default agent