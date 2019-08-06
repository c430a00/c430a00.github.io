//收藏

function AddFavorite(sURL, sTitle)
{
       if (window.sidebar) return true;
       try{
                window.external.addFavorite(sURL,sTitle);
            }catch(e){
                alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置！"); 
            }    
        return false;    
}

//设置主页
function SetHome(url)
{
    if (document.all)
    {
         document.body.style.behavior = 'url(#default#homepage)';        
        document.body.setHomePage(url);        
    } else {        
        alert("您的浏览器主页已锁定,请手动在浏览器里设置该页面为首页!");        
    }
    
}
