const s3 = require('s3')
const params = {
  localFile: './arquivo-teste.txt',
  s3Params: {
    Bucket: '',
    Key: 'arquivo-teste.txt'
  },
  s3Options: {
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-1'
  }
}
const client = s3.createClient(params)
const uploader = client.uploadFile(params)
uploader.on('error', e => console.log(e))
uploader.on('progress', () => console.log('uploading..'))
uploader.on('end', () => console.log('finish'))