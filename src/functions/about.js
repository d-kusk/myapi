import { AboutDTO } from './AboutDTO'

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(AboutDTO)
  });
}