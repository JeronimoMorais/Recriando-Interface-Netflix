document.querySelector('#likeBtn').addEventListener('click', function() { 
    
    document.getElementById("deslikeBtn").style.display = "none";

});

document.querySelector('#deslikeBtn').addEventListener('click', function() { 

    document.getElementById("likeBtn").style.display = "none";

});