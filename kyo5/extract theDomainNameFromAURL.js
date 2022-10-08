function domainName(url){
    if(!url.includes("https://") && !url.includes("http://")) url = "https://" + url
    const u =  new URL(url).hostname
    return u.includes("www.") ? u.split('.')[1] : u.split('.')[0] 
  }