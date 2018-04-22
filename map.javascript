
function onEachFeature(feature, layer) {
	popupContent = '<div style="width:200px">'+feature.properties.Intitulé+'</div><br>'
	popupContent += '<div style="width:200px">'+feature.properties.Lieu+'</div><br>'
	popupContent += '<div style="width:200px">'+feature.properties.Periode+'</div><br>'
	popupContent += '<div style="width:200px">'+feature.properties.Precision+'</div><br>'
		//layer.bindPopup(popupContent);
	}	


//liste des Emplois.	
var someFeatures = {"type":"FeatureCollection",
"features":[
{"type": "Feature","geometry": 
	
	{"type": "Point", 
	"coordinates": [ -1.676230,48.116537]  },  
		"properties": {
			"Intitulé": "Master 2 Econométrie",		
			"Lieu":"Université Droit-Economie-Gestion - Rennes 1",
			"Periode": "Septembre 2005 - Avril 2007", 
			"Precision": "Formation offrant une triple compétence en Statistiques, en Economie et en Informatique"
			
		}
		},
{"type": "Feature","geometry": 
	
	{"type": "Point", 
	"coordinates": [ 2.251813,48.892679]  },  
		"properties": {
			"Intitulé": "Stage - CDD Chargé de traitements Statistiques",		
			"Lieu":"Carat Expert (AEGIS Media)",
			"Periode": "Avril 2007 - Décembre 2007", 
			"Precision": "En charge de la mise en évidence d'un lien entre le souvenir publicitaire et notoriété d'une marque <br><br>	Participation active aux différents tracking hebdomadaires analysant les perfomances des campagnes publicitaires des clients Carat"
			
		}
		},

{"type": "Feature","geometry": 
	
	{"type": "Point", 
	"coordinates": [ 2.319964,48.844233]  },  
		"properties": {
			"Intitulé": "Analyste Programmeur",		
			"Lieu":"SocioLogiciels (NP6 Consulting)",
			"Periode": "Janvier 2008 - Août 2013", 
			"Precision": "Traitements informatiques de données d'enquête pour le compte des grands instituts de sondage. <br>"+
			"Mise en place d'analyse de données de type ACP-ACM-Bilan d'images, en vue d'orienter les conclusions et préconisations des chargé d'études des instituts."+
			"<br><br>Participation active à la création d'une cellule Géomarketing au sein de l'entreprise (réflexion et mise en place des études, rédaction de rapport"+
			"contenant des préconisations) pour le compte d'annonceur (Casino, Bricolage, Grandes distribution).  "
		}
		},
{"type": "Feature","geometry": 
	
	{"type": "Point", 
	"coordinates": [ 2.3693928,48.8558937]  },  
		"properties": {
			"Intitulé": "Développeur Informatique",		
			"Lieu":"SocioLogiciels (NP6 Consulting)",
			"Periode": "Septembre 2013 - Avril 2015", 
			"Precision": "Mise en place de solution de reporting et visualisation <br>"+
			"Acquisition de compétences en VB.net et VBA ainsi qu'en solution de visualisation via HightCharts-HightMaps"+
			"<br><br>"
		}
		},
{"type": "Feature","geometry": 
	
	{"type": "Point", 
	"coordinates": [ -0.564925,44.855207]  },  
		"properties": {
			"Intitulé": "DataScientist",		
			"Lieu":"NP6 Solution",
			"Periode": "Depuis Avril 2015", 
			"Precision": "Refléxion et mise en place de solution de segmentation des bases Clients. <br>"+
			"NP6 propose une solution en ligne de gestion de campagnes mail (de la base adresse à l'envoi de mail). Mon travail consiste à apporter des solutions de ciblage"+
			" basées sur le comportement des cibles (Modèle de Churn, d'ouverture), et sur leur localisation avec rapporchement des données OpenData de l'INSEE <br><br>"+
			"Acquisition de compétences en Python (notamment en MachineLearning), Java, ElasticSearch, Jenkins, Kafka"+
			"<br><br>"
		}
		}
		
		
		
]
}
