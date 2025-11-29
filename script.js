let searchValue = document.getElementById("search");
let searchBtn = document.getElementById("btn");
let resultDiv = document.getElementById("result");

searchBtn.addEventListener("click", () => {
    resultDiv.innerHTML = "";

    fetch("/search?name=" + searchValue.value)
        .then(r => r.json())
        .then(data => {

            //console.log(data);

            let ingName = "";
            let i = 0;

            for (let ingredient of data) {

                if (i % 10 == 0) {

                    ingDiv = document.createElement("div")
                    ingDiv.id = "ingDiv"

                    ingName = ingredient.name
                    ingNameSpan = document.createElement("span");
                    ingNameSpan.id = "ingNameSpan"
                    ingNameSpan.className = "title"
                    ingNameSpan.append(ingName);
                    ingDiv.append(ingNameSpan);
                    ingDiv.append(document.createElement("br"));
                    ingDiv.append(document.createElement("br"));
                }

                console.log(ingredient)

                let propertyType = ingredient.property_type.split("_");
                for (let j = 0; j < propertyType.length; j++) {
                    propertyType[j] = propertyType[j][0].toUpperCase() + propertyType[j].slice(1);
                }
                let readableType = propertyType.join(" ");

                ingDiv.append(readableType);
                ingDiv.append(" - ")
                ingDiv.append(ingredient.property_value);
                ingDiv.append(document.createElement("br"));

                resultDiv.append(ingDiv);

                i++
            }

        });

});