import fs from 'fs'

function parseJSONToObjects(jsonStrings) {
    const objectsArray = [];
    const jsonLines = jsonStrings.trim().split('\n');

    for (const jsonString of jsonLines) {
        try {
            const parsedData = JSON.parse(jsonString);
            objectsArray.push(parsedData);
        } catch (error) {
            console.error(`Error parsing JSON: ${error.message}`);
        }
    }

    return objectsArray;
}

const parsedObjects = parseJSONToObjects(jsonStrings);
console.log(parsedObjects);

function stopsParse(path, path2){
    const ships = JSON.parse(fs.readFileSync(path,'utf-8'))
    const geo = fs.readFileSync(path2,'utf-8')
    console.log(parseJSONToObjects(geo))
    
    
const toJSON = (string) => [...string.split('\n').map((el) => el.trim()).map((el)=> JSON.parse(el))]
    const finderGeo = (id) => parseJSONToObjects(geo).filter(({ids,...rest})=>ids === id)
    
    const newdata = ships.map(({id,name, geopoint})=>{
         

         return [id, name,  '\n']
        return finderGeo(id)
    })


    fs.writeFileSync('../gtfsmy/geo.txt',`ship_id,ship_name, geopoint \n${newdata.join('')}`)
}
stopsParse('../datasets/ships.json','../datasets/telemetry.json')