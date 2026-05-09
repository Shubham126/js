//map in javascript

const map = new Map();

map.set('In', 'India');
map.set('Us', 'United States');
map.set('Fr', 'France');

console.log(map);

for(const [key] of map){
    console.log(key);
}

for(const [key, value] of map){
    console.log( value);
}