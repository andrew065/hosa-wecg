const WebSocket = require('ws');
const { WebPubSubServiceClient } = require('@azure/web-pubsub');

async function main() {
    const hub = "test";
    const connection_string = 'Endpoint=https://ecg-test.webpubsub.azure.com;AccessKey=NHNJSUDOJw2S3DTEkOYTPPYPtHFLmHjjJHCfgTuglx8=;Version=1.0;'


    let service = new WebPubSubServiceClient(connection_string, hub);
    service.g
    let token = await service.getClientAccessToken();
    let ws = new WebSocket(token.url);
    ws.on('open', () => console.log('connected'));
    ws.on('message', data => console.log('Message received: %s', data));
}

main();