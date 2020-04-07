import uid from 'uid';
import moment from 'moment';
import userImages from './userImages';

const comments = [...userImages, ...userImages, ...userImages].map((img) => {
  return {
    img,
    id: uid(),
    name: 'Maria Rodriguez',
    date: moment().calendar(),
    text:
      'I think we should start collecting the rubbish and throw it in the bin as soon as possible.',
  };
});

export default comments;
