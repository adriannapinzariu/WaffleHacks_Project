import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-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",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();