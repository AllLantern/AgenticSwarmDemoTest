/**
 * Demo Web API - Built with Agentic Swarming
 *
 * This is a starter template for the live demo.
 * The audience will decide what endpoints this API has!
 */

import { createServer, IncomingMessage, ServerResponse } from 'node:http'

const PORT = process.env.PORT || 3000

async function handleRequest(
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> {
  res.setHeader('Content-Type', 'application/json')

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200)
    res.end(JSON.stringify({
      message: '🚀 Demo API - Ready for your ideas!',
      info: [
        'This API will be built LIVE with:',
        '  - Planner: Breaking down the idea',
        '  - Architect: Designing the structure',
        '  - TDD Guide: Writing tests first',
        '  - Security Reviewer: Ensuring safety',
      ],
      question: 'What endpoints should this API have? YOU DECIDE!'
    }))
    return
  }

  res.writeHead(404)
  res.end(JSON.stringify({ error: 'Not Found' }))
}

const server = createServer(handleRequest)

server.listen(PORT, () => {
  console.log(`🚀 Demo API running at http://localhost:${PORT}`)
  console.log('')
  console.log('Ready for live demo!')
  console.log('  GET / - Info endpoint')
  console.log('  ... more endpoints coming based on audience ideas!')
})

export { handleRequest }
