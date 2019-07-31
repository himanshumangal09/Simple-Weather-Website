import './SeasonDisplay.css' ;
import React from 'react';
const seasonConfig ={
    summer : {
        text:"let hit the  beach",
        iconName:"sun"
            },
    winter : {
        text : "burr its chilly" ,
        iconName:"snowflake"
    }
};
const getSeason = (lat,month) =>{
        if(month>0&&month<9)
        {
            return lat>0 ? 'summer' : 'winter' ;
        }
        else {
            return lat>0 ? 'winter' : 'summer' ;
        }
};
const SeasonDisplay =props=> {
    const season=getSeason(props.lat , new Date().getMonth()) ;
 const {text,iconName} = seasonConfig[season];
    // const text =seasons==='winter'?'burr its chilly':'let hit the beach' ;
    //const icon =seasons==='winter'?'snowflake':'sun';
return ( <div className={`season-display  ${season}`}>
     <i className={` icon-left massive ${iconName} icon`} />   
    <h1>{text}</h1>
    <i className={` icon-right massive ${iconName} icon `} />
       </div>   );
};
export default SeasonDisplay ;