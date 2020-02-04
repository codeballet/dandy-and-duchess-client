// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '91bgnc1ydd'
export const apiEndpoint = `https://${apiId}.execute-api.ap-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-jx6ojzae.eu.auth0.com',            // Auth0 domain
  clientId: 'YtbToRTMxUpHoDdpXCavzkeaSD8O3OQi',   // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
