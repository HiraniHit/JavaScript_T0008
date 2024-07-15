

const recipeData = [
    { 
        id :1 ,
        name : "pavbhaji",
        ingredients : [ "solt" , "bread" , 'coriander seeds', 'black cardamom',' green cardamoms', 'cumin',' black pepper', 'fennel seeds', 'red chilies', 'cinnamon','menda'],
        price : 200 ,
        quntity : 1,
        avalibility : "yes",
        category : "dinner"
    },
    { 
        id :2 ,
        name : "vadapav",
        ingredients : [ "solt" , "bread" ,"potatoes" ,"garlic" ,"green chillies" ,"turmeric powder","curry leaves",'menda'],
        price : 20 ,
        quntity : 1,
        avalibility : "no",
        category : "fast-food"
    },
    { 
        id :3 ,
        name : "alopuri",
        ingredients : [ "solt" , 'potatoes' , 'menda' ,'rava','turmeric'],
        price : 30 ,
        quntity : 10,
        avalibility : "yes",
        category : "fast-food"
    },
    { 
        id :4 ,
        name : "gujrati thali",
        ingredients : [ "dal" , "bhat" , 'panner' , 'oil' ,'roti','rosted-papad','papad','butter-milk'],
        price : 120 ,
        quntity : 1,
        avalibility : "no",
        category : "lunch"
    },
    { 
        id :5 ,
        name : "bhakhri",
        ingredients : [ "solt" , "water" , 'wheat'],
        price : 20 ,
        quntity : 1,
        avalibility : "yes",
        category : "dinner"
    }
    
 ]

 localStorage.setItem("recipe",JSON.stringify(recipeData))

