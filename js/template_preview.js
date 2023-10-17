var url_string  = window.location.href
var url = new URL(url_string);
var webId = url.searchParams.get("template");
var webFrame = document.getElementById("templates-preview");

var templateData = [
    // {
    //     templateId: "552035874",
    //     templateType: "Church Website",
    //     templateName: "God is Here - Church HTML5 Template",
    //     descripotion: 'by-Vinoth(Dev) in Church Theme',
    //     templateImage: "images/project_portfolio/apostolism.jpg",
    //     templateUrl: "templates/church-website-template/apostolicm/index.html",
    //     templatePrice: "Free"

    // },
    {
        templateId: "552035875",
        dataId:"construction",
        templateType: "Construction Website templates",
        templateName: "Construction - Responsive HTML5 Template.",
        descripotion: 'by-Vinoth(Dev) in Business Theme',
        templateImage: "images/project_portfolio/heatreatment.jpg",
        templateUrl: "templates/construction-websites/real-steal/index.html",
        templatePrice: "Free"

    },
    {
        templateId: "552035876",
        dataId:"business",
        templateType: "Business Website templates",
        templateName: "Safe Business - Bootstrap Template",
        descripotion: 'by-Praba(Dev) in Business Theme',
        templateImage: "images/project_portfolio/business-template01.jpg",
        templateUrl: "templates/business-websites/business-theme/index.html",
        templatePrice: "Free"

    },
    {
        templateId: "552035877",
        dataId:"business",
        templateType: "Business Website templates",
        templateName: "Digital Expert - Expert HTML5 Template",
        descripotion: 'by-Vinoth(Dev) in Expert Theme',
        templateImage: "images/project_portfolio/business-template02.jpg",
        templateUrl: "templates/business-websites/business-theme03/index.html",
        templatePrice: "Free"

    },
    {
        templateId: "552035878",
        dataId:"business",
        templateType: "Business Website templates",
        templateName: "SellTra - Construction & Renovation HTML5 Template",
        descripotion: 'by-Vinoth(Dev) in Business Theme',
        templateImage: "images/project_portfolio/interior-creatior.jpg",
        templateUrl: "templates/construction-websites/interior-creatior/index.html",
        templatePrice: "Free"

    },
    {
        templateId: "552035879",
        dataId:"business",
        templateType: "Corporate Website templates",
        templateName: "MKS - Consultant Bootstrap Template",
        descripotion: 'by-Vinoth(Dev) in Business Theme',
        templateImage: "images/project_portfolio/mks.jpg",
        templateUrl: "templates/coporate-websites/corporate-theme_01/index.html",
        templatePrice: "Free"

    },
    {
        templateId: "552035880",
        dataId:"music",
        templateType: "Music Website templates",
        templateName: "Artist - Portfolio HTML5 Template ",
        descripotion: 'by-Praba(Dev) in Portfolio Theme',
        templateImage: "images/project_portfolio/artist.jpg",
        templateUrl: "templates/music-websites/music-theme/index.html",
        templatePrice: "Free"

    },
    {
        templateId: "552035881",
        dataId:"hotal_restaurant",
        templateType: "Hotal & Restaurant Website templates",
        templateName: "Spicy - Hotal & Restaurant HTML5 Template",
        descripotion: 'by-Praba(Dev) in Business Theme',
        templateImage: "images/project_portfolio/laureel.jpg",
        templateUrl: "templates/restaurant-websites/restaurant-theme/index.html",
        templatePrice: "Free"

    },
    {
        templateId: "552035882",
        dataId:"potography",
        templateType: "Potography Website templates",
        templateName: "Huegraphs - Potography Bootstrap Template",
        descripotion: 'by-Vinoth(Dev) in Business Theme',
        templateImage: "images/project_portfolio/huegraph.jpg",
        templateUrl: "templates/potography-wesites/huegraphics/index.html",
        templatePrice: "Free"

    },
    {
        templateId: "552035883",
        dataId:"music",
        templateType: "Music Website templates",
        templateName: "Music Freak - Portfolio HTML5 Template",
        descripotion: 'by-Vinoth(Dev) in Portfolio Theme',
        templateImage: "images/project_portfolio/Music-for-everyone.jpg",
        templateUrl: "templates/music-websites/naadham-foundation/index.html",
        templatePrice: "Free"

    },
    {
        templateId: "552035884",
        dataId:"business",
        templateType: "Business Website templates",
        templateName: "Armorc - Business HTML5 Template",
        descripotion: 'by-Vinoth(Dev) in Business Theme',
        templateImage: "images/project_portfolio/armorc.jpg",
        templateUrl: "templates/business-websites/business-theme02/index.html",
        templatePrice: "Free"
    },
    // {
    //     templateId: "552035885",
    //    dataId:"business",
    //     templateType: "Business Website templates",
    //     templateName: "Exam - Bootstrap Template",
    //     descripotion: 'by-Vinoth(Dev) in Business Theme',
    //     templateImage: "images/project_portfolio/exam.jpg",
    //     templateUrl: "templates/business-websites/business-theme04/index.html",
    //     templatePrice: "Free"
    // },
    {
        templateId: "552035886",
        dataId:"hospitality",
        templateType: "Hospitality Website templates",
        templateName: "Hospitality - Responsive HTML5 Template",
        descripotion: 'by-Vinoth(Dev) in Hospitality Theme',
        templateImage: "images/project_portfolio/hospitality.jpg",
        templateUrl: "templates/hospitality-websites/hospitality-theme/index.html",
        templatePrice: "Free"
    },
    {
        templateId: "552035887",
        dataId:"tourism",
        templateType: "Tourism Website templates",
        templateName: "Destination - Responsive HTML5 Template",
        descripotion: 'by-Vinoth(Dev) in Tourism Theme',
        templateImage: "images/project_portfolio/tourism.jpg",
        templateUrl: "templates/tourism-websites/travels-theme/index.html",
        templatePrice: "Free"
    }
]



