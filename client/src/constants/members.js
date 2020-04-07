import uid from 'uid';
import userImages from './userImages';

const members = [...userImages, ...userImages].map((userImg) => {
  return {
    id: uid(),
    name: 'Max Matinpalo',
    email: 'maxmatinpalo@me.com',
    img: userImg,
  };
});

export default members;
