window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("back-to-top").style.display = "block";
            } else {
                document.getElementById("back-to-top").style.display = "none";
            }
        }

        function scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Preventing form submission
                    
            // Retrieving values from form inputs
        var email = document.getElementById('email').value;
         var password = document.getElementById('password').value;
        
            // Clearing form inputs
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        
            // Hiding the form
        document.getElementById('loginForm').style.display = 'none';
  });