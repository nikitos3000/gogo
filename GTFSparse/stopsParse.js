import fs from 'fs'
//fs.readFileSync('./stops.txt','utf-8')
function stopsParse(path){
    const stops = JSON.parse(fs.readFileSync(path,'utf-8'))
    
    const newdata = stops.map(({id,name_mark,geopoint})=>{
        const [lat,lon] = geopoint
        return [id,name_mark,lat,lon, '\n']
    })
    fs.writeFileSync('./gtfsmy/stops.txt',`stop_id,stop_name,stop_lat,stop_lon \n${newdata.join('')}`)
}
stopsParse('datasets/docks.json')