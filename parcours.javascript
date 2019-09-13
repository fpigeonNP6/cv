var myTemplateConfig = {
  colors:  [ "#008fb5","#f1c109" ,"#008b8b","#008b8b", "#979797"], // branches colors, 1 per column
  branch: {
    lineWidth: 6,
    spacingX: 30,
    showLabel: true,
	labelFont: "normal 10pt trebuchet MS"	// display branch names on graph
  },
  tag:{
	spacingX: -30,
	tagFont:"normal 8pt trebuchet MS"
  },
  commit: {
	spacingY: -30,
    dot: {
      size: 8
    },
    message: {
	  
      displayAuthor: false,
      displayBranch: false,
      displayHash: false,
	  display: true,
	  font: "normal 10pt trebuchet MS",
      
  },tooltipHTMLFormatter: function ( commit ) {
      return  commit.message;
    }
}}


function createParcours(){
	gitgraph.mode = "compact"
	var master = gitgraph.branch({column:4 });
	
	master.showLabel=false;
	gitgraph.commit({sha1:"41_1",message:"Master Econométrie",tag:"09-2005 Université",tooltipDisplay:false});
	
	master.commit({sha1:"99_0",message:"Stage",tag:"03-2007 Carat (AEGIS Media)",dotSize:1,tooltipDisplay:true});
	var stage = master.branch({column:1, name: "Statistiques"});
	stage.commit({sha1:"42_1",message:"Stage - CDD Carat",spacingY:-100});
	
	var stat = gitgraph.branch({parentBranch:master, column:1});
	stat.showLabel = false;
	
	stat.commit({sha1:"43_1",message:"Analyste Programmeur - SocioLogiciels"});
	master.commit({sha1:"Sept 2005",message:"SocioLogiciels",tag:"01-2008 SocioLogiciels",dotSize:1,tooltipDisplay:false});
	var geom = gitgraph.branch({parentBranch:stat, name:"Geomarketing", column:0}) 

	geom.commit({sha1:"43_2",message:"Chargé étude Géomarketing - SocioLogiciels"});;
	master.commit({sha1:"99_0",dotSize:1,tooltipDisplay:false})
	var info = master.branch({column:3, name: "Devoloppeur Informatique",tooltipDisplay:false,dotSize:1});
	info.commit({sha1:"44_1",message:"Developpeur Informatique - SocioLogiciels (NP6 Consulting)"})
	master.commit({sha1:"99_0",dotSize:1,tooltipDisplay:false})
	
	
	master.commit({sha1:"99_0",dotSize:1,tooltipDisplay:false,tag:"08-2013 NP6 Solution"});
	info.commit({sha1:"45_1",message:"Devoloppeur Informatique - NP6 Solution "});
	info.commit({sha1:"45_1",tooltipDisplay:false,dotSize:1});
	stat.commit({tooltipDisplay:false,  dotSize:1});
	geom.commit({tooltipDisplay:false, dotSize:2.8});
	
	master.commit({sha1:"04-2015",tooltipDisplay:false,dotSize:1});
	
	var dataScientist = stat.branch({name:"DataScientist", column:3, color:"#f1c109"});
	
	info.merge(dataScientist,{tooltipDisplay:false,dotSize:3});
	dataScientist.commit({sha1:"45_2",message:"DataScientist - NP6 Solution",dotSize:3});
	info.commit({sha1:"45_2",message:"DataScientist - NP6 Solution",dotSize:8})
	dataScientist.commit({tooltipDisplay:false,dotSize:3});
	
	dataScientist.commit({tooltipDisplay:false, dotSize:2.8});
	info.commit({tooltipDisplay:false,dotSize:1});
	
	master.commit({sha1:"09-2015",message:"NP6 Developpeur Python - DataScientist",tooltipDisplay:false, dotSize:2.8});
	info.commit({sha1:"45_3",message:"DataScientist - NP6 Solution",dotSize:8})
	master.commit({sha1:"99_0",dotSize:1,tooltipDisplay:false,tag:"09-2018 Scalian"});
	dataScientist.commit({sha1:"45_3",message:"DataScientist - Scalian",dotSize:8});
	master.commit({sha1:"09-2018",message:"Scalian - DataScientist",tooltipDisplay:false, dotSize:2.8});
	
	
	
	
	return gitgraph;
}
