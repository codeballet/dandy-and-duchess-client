// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'pa4n00wl9d'
const region = 'ap-northeast-1'
export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-jx6ojzae.eu.auth0.com',            // Auth0 domain
  clientId: 'YtbToRTMxUpHoDdpXCavzkeaSD8O3OQi',   // Auth0 client id
  // callbackUrl: 'http://localhost:3000/callback'
  callbackUrl: 'https://master.ddmb4h23t8ghh.amplifyapp.com/myzone'
}
