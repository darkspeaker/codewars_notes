function areYouPlayingBanjo(name) {
  const check = name.toLowerCase().startsWith('r')
  return check ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('Adam'))
console.log(areYouPlayingBanjo('Eric'))
console.log(areYouPlayingBanjo('Ringo'))
console.log(areYouPlayingBanjo('ringo'))