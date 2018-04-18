var myTemplateConfig = {
  colors:  [ "#008fb5","#f1c109" ,"#008b8b","#008b8b", "#979797"], // branches colors, 1 per column
  branch: {
    lineWidth: 6,
    spacingX: 30,
    showLabel: true,
	labelFont: "normal 10pt Tahoma"	// display branch names on graph
  },
  tag:{
	spacingX: -30,
	tagFont:"normal 8pt Tahoma"
  },
  commit: {
	spacingY: -40,
    dot: {
      size: 8
    },
    message: {
	  
      displayAuthor: false,
      displayBranch: false,
      displayHash: false,
	  display: true,
	  font: "normal 10pt Tahoma",
      
  },tooltipHTMLFormatter: function ( commit ) {
      return  commit.message;
    }
}}


function createParcours(){
	gitgraph.mode = "compact"
	var master = gitgraph.branch({column:4 });
	
	master.showLabel=false;
	gitgraph.commit({sha1:"Sept 2005",message:"Master Econométrie",tag:"09-2005 Université",tooltipDisplay:false});
	
	
	//stage.spacingX=10;
	
	master.commit({sha1:"Sept 2005",message:"Stage",tag:"03-2007 Carat Expert",dotSize:1,tooltipDisplay:false});
	var stage = master.branch({column:1, name: "Statistiques"});
	stage.commit({sha1:"Avril 2007",message:"Stage validation Master 2",spacingY:-100}).commit({sha1:"Oct 2007",message:"CDD Carat - Chargé d'études statistiques"});
	
	var socio = gitgraph.branch({parentBranch:master, column:1});
	socio.showLabel = false;
	
	socio.commit({sha1:"2008-01",message:"Analyste Programmeur - SocioLogiciels"});
	master.commit({sha1:"Sept 2005",message:"SocioLogiciels",tag:"01-2008 SocioLogiciels",dotSize:1,tooltipDisplay:false});
	var geom = gitgraph.branch({parentBranch:socio, name:"Geomarketing", column:0}) 

	geom.commit({sha1:"2008-06",message:"Chargé étude Géomarketing - SocioLogiciels"});;
	master.commit({sha1:"04-2015",dotSize:1,tooltipDisplay:false,tag:"08-2013 NP6 Solution"});
	var info = master.branch({column:3, name: "Devoloppeur Informatique",tooltipDisplay:false,dotSize:1});
	info.commit({sha1:"2008-01",message:"NP6 -Devoloppeur Informatique "});
	socio.commit({tooltipDisplay:false});
	geom.commit({tooltipDisplay:false});
	
	master.commit({sha1:"04-2015",tooltipDisplay:false,dotSize:1});
	
	var dataScientist = socio.branch({name:"DataScientist", column:3, color:"#f1c109"});
	//dataScientist.branch.color="red";
	info.merge(dataScientist,{tooltipDisplay:false,dotSize:3});
	dataScientist.commit({message:"NP6 DataScientist"});
	
	dataScientist.commit({tooltipDisplay:false})
	//var dataScientist = info.commit({name:"Geomarketing", column:2,color:"red"});
	//socio.merge(dataScientist);
	info.commit({tooltipDisplay:false});
	
	
	//info.merge(dataScientist);
	
	master.commit({sha1:"09-2015",message:"NP6 Developpeur Python - DataScientist",tooltipDisplay:false});
	
	
	
	
	return gitgraph;
}