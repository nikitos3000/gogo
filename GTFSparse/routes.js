import fs from 'fs'

function routeParse(path){
    const route = JSON.parse(fs.readFileSync(path,'utf-8'))
    const newd = route.map((el) =>{

        return [el.route.id,el.route.abbrev,el.route.nameroute,'4', '\n']
    })
    fs.writeFileSync('./gtfsmy/routes.txt',`route_id,route_short_name,route_long_name,route_type \n${newd.join('')}`)
}
routeParse('datasets/schedule.json')