for(var x of templateData){
    if(x.templateId === webId){
        webFrame.src = x.templateUrl;
    }

}
var temView = document.getElementById("templateRow");

templateData.forEach( function(obj, index) {
    var templateRow = document.getElementById("templateRow");

    if(index < parseInt(templateRow.getAttribute("data-max"))){
        var tmpBox = document.createElement("div");
        var portfolioBox = document.createElement("div");
        var portfolioImg = document.createElement("div");
        var portfolioContent = document.createElement("div");
        var openPortfolio = document.createElement("div");
        var portfolioContent = document.createElement("div");
        var portfolioText = document.createElement("div");
        var designTools = document.createElement("div");
        var priceTemplate = document.createElement("div");
        var priceWeb = document.createElement("div");
        var designToolsBtn = document.createElement("div");

        //Link tag
        var arrowLink = document.createElement("a");
        var imgLink = document.createElement("a");
        var previewBtn = document.createElement("a");
        var detailBtn = document.createElement("a");
        //images
        var imgTag = document.createElement("img");
        //Icons
        var shareIcon = document.createElement("i");
        var priceIcon = document.createElement("i");
        var priceIcon = document.createElement("i");
        var previewIcon = document.createElement("i");
        var detailIcon = document.createElement("i");
        //text tag
        var title = document.createElement("h2");
        var txt = document.createElement("p");
        var price = document.createElement("span");

        tmpBox.setAttribute("class", "col-sm-6 col-md-3");
        portfolioBox.setAttribute("class", "portfolio_box");
        portfolioImg.setAttribute("class", "portfolio_img");
        portfolioContent.setAttribute("class", "portfolio_content");
        portfolioText.setAttribute("class", "portfolio_text");
        designTools.setAttribute("class", "design_tools");
        priceTemplate.setAttribute("class", "price-template");
        priceWeb.setAttribute("class", "price-web");
        openPortfolio.setAttribute("class", "open_portfolio");
        designToolsBtn.setAttribute("class", "design_tools_btn");

        previewBtn.setAttribute("class", "preview-btn");
        previewBtn.setAttribute("target", "_blank");
        detailBtn.setAttribute("class", "details-btn");
        detailBtn.setAttribute("target", "_blank");
        arrowLink.setAttribute("target", "_blank");
        imgLink.setAttribute("class", "link_overlap");
        imgLink.setAttribute("target", "_blank");

        previewIcon.setAttribute("class", "fa fa-external-link");
        previewIcon.setAttribute("aria-hidden", "true");
        shareIcon.setAttribute("class", "fa fa-share");
        shareIcon.setAttribute("aria-hidden", "true");
        detailIcon.setAttribute("class", "fa fa-info-circle");
        detailIcon.setAttribute("aria-hidden", "true");

        // Portfolio box
        arrowLink.setAttribute("href", "preview-template.html?template="+obj.templateId);
        imgLink.setAttribute("href", "website-template-details.html");
        imgTag.setAttribute("src", obj.templateImage);
        arrowLink.appendChild(shareIcon);
        openPortfolio.appendChild(arrowLink);
        portfolioImg.appendChild(imgLink);
        portfolioImg.appendChild(imgTag);
        portfolioImg.appendChild(openPortfolio);
        
        //Content 
        title.innerText = obj.templateName;
        txt.innerText = obj.descripotion;
        portfolioText.appendChild(title)
        portfolioText.appendChild(txt)
        portfolioContent.appendChild(portfolioText);

        //price
        price.innerText = obj.templatePrice;
        priceWeb.appendChild(price);
        priceTemplate.appendChild(priceWeb);
        designTools.appendChild(priceTemplate);

        //Bottons
        detailBtn.setAttribute("href", "website-template-details.html");
        previewBtn.setAttribute("href", "preview-template.html?template="+obj.templateId);
       // detailBtn.innerText = "Detail";
        detailBtn.prepend(detailIcon);
        previewBtn.innerText = "Preview";
        previewBtn.appendChild(previewIcon);
        //designToolsBtn.appendChild(detailBtn);
        designToolsBtn.appendChild(previewBtn);
        designTools.appendChild(designToolsBtn);
        portfolioContent.appendChild(designTools);

        //Main container
        portfolioBox.appendChild(portfolioImg);
        portfolioBox.appendChild(portfolioContent);
        tmpBox.appendChild(portfolioBox);
        templateRow.appendChild(tmpBox);
    }

    if(templateRow.getAttribute("data-max") === "infinit"){
        var tmpBox = document.createElement("div");
        var portfolioBox = document.createElement("div");
        var portfolioImg = document.createElement("div");
        var portfolioContent = document.createElement("div");
        var openPortfolio = document.createElement("div");
        var portfolioContent = document.createElement("div");
        var portfolioText = document.createElement("div");
        var designTools = document.createElement("div");
        var priceTemplate = document.createElement("div");
        var priceWeb = document.createElement("div");
        var designToolsBtn = document.createElement("div");

        //Link tag
        var arrowLink = document.createElement("a");
        var imgLink = document.createElement("a");
        var previewBtn = document.createElement("a");
        var detailBtn = document.createElement("a");
        //images
        var imgTag = document.createElement("img");
        //Icons
        var shareIcon = document.createElement("i");
        var priceIcon = document.createElement("i");
        var priceIcon = document.createElement("i");
        var previewIcon = document.createElement("i");
        var detailIcon = document.createElement("i");
        //text tag
        var title = document.createElement("h2");
        var txt = document.createElement("p");
        var price = document.createElement("span");

        tmpBox.setAttribute("class", "col-sm-6 col-md-3");
        portfolioBox.setAttribute("class", "portfolio_box");
        portfolioBox.setAttribute("data-fill", obj.dataId);
        portfolioImg.setAttribute("class", "portfolio_img");
        portfolioContent.setAttribute("class", "portfolio_content");
        portfolioText.setAttribute("class", "portfolio_text");
        designTools.setAttribute("class", "design_tools");
        priceTemplate.setAttribute("class", "price-template");
        priceWeb.setAttribute("class", "price-web");
        openPortfolio.setAttribute("class", "open_portfolio");
        designToolsBtn.setAttribute("class", "design_tools_btn");

        previewBtn.setAttribute("class", "preview-btn");
        previewBtn.setAttribute("target", "_blank");
        detailBtn.setAttribute("class", "details-btn");
        detailBtn.setAttribute("target", "_blank");
        arrowLink.setAttribute("target", "_blank");
        imgLink.setAttribute("class", "link_overlap");
        imgLink.setAttribute("target", "_blank");

        previewIcon.setAttribute("class", "fa fa-external-link");
        previewIcon.setAttribute("aria-hidden", "true");
        shareIcon.setAttribute("class", "fa fa-share");
        shareIcon.setAttribute("aria-hidden", "true");
        detailIcon.setAttribute("class", "fa fa-info-circle");
        detailIcon.setAttribute("aria-hidden", "true");

        // Portfolio box
        arrowLink.setAttribute("href", "preview-template.html?template="+obj.templateId);
        imgLink.setAttribute("href", "website-template-details.html");
        imgTag.setAttribute("src", obj.templateImage);
        arrowLink.appendChild(shareIcon);
        openPortfolio.appendChild(arrowLink);
        portfolioImg.appendChild(imgLink);
        portfolioImg.appendChild(imgTag);
        portfolioImg.appendChild(openPortfolio);
        
        //Content 
        title.innerText = obj.templateName;
        txt.innerText = obj.descripotion;
        portfolioText.appendChild(title)
        portfolioText.appendChild(txt)
        portfolioContent.appendChild(portfolioText);

        //price
        price.innerText = obj.templatePrice;
        priceWeb.appendChild(price);
        priceTemplate.appendChild(priceWeb);
        designTools.appendChild(priceTemplate);

        //Bottons
        detailBtn.setAttribute("href", "website-template-details.html");
        previewBtn.setAttribute("href", "preview-template.html?template="+obj.templateId);
       // detailBtn.innerText = "Detail";
        detailBtn.prepend(detailIcon);
        previewBtn.innerText = "Preview";
        previewBtn.appendChild(previewIcon);
        //designToolsBtn.appendChild(detailBtn);
        designToolsBtn.appendChild(previewBtn);
        designTools.appendChild(designToolsBtn);
        portfolioContent.appendChild(designTools);

        //Main container
        portfolioBox.appendChild(portfolioImg);
        portfolioBox.appendChild(portfolioContent);
        tmpBox.appendChild(portfolioBox);
        templateRow.appendChild(tmpBox);
    }

    $(".link_overlap").on("click", function(e){
        e.preventDefault();
    })

});
    
    


