import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBwoMuQ9SQ-nctGWqWRXKyWN9c309x5kjE");

async function run(prompt) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  let text = response.text();

  text = text
    .split("**")
    .map((str, indx) => {
      if (indx % 2 != 0) return str;
    })
    .filter((str) => str);

  return text;
}

export { run };
