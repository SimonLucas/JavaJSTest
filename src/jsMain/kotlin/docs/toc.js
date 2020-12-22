
        window.addEventListener('load', function() {
            console.log('Check again all loaded');
            toc = document.getElementsByTagName("h2");
            console.log("nHeadings = " + toc.length)
            for (x in toc) {
              console.log(x.innerHTML);
              x.innerHTML += " () "
                // I don't whz this script exists, but there has been an error with accessing the style of the element
                // x in toc results in receiving the index or name of an element
                // instead of x.style.backgroundColor we need to use toc[x].style.backgroundColor
              //toc[x].style.backgroundColor = "blue"
            }
        })

// x.getElementsByTagName("*")[3].style.backgroundColor = "red";

