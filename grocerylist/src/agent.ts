import narrative from "./narrative"
import userInitiatives from "./userInitiatives"
import { Agent, Language } from "narratory"

const agent: Agent = {
    agentName: "Narratory Grocery Shopper",
    language: Language.English,
    narrative,
    userInitiatives,
    bridges: ["So", "Where were we", "Now"],
    narratoryKey: require("../narratory_credentials.json").narratoryKey, // Populate this file with your Narratory key. Sign up att narratory.io if you don't have one!
    googleCredentials: require("../google_credentials.json"), // Populate this file, or change the link to your existing credentials file
    allowGateway: true
}

export default agent