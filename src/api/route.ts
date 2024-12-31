import { Configuration, OpenAIApi } from 'openai-edge'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export const runtime = 'edge'


export async function POST(req: Request) {
  try {
    const { resumeText } = await req.json()

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set in the environment variables')
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an AI assistant that analyzes resumes and provides ATS (Applicant Tracking System) compatibility scores and suggestions for improvement. Provide your response in JSON format with a "score" field (0-100) and a "suggestions" array.'
        },
        {
          role: 'user',
          content: `Analyze the following resume and provide an ATS compatibility score and suggestions for improvement: ${resumeText}`
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      n: 1,
    })

    const result = await response.json()
    const content = result.choices[0].message.content

    return new Response(content, {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error in API route:', error)
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'An error occurred while analyzing the resume' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

