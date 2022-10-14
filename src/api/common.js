import  xhr from "./http";



export const getArtCategory = () => {
  return xhr.get("api/phylum/article_category");
};
export const getArtList= (params) => {
  return xhr.get("api/phylum/article_lists",{params});
};
export const getNewsList = () => {
  return xhr.get("api/phylum/news_lists");
};
export const getNewsDetails = (params) => {
  return xhr.get("api/phylum/news_details",{params});
};
export const getMacroLists = (params) => {
  return xhr.get("api/phylum/macro_lists",{params});
};

export const getArticleDetails = (params) => {
  return xhr.get("api/phylum/article_details",{params});
};
export const gameTokenList = (params) => {
  return xhr.get("api/phylum/game_token_list",{params});
};
export const gameTokenDetails= (params) => {
  return xhr.get("api/phylum/game_token_details",{params});
};
export const getPhylumAssetDetails= (params) => {
  return xhr.get("api/phylum/investors",{params});
};




//newApi
export const getArticles = (params)=>{
  return xhr.get("/article/getArticles",{newApi:true,params});
}
export const getTags = (params)=>{
  return xhr.get("/article/getTags",{newApi:true,params});
}

export const getAllArticles = (params)=>{
  return xhr.get("/article/getAllArticles",{newApi:true,params});
}

export const getAllArticle = (id)=>{
  return xhr.get(`/article/getArticle/${id}`,{newApi:true});
}



