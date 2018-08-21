var showPortfolio = 1;


function show(showPortfolio) {
    var categoryArray = document.getElementsByClassName('ceteforyList');

    if ( showPortfolio == 1) {
        var portfolioArray = document.getElementsByClassName('all');
        
        for (i = 0; i < portfolioArray.length; i++) { 
            portfolioArray[i].style.display = "block";
        }
        
    }if (showPortfolio == 2) {
        var portfolioArray = document.getElementsByClassName('psd-to-html');
        var portfolioHide = document.getElementsByClassName('all');
        
        for (i = 0; i < portfolioHide.length; i++) { 
            portfolioHide[i].style.display = "none";
        }

        for (i = 0; i < portfolioArray.length; i++) { 
            portfolioArray[i].style.display = "block";
        }
    } if (showPortfolio == 3) {
        var portfolioArray = document.getElementsByClassName('js-games');
        var portfolioHide = document.getElementsByClassName('all');
        
        for (i = 0; i < portfolioHide.length; i++) { 
            portfolioHide[i].style.display = "none";
        }
        for (i = 0; i < portfolioArray.length; i++) { 
            portfolioArray[i].style.display = "block";
        }
    } if (showPortfolio == 4) {
        var portfolioArray = document.getElementsByClassName('wordpress');
        var portfolioHide = document.getElementsByClassName('all');
        
        for (i = 0; i < portfolioHide.length; i++) { 
            portfolioHide[i].style.display = "none";
        }
        for (i = 0; i < portfolioArray.length; i++) { 
            portfolioArray[i].style.display = "block";
        }
        
    } {
        
    }
}
