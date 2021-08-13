const paintWall = function(wall, paint) {
    console.log('The ' + wall, 'wall has been painted ' + paint);
}

const colorA =['Red'];
const colorB =['Blue'];

const wallA =['north'];
const wallB =['south'];

paintWall(wallA, colorB);
paintWall(wallB, colorA);
paintWall();