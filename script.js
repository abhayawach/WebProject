const quotes = document.getElementById("title")
        const author = document.getElementById("author")
        const btn = document.getElementById("btn")
        const no = document.getElementById("no")

        let realData=""

        const newQuotes = ()=>{
            const ranum = Math.floor(Math.random() * 10)
            quotes.innerHTML=`${realData[ranum].text}`
            author.innerHTML=`${realData[ranum].author}`
            no.innerHTML=`${ranum}`
        }

        const getQuotes = async() =>{
            const api = ("https://type.fit/api/quotes")

            let t = new Date()
            t.setHours(5)
            document.getElementById("date").innerHTML = t.toLocaleDateString();
            try {
                const data = await fetch(api)
                realData = await data.json()
                console.log(realData[0].author)
                console.log(realData)

                newQuotes()

            } catch (error) {}
        }

        btn.addEventListener("click",newQuotes)
        getQuotes()