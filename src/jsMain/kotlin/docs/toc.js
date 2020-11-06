
        window.addEventListener('load', function() {
            console.log('Check again all loaded');
            toc = document.getElementsByTagName("H2");
            console.log("nHeadings = " + toc.length)
            for (x in toc) {
              console.log(x.innerHTML);
              x.innerHTML += " () "
              x.style.backgroundColor = "blue"
            }
        })

// x.getElementsByTagName("*")[3].style.backgroundColor = "red";

