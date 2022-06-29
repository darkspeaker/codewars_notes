//7
const whoIsOnline = (friends) => {
  const result = {}
  const userOnline = []
  const userAway = []
  const userOffline = []
  //console.log(result)
  friends.filter( item => {
    if (item.status === "online" && item.lastActivity <= 10) {
      let online = ''
      online = item.username
      userOnline.push(online)
      //console.log(user)
      result.online = userOnline
    }
    if(item.status === "offline"){
      let offline = ''
      offline = item.username
      userOffline.push(offline)
      result.offline = userOffline

      // user.push(i)
      // //console.log(user)
      // result.online = user
    }
    if(item.lastActivity > 10 && item.status !== 'offline'){
      let away = ''
      away = item.username
      userAway.push(away)
      result.away = userAway
    }

  });
  //console.log(user)
  return result;
};

console.log(
  whoIsOnline([{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  }])
);
