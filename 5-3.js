function nestedArrayAndObject(){
    const info =['Once Upon a Time','Emma Swan','Regina Mills','Cora Mills','Queen of Hearts','Peter Pan',`The boy who wouldn't grow up`,'Zelena', 'The Wicked Witch'];
    const[title,info.protagonist.name , info.protagonist.enemies[3] ,enemy.title ,enemy.name]=info;
    return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
}
nestedArrayAndObject();