function toggleCategory(category){
    var category1Element= document.getElementById("category1");
    var category2Element= document.getElementById("category2");
    var category3Element= document.getElementById("category3");

    var category1Button = document.getElementById("cate1Btn");
    var category2Button = document.getElementById("cate2Btn");
    var category3Button = document.getElementById("cate3Btn");

    switch (category) {
        case "cate1":
            category1Element.style.display ="block";
            category2Element.style.display ="none";
            category3Element.style.display ="none";

            category1Button.style.backgroundColor="#FFF";
            category2Button.style.backgroundColor="gray";
            category3Button.style.backgroundColor="gray";


            break;
        case "cate2":
            category2Element.style.display ="block";
            category1Element.style.display ="none";
            category3Element.style.display ="none";


            category2Button.style.backgroundColor="#FFF";
            category1Button.style.backgroundColor="gray";
            category3Button.style.backgroundColor="gray";
            break;
        case "cate3":
            category3Element.style.display ="block";
            category2Element.style.display ="none";
            category1Element.style.display ="none";

            category3Button.style.backgroundColor="#FFF";
            category2Button.style.backgroundColor="gray";
            category1Button.style.backgroundColor="gray";

            break;

        default:
            break;


    }
}
