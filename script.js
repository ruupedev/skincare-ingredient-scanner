let searchValue = document.getElementById("search");
let searchBtn = document.getElementById("btn");
let resultDiv = document.getElementById("result");

searchValue.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchBtn.click(); // triggers the same search logic
    }
});

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

                //console.log(ingredient)

                let propertyType = ingredient.property_type.split("_");
                for (let j = 0; j < propertyType.length; j++) {
                    propertyType[j] = propertyType[j][0].toUpperCase() + propertyType[j].slice(1);
                }

                let readableType = propertyType.join(" ");

                propertySpan = document.createElement("span")

                colorCircle = document.createElement("span");
                colorCircle.id = "colorCircle";

                propertySpan.append(readableType);
                propertySpan.append(" - ")
                propertySpan.append(ingredient.property_value);
                let p = ingredient.property_value;
                propertySpan.append(colorCircle)

                // Map risk words to traffic-light colors so user sees risk level quickly.
                function getRiskColor(value) {
                    if (!value) return "gray";
                    const v = value.toLowerCase();

                    // ✅ good / safe
                    if (
                        v.includes("very low") ||
                        v.includes("generally yes") ||
                        v === "no" ||
                        v === "safe"
                    ) {
                        return "green";
                    }

                    // 🙂 mostly ok
                    if (v.includes("low")) {
                        return "yellowgreen"; // between green and yellow
                    }

                    // 😬 mixed / uncertain
                    if (
                        v.includes("moderate") ||
                        v.includes("limited data") ||
                        v.includes("depends") ||
                        v.includes("some evidence") ||
                        v.includes("suspected") ||
                        v.includes("generally no")
                    ) {
                        return "orange";
                    }

                    // ❌ bad / avoid
                    if (
                        v.includes("high") ||
                        v.includes("avoid") ||
                        v.includes("strong evidence") ||
                        v.includes("hormone disruptor") ||
                        v.includes("endocrine disruptor")
                    ) {
                        return "red";
                    }

                    // default if nothing matched
                    return "gray";
                }

                colorCircle.style.backgroundColor = getRiskColor(p);
                propertySpan.append(colorCircle);

                propertySpan.append(document.createElement("br"));

                ingDiv.append(propertySpan);
                resultDiv.append(ingDiv);

                i++
            }

        });

});