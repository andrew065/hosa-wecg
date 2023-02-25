const { WebPubSubServiceClient } = require('@azure/web-pubsub');

const hub = "test";
const connection_string = 'Endpoint=https://ecg-test.webpubsub.azure.com;AccessKey=NHNJSUDOJw2S3DTEkOYTPPYPtHFLmHjjJHCfgTuglx8=;Version=1.0;'
let message = {
    'message': 'hello',
    'data': 'placeholder'
}


let service = new WebPubSubServiceClient(connection_string, hub);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Message:', msg => {
    service.sendToAll(msg, {contentType: 'text/plain'});
    service.sendToAll(message)
    readline.close();
});

